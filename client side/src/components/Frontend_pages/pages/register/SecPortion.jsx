import { Box , Grid , makeStyles , Typography } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '10px',
        paddingLeft: '50px',
        paddingRight: '50px',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    firstPort: {
        display : 'flex',
        flexDirection: 'column',
        maxWidth: '600px',
        fontFamily: 'Rubik, sans-serif'
    },
    firstPara : {
        fontSize : '40px',
        paddingBottom: '20px',
        fontFamily: 'Rubik, sans-serif',
        wordSpacing:'0.1rem'
    },
    secPara: {
        fontSize :'25px',
        fontFamily: 'Rubik, sans-serif',
        fontWeight: 400,
    },
    image : {
        maxWidth: '500px',
        paddingTop: '100px',
        height: '400px',
        boxShadow: '-1 px 4 px 49 px 5 px# FFFFFF',
        paddingLeft: '50px',
    }
}))
const FirstPortion = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container className={classes.root} >
                <Grid item xs={6}>
                    <Box className={classes.image}>
                        <img
                            src = "https://static1.colliderimages.com/wordpress/wp-content/uploads/2020/10/BEST-HORROR-ON-NETFLIX.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5"
                            alt="First Portion Cover"
                            width="100%"
                            height="70%"
                        />
                    </Box>
                </Grid>
                 <Grid item xs={6}>
                    <Box className={classes.firstPort}>
                        <Typography  className={classes.firstPara} >Download your shows to watch offline.</Typography>
                        <Typography className={classes.secPara} >Save your favorites easily and always have something to watch.</Typography>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default FirstPortion
