import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    '& > *': {
      margin: theme.spacing(1),
      color: '#fff'
    },
  },
}));

const OutlinedButtons = () => {

  const [count, setCount] = useState(0);

  const classes = useStyles();

  return (
    <div className={classes.button}>
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
    </div>
  );
}

export default OutlinedButtons;