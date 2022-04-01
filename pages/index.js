import {Grid, Box} from '@mui/material'
import React from 'react';
import Card from '../src/components/Card';
import CustomizedDialogs from '../src/components/Dialog';
import Heading from '../src/components/Heading'

export default function Home() {
  return (
    <Grid>
      <Heading />
      <CustomizedDialogs/>
      <Card />
    </Grid>
  );
}