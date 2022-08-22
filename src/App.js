import Button from '@material-ui/core/Button';
import React from 'react';
import { SaveAltSharp } from '@material-ui/icons';
import { LeakRemove } from '@material-ui/icons';
import './App.css';
import Typography from '@material-ui/core/Typography';
import { ButtonGroup, Checkbox, FormControlLabel } from '@material-ui/core';
import { useState } from 'react';
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { orange, green } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import '@fontsource/roboto';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuOutlined from '@material-ui/icons/MenuOutlined';
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
const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
    },
  },
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: green[500],
    },
  },
});
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
      <Container maxWidth="xs">
        <AppBar color="secondary">
          <Toolbar>
            <IconButton>
              <MenuOutlined />
            </IconButton>
            <Typography variant="h6">MUI Theming</Typography>
            <Button>Login</Button>
          </Toolbar>
        </AppBar>{' '}
        <CheckBoxs />
        <Typography variant="h2" component="div">
          Welcome in MUI
        </Typography>
        <Typography variant="subtitle1">
          learn how to use material ui
        </Typography>
        <ButtonStyled />
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Paper style={{ height: 75, width: ' 100%' }}></Paper>
          </Grid>
          <Grid item xs={3} sm={6}>
            <Paper style={{ height: 75, width: '100%' }}></Paper>
          </Grid>
          <Grid item xs={3} sm={6}>
            <Paper style={{ height: 75, width: '100%' }}></Paper>
          </Grid>
        </Grid>
        hi hi
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
      </Container>
    </ThemeProvider>
  );
}
