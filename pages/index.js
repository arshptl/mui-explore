import {Grid} from '@mui/material'
import React from 'react';
import Card from '../src/components/Card';
import Heading from '../src/components/Heading'

export default function Home() {
  return (
    <Grid>
      <Heading />
      <Card />
    </Grid>
  );
}