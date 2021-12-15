import { Box , Grid , makeStyles , Typography } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '380px',
        paddingLeft: '50px',
        paddingRight: '50px',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    firstPort: {
        display : 'flex',
        flexDirection: 'column',
        maxWidth: '600px',
        paddingLeft: '50px',
        fontFamily: 'Rubik, sans-serif'
    },
    firstPara : {
        fontSize : '40px',
        paddingBottom: '20px',
        fontFamily: 'Rubik, sans-serif',
        wordSpacing:'0.3rem'
    },
    secPara: {
        fontSize :'25px',
        fontFamily: 'Rubik, sans-serif',
        fontWeight: 400
    },
    image : {
        maxWidth: '600px',
        paddingTop: '100px',
        height: '400px',
        boxShadow: '-1 px 4 px 49 px 5 px# FFFFFF'
    }
}))
const FirstPortion = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container className={classes.root} >
                <Grid item xs={6}>
                    <Box className={classes.firstPort}>
                        <Typography  className={classes.firstPara} >Enjoy on your TV.</Typography>
                        <Typography className={classes.secPara} >Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box className={classes.image}>
                        <img
                            src="https://images.moneycontrol.com/static-mcnews/2020/06/money-heist-770x433.jpg?impolicy=website&width=770&height=431"
                            alt="First Portion Cover"
                            width="100%"
                            height="70%"
                        />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default FirstPortion
