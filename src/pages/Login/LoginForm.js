import React, { useState, createContext, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LocalTaxiRoundedIcon from '@material-ui/icons/LocalTaxiRounded';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  const ctx = useContext(Context);
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
  <label>{ctx.theme} - {ctx.title}</label>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  box: {
    margin: theme.spacing(2)
  },
}));

const Context = createContext();

const LoginForm = () => {

  const classes = useStyles();
  const theme = 'dark';

  return (
    <Context.Provider value= {{theme, title: 'Hello My Friends'}}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LocalTaxiRoundedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
        </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembrar"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Logar
          </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Equeceu ?
              </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Não tem cadastro? Criar"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </Context.Provider>
  );
}

export default LoginForm;