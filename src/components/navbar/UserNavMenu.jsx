import React from 'react';
import { observer } from 'mobx-react';
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  UncontrolledDropdown,
} from 'reactstrap';

const UserMenu = observer(({ user, logoutFn}) => (
  <UncontrolledDropdown nav inNavbar>
    <DropdownToggle nav caret>
      {user.name}
    </DropdownToggle>
    <DropdownMenu >
      <DropdownItem>
        Option 1
      </DropdownItem>
      <DropdownItem>
        Option 2
      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem onClick={logoutFn}>
        Logout
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
));

class LoginMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      email: '',
      password: '',
    };

    this.toggle = this.toggle.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  emailChange(e) {
    this.setState({email: e.target.value});
  }

  passwordChange(e) {
    this.setState({password: e.target.value});
  }

  login() {
    this.props.loginFn(this.state.email, this.state.password);
  }

  register() {
    this.props.registerFn(this.state.email, this.state.password);
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>Login</Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          fade={false}
        >
          <ModalHeader toggle={this.toggle}>Login</ModalHeader>
          <ModalBody>
            <Input placeholder="Email" type="email" onChange={this.emailChange.bind(this)} />
            <Input placeholder="Password" type="password" onChange={this.passwordChange.bind(this)} />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            <Button color="primary" onClick={this.login.bind(this)}>Login</Button>
            <Button color="primary" onClick={this.register.bind(this)}>Sign Up</Button>
          </ModalFooter>
        </Modal>
      </div>
      );
  }
}

export default observer(({ user, loginFn, registerFn, logoutFn }) => {
  if(!user) {
    return <LoginMenu
      loginFn={loginFn}
      registerFn={registerFn}
    />;
  }
  return <UserMenu user={user} logoutFn={logoutFn} />;
});

