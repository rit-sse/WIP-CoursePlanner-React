import React from 'react';
import { inject, observer } from 'mobx-react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
} from 'reactstrap';
import UserNavMenu from './navbar/UserNavMenu.jsx';
import SaveBtn from './navbar/SaveBtn.jsx';
import SaveLoadDropdown from './navbar/SaveLoadDropdown.jsx';
import '../styles/objects.Navigation.scss';

export const Navigation = inject('store')(observer(({ store }) => (
  <div className="top-level-nav">
    <Navbar color="light" expand="sm" className="navbar-dark bg-dark">
      <NavbarBrand href="/"> Plan Your Courses </NavbarBrand>
      <SaveBtn saveFn={store.savePlan.bind(store)} />
      <Collapse isOpen navbar>
        <Nav className="ml-auto" navbar>
          <SaveLoadDropdown
            handleFileDrop={store.handleFileDrop.bind(store)}
            giveUserJSON={store.giveUserJSON.bind(store)}
          />
          <UserNavMenu user={store.user} />
        </Nav>
      </Collapse>
    </Navbar>
  </div>
)));
