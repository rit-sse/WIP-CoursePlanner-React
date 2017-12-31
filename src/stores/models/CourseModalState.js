import { action, observable } from 'mobx';
import { CourseModel } from './CourseModel';
import startCase from 'lodash.startcase';

export class CourseModalState {

  @observable
  isOpen;

  @observable
  advancedIsOpen;

  @observable
  prereqsIsOpen;

  @observable
  prereqPickerIsOpen;

  @observable
  courseRef;

  @observable
  planRef;

  @observable
  courseCopy;

  @observable
  previewColor;

  @observable
  addPrereqStage = [];

  @observable
  addUnlistedModalIsOpen;

  creditsInputRef;

  constructor(plan) {
    this.isOpen = false;
    this.advancedIsOpen = false;
    this.prereqsIsOpen = false;
    this.prereqPickerIsOpen = false;
    this.addUnlistedModalIsOpen = false;
    this.courseCopy = new CourseModel();
    this.courseRef = new CourseModel();
    this.planRef = plan;
  }

  @action toggleIsOpen(course) {
    if (!this.isOpen) {
      // if it hadn't been opened, initialize first
      if (course) {
        this.init(course);
      }
    } else {
      // if it had been opened, collapes the sections
      this.advancedIsOpen = false;
      this.prereqsIsOpen = false;
      this.prereqPickerIsOpen = false;
    }
    this.isOpen = !this.isOpen;
  }

  @action.bound toggleAdvanced() {
    this.advancedIsOpen = !this.advancedIsOpen;
  }

  @action.bound togglePrereqs() {
    this.prereqsIsOpen = !this.prereqsIsOpen;
  }

  @action.bound togglePrereqPicker() {
    this.prereqPickerIsOpen = !this.prereqPickerIsOpen;
  }

  @action.bound toggleAddUnlisted() {
    this.addUnlistedModalIsOpen = !this.addUnlistedModalIsOpen;
  }

  @action init(course) {
    this.courseRef = course;
    this.courseCopy = observable(new CourseModel(
      course.name,
      course.dept,
      course.num,
      course.credits,
      course.isPlaceholder,
      course.prereqs,
    ));
    this.previewColor = this.planRef.colorScheme.get(course.dept);
  }

  handleDeptChange(changeEvent) {
    const newDept = changeEvent.target.value.toUpperCase();
    const deptColorRef = this.planRef.colorScheme.get(newDept);
    if (deptColorRef) {
      this.previewColor = deptColorRef;
    }
    this.courseCopy.setDept(newDept);
  }

  handleNumChange(changeEvent) {
    this.courseCopy.setNum(changeEvent.target.value);
  }

  handleTitleChange(changeEvent) {
    const newName = startCase(changeEvent.target.value);
    this.courseCopy.setName(newName);
  }

  setCreditsInputRef(ref) {
    this.creditsInputRef = ref;
    if (this.creditsInputRef) {
      this.creditsInputRef.value = parseInt(this.courseRef.credits);
    }
  }

  handleCreditsChange(changeEvent) {
    const newCredits = parseInt(changeEvent.target.value);
    this.courseCopy.setCredits(newCredits);
  }

  handleSelectColor(color) {
    this.previewColor = color.hex;
  }

  @action.bound saveChanges() {
    this.courseRef.setName(this.courseCopy.name);
    this.courseRef.setDept(this.courseCopy.dept);
    this.courseRef.setNum(this.courseCopy.num);
    this.courseRef.setCredits(this.courseCopy.credits);
    this.courseRef.setPrereqs(this.courseCopy.prereqs);
    this.courseRef.setIsPlaceholder(this.courseCopy.isPlaceholder);
    this.planRef.colorScheme.set(this.courseRef.dept, this.previewColor);
    this.toggleIsOpen();
  }

  @action.bound addUnlistedPrereq(prereq) {
    // If there are no duplicate courses in the prereq list,
    // then add this course to the list
    const dupCourse = this.courseCopy.prereqs.find(thisReq => {
       return (thisReq.dept === prereq.dept) && (thisReq.num === prereq.num);
    });
    if (!dupCourse) this.courseCopy.prereqs.push(prereq);
  }

  @action handleAddStagedPrereq(event, data) {
    this.addPrereqStage.replace(data.value);
  }

  @action commitStagedPrereqs() {
    const dedupedStage = this.addPrereqStage.filter(stagedReq => {
      const foundDup = this.courseCopy.prereqs.find(req =>
        ((req.dept === stagedReq.dept) && (req.num === stagedReq.num))
      );
      if (!foundDup) return true;
    });
    const mergedStage = Array.concat(dedupedStage, this.courseCopy.prereqs.peek());
    this.courseCopy.prereqs.replace(mergedStage);
    this.addPrereqStage = [];
    this.togglePrereqPicker();
  }

}
