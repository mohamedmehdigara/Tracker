import React from 'react'
import { Paper, Box, Grid } from "@mui/material"
import Logo from 'assets/Images/logo.png'
const boxStyle = {
    width: '100%',
    height : '4rem'
}
const paperStyle = {
    width: '100%',
    height : '100%'
}
const gridStyle = {
    height: '100%',
    // width: '100%',
    textAlign: 'center',
    alignItems : 'center'
}

const Home = () => {
    return (
        <Box sx={boxStyle}>
            <Paper sx={paperStyle} elevation={3} >
                <Grid container spacing={1} sx={gridStyle}>
                    <Grid item xs={2} md={1.5} ><img src={Logo} alt="logo" loading='lazy' style={{height : '3.2rem'}}></img> </Grid>
                    <Grid item xs={2} md={1.5}> Home </Grid>
                    <Grid item xs={2} md={1.5}> About </Grid>
                    <Grid item xs={2} md={1.5}> Features </Grid>
                    <Grid item xs={2} md={1.5}> Contacts </Grid>
                    <Grid item xs={2} md={1.5}> Login Button </Grid>
                    
                    <Grid item xs={2} md={1.5}> Sign up Button </Grid>
                    
                </Grid>
            </Paper>
        </Box>
    )
}

export default Home;