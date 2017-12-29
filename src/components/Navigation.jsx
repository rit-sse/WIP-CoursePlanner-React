import React from 'react';
import {observer} from 'mobx-react';
import {
  ButtonDropdown,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Navbar,
  NavbarBrand,
  Nav } from 'reactstrap';
import Dropzone from 'react-dropzone';
import { FaCloudUpload, FaDownload } from 'react-icons/lib/fa';
import '../styles/objects.Navigation.scss';

export const Navigation = observer(({ store }) => (
  <div className="top-level-nav">
    <Navbar color="light" expand="sm">
      <NavbarBrand href="/">Plan Your Courses</NavbarBrand>
      <Collapse isOpen navbar>
        <Nav className="ml-auto" navbar>
          <ButtonDropdown isOpen={store.saveDropdownOpened} toggle={store.toggleSaveDropdown}>
            <DropdownToggle caret>
              Save or Load
            </DropdownToggle>
            <DropdownMenu>
              <Dropzone className="dropzone" acceptClassName="activeDropzone" onDrop={store.handleFileDrop.bind(store)}>
                <p>Drop a file here
                  <br /><b>or</b><br />
                  click to select a file on your computer.
                </p>
              </Dropzone>
              <DropdownItem divider />
              <DropdownItem onClick={store.giveUserJSON.bind(store)}>
                <FaDownload />
                <span>Save to your computer</span>
              </DropdownItem>
              <DropdownItem>
                <FaCloudUpload />
                <span>Save to the cloud</span>
              </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
));
