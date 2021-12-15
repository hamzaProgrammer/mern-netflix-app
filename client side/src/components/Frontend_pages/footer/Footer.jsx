import { Grid , Box, Typography , makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '50px',
        paddingLeft: '200px',
        paddingRight: '200px',
        color: 'grey',
        paddingBottom : '50px',
        backgroundColor: '#0b0b0b'
    },
    links : {
        marginTop: '10px',
        fontSize: '12px',
        '&:hover': {
            textDecoration: 'underline',
            color: '#fff',
            cursor : 'pointer'
        }
    },
    para: {
        fontSize: '15px'
    }
}))
const Footer = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.root}>
                <Typography variant="h6">Questions? Contact us.</Typography>
                <Grid container style={{paddingTop: '25px'}}>
                    <Grid item xs={3}>
                        <Box className={classes.links}>
                            <Typography className={classes.para} >FAQ</Typography>
                        </Box>
                        <Box className={classes.links}>
                            <Typography className={classes.para} >Investor Relations</Typography>
                        </Box>
                        <Box className={classes.links}>
                            <Typography className={classes.para} >Privacy</Typography>
                        </Box>
                        <Box className={classes.links}>
                            <Typography className={classes.para} >Speed Test</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={3}>
                        <Box className={classes.links}>
                            <Typography className={classes.para} >FAQ</Typography>
                        </Box>
                        <Box className={classes.links}>
                            <Typography className={classes.para} >Investor Relations</Typography>
                        </Box>
                        <Box className={classes.links}>
                            <Typography className={classes.para} >Privacy</Typography>
                        </Box>
                        <Box className={classes.links}>
                            <Typography className={classes.para} >Speed Test</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={3}>
                        <Box className={classes.links}>
                            <Typography className={classes.para} >FAQ</Typography>
                        </Box>
                        <Box className={classes.links}>
                            <Typography className={classes.para} >Investor Relations</Typography>
                        </Box>
                        <Box className={classes.links}>
                            <Typography className={classes.para} >Privacy</Typography>
                        </Box>
                        <Box className={classes.links}>
                            <Typography className={classes.para} >Speed Test</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={3}>
                        <Box className={classes.links}>
                            <Typography className={classes.para} >FAQ</Typography>
                        </Box>
                        <Box className={classes.links}>
                            <Typography className={classes.para} >Investor Relations</Typography>
                        </Box>
                        <Box className={classes.links}>
                            <Typography className={classes.para} >Privacy</Typography>
                        </Box>
                        <Box className={classes.links}>
                            <Typography className={classes.para} >Speed Test</Typography>
                        </Box>
                    </Grid>

                    <Box className={classes.links} style={{marginTop:'50px'}}>
                            <Typography className={classes.para} >Netflix Pakistan</Typography>
                        </Box>
                </Grid>
            </Box>
        </>
    )
}

export default Footer
