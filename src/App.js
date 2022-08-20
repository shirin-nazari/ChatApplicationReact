import Button from '@material-ui/core/Button';
import React from 'react';
import { SaveAltSharp } from '@material-ui/icons';
import { LeakRemove } from '@material-ui/icons';
import './App.css';
import { ButtonGroup, Checkbox, FormControlLabel } from '@material-ui/core';
import { useState } from 'react';
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';

const useStyle = makeStyles({
  root: {
    background: 'linear-gradient(45deg,#ff6B88,#ff8E53)',
    // backgroundColor: 'red',
    margin: 30,
    border: '0',
    borderRadius: 15,
    color: 'white',
    padding: '0 30px',
  },
});
const theme=createMuiTheme({
  palette:{
    primary:{
      main:
    }
  }
})
function ButtonStyled() {
  const classes = useStyle();
  return <Button className={classes.root}>Test Styles</Button>;
}
function CheckBoxs() {
  const [checked, setChecked] = useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{
            'aria-label': 'secondary checkbox',
          }}
        />
      }
      label="testing checkbox"
    />
  );
}
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {' '}
      <CheckBoxs />
      <h2>hi hi</h2>
      <ButtonStyled />
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
    </ThemeProvider>
  );
}
