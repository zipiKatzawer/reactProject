import React from 'react';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import Button from '@mui/material/Button';

import AddService from './addService';
import ShowService from './showService';

const Service = observer(() => {
  const [open, setOpen] =useState(false);

  const handleClick = () => {
    setOpen(true);
  };


  return (
    <div>
      <h1>Service</h1>
      <ShowService/>
<br />
      <Button onClick={handleClick} variant="outlined" size="small">
        Add New Service
      </Button>
      {open && <AddService setOpen={setOpen} />}
    </div>
  );
});

export default Service;