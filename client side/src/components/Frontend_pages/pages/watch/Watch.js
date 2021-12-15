import React , { useState , useEffect } from 'react'
import { Box , makeStyles , Button } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ReactPlayer from 'react-player'
import { Link , useLocation } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        display : 'flex',
        flexDirection : 'column',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#0b0b0b'
    },
    first: {
        display: 'flex',
        color: '#fff',
        backgroundColor: '#0b0b0b',
        alignItems: 'center',
        paddingLeft: '15px',
        paddingTop: '5px',
    },
    button : {
        fontSize : '15px',
        fontWeight: 700,
        backgroundColor: '#0b0b0b',
        '&:hover': {
            backgroundColor: 'crimson',
        }
    },
    video : {
        overflow: 'hidden',
    }
}))
const Watch = () => {
    const location = useLocation()
    const movie = location.movie;
    
    const classes = useStyles();
    const [vid, setVideo] = useState('');

    useEffect(() => {
        setVideo(movie.video)
        console.log("In Watch Video ",vid)
    }, [movie])

    return (
        <>
            <Box className={classes.root}>
                <Box className={classes.first}>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        component={Link}
                        to="/"
                        startIcon={<ArrowBackIcon className={classes.arrow} />}
                    >
                        Back
                    </Button>
                </Box>
                    <ReactPlayer
                    url={vid}
                    className={classes.video}
                    playing={true}
                    controls={true}
                    progress={true}
                    width = "100%"
                    height = "92%"
                />
            </Box>
        </>
    )
}

export default Watch
