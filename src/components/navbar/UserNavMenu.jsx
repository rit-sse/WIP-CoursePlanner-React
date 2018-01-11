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

const UserMenu = observer(({ user }) => (
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
));

export default observer(({ user }) => {
  if(!user.isLoggedIn) {
    return <Button>Login / Sign Up</Button>
  }
  return <UserMenu user={user} />;
});

