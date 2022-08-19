import Button from '@material-ui/core/Button';
import React from 'react';
import { SaveAltSharp } from '@material-ui/icons';
import { LeakRemove } from '@material-ui/icons';
import './App.css';
import { ButtonGroup } from '@material-ui/core';
const CheckBox = () => {
  return <CheckBox checked />;
};

export default function App() {
  return (
    <>
      {' '}
      <h1>hi Iam developer</h1>
      <CheckBox />
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
