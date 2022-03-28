import { Box } from '@mui/material'
import { Container } from '@mui/material'
import { Grid } from '@mui/material'
import React from 'react'

const Layout = (props) => {
    return (
        <Container maxWidth="lg">
            {props.children}
        </Container>
    )
}

export default Layout