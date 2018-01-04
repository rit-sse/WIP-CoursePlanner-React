import React from 'react';
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from 'reactstrap';

export default ({ user }) => {
  if(!user) {
    return (
      <NavItem>
        <NavLink>Login</NavLink>
      </NavItem>
      );
  }

  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        { user.name }
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
};

