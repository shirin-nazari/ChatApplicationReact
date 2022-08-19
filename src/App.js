import Button from '@material-ui/core/Button';
import React from 'react';
import { SaveAltSharp } from '@material-ui/icons';
import { LeakRemove } from '@material-ui/icons';
import './App.css';
import { ButtonGroup, Checkbox } from '@material-ui/core';
import { useState } from 'react';
function CheckBoxs() {
  const [checked, setChecked] = useState(true);
  return (
    <Checkbox
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
      inputProps={{
        'aria-label':'secondary checkbox'
      }}
    />
  );
}
export default function App() {
  return (
    <>
      {' '}
      <CheckBoxs />
      <h1>hi Iam developer</h1>
      <ButtonGroup>
        <Button
          variant="contained"
          color="secondary"
          // startIcon=
          endIcon={<SaveAltSharp />}
          onClick={() => console.log('heeeeeee')}
        >
          Shirin
        </Button>
        <Button
          variant="contained"
          // startIcon=
          color="primary"
          endIcon={<LeakRemove />}
          onClick={() => console.log('heeeeeee')}
        >
          bahar
        </Button>
      </ButtonGroup>
    </>
  );
}
