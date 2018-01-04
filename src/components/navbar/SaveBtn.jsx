import React from 'react';
import { Button } from 'reactstrap';
import { FaFloppyO } from 'react-icons/lib/fa';

export default ({ saveFn }) => (
  <Button onClick={saveFn}>
    <FaFloppyO /> Save
  </Button>
);
