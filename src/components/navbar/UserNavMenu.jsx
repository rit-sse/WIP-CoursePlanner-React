import React from 'react';
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

class LoginMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
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
            <Input placeholder="Username" type="text" />
            <Input placeholder="Password" type="password" />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            <Button color="primary" onClick={this.props.loginFn}>Login</Button>
          </ModalFooter>
        </Modal>
      </div>
      );
  }
}

const UserMenu = ({ user }) => (
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
      <DropdownItem>
        Logout
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
);

export default ({ user, loginFn }) => {
  if(!user) {
    return <LoginMenu loginFn={loginFn} />;
  }

  return <UserMenu user={user} />;
};

