import React from 'react';
import Dropzone from 'react-dropzone';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { FaDownload } from 'react-icons/lib/fa';

export default class SaveLoadDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Save or Load
        </DropdownToggle>
        <DropdownMenu>
          <Dropzone
            className="dropzone"
            acceptClassName="activeDropzone"
            onDrop={this.props.handleFileDrop}
          >
            <p>Drop a file here
              <br /><b>or</b><br />
              click to select a file on your computer.
            </p>
          </Dropzone>
          <DropdownItem divider />
          <DropdownItem onClick={this.props.giveUserJSON}>
            <FaDownload />
            <span>Save to your computer</span>
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
      );
  }
}
