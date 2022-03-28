import React from 'react'
import { Grid, Paper } from '@mui/material'
import styled from '@emotion/styled'

// const GridStyled = styled(Grid)`
//     width: 60%;
//     margin: 0 auto;
//     margin-top: 1em;
//     padding: 1em;
//     background-color: #1F2A48;
//     display: flex;
//     justify-content: space-between;
// `;

const Item = styled.div`
/* background-color: #1F2A48; */
`;

const Heading = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
                <Item>xs=6 md=8</Item>
            </Grid>
            <Grid item xs={6} md={6}>
                <Item>xs=6 md=4</Item>
            </Grid>
        </Grid>
    )
}

export default Heading