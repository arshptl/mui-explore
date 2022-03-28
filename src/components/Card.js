import React from 'react'
import { Container } from '@mui/material'
import Image from 'next/image'
import { Typography } from '@mui/material'
import { Button, Paper, Grid } from '@mui/material'
import styled from '@emotion/styled'

const StyledCard = styled(Paper)`
     ${({ theme }) => theme.comps.card}
`;


const Card = () => {
    return (
        <StyledCard>
            <Image width={600} height={300} src="https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png" />
            <Typography variant='h4' component="h1" sx={{ color: "white" }} gutterBottom>
                NA with MUI
            </Typography>

            <Grid container sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '1em',
            }}>
                <Button variant='contained' color='primary'>
                    Primary button
                </Button>
                <Button variant='contained' color='secondary'>
                    Primary button
                </Button>
            </Grid>
        </StyledCard>
    )
}

export default Card