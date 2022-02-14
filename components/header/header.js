import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import classes from './header.module.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box className={classes.box} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Item>Potato Thugz</Item>
        </Grid>
        <Grid item xs={8}>
          <Item><Link className={classes.menuLink} href="#">About</Link> <Link className={classes.menuLink} href="#">A Thugz DNA</Link> <Link className={classes.menuLink} href="#">Roadmap</Link> <Link className={classes.menuLink} href="#">Team</Link> <Link className={classes.menuLink} href="#">FAQ</Link></Item>
        </Grid>
        <Grid item xs={2}>
          <Item>Connect Wallet</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
