import { Box , Grid , makeStyles , Typography } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '10px',
        paddingLeft: '100px',
        paddingRight: '50px',
        paddingTop: '50px',
        paddingBottom: '50px',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    firstPort: {
        display : 'flex',
        flexDirection: 'column',
        maxWidth: '550px',
        fontFamily: 'Rubik, sans-serif',
    },
    firstPara : {
        fontSize : '45px',
        paddingBottom: '20px',
        fontFamily: 'Rubik, sans-serif',
        wordSpacing:'0.1rem'
    },
    secPara: {
        fontSize :'22px',
        fontFamily: 'Rubik, sans-serif',
        fontWeight: 300,
    },
}))
const FirstPortion = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container className={classes.root} >
                <Grid item xs={6}>
                    <Box className={classes.firstPort}>
                        <Typography  className={classes.firstPara} >Watch everywhere.</Typography>
                        <Typography className={classes.secPara} >Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</Typography>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default FirstPortion
