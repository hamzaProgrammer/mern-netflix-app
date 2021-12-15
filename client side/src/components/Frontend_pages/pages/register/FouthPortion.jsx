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
        fontSize : '45px',
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
                            src = "https://occ-0-1881-64.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd"
                            alt="First Portion Cover"
                            width="100%"
                            height="70%"
                        />
                    </Box>
                </Grid>
                 <Grid item xs={6}>
                    <Box className={classes.firstPort}>
                        <Typography  className={classes.firstPara} >Create profiles for kids.</Typography>
                        <Typography className={classes.secPara} >Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</Typography>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default FirstPortion
