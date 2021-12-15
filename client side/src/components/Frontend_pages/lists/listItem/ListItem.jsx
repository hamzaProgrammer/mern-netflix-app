import React , { useState , useEffect } from 'react'
import { Box, makeStyles, Typography , Button  } from '@material-ui/core'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ReactPlayer from 'react-player'
import { getMovieInfo } from '../../server_api/Api'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    list : {
        width: '300px',
        height: '150px',
        display: 'flex',
        overflow: 'hidden',
        flexDirection: 'column',
        backgroundColor: '#0b0b0b',
        marginRight: '10px',
        marginTop: '10px',
        '&:hover': {
            marginTop: '-15px',
            width: '355px',
            height: '355px',
            boxShadow: '3px 3px 18px 12px #000000',
            zIndex: '999',
            marginLeft: '-50px',
            '& $imgg': {
                height: '150px',
                zIndex: '999',
            }
        }
    },
    imgg : {
        width: "100%",
        objectFit: 'cover',
        height:"150px",
    },
    second : {
        display: 'flex',
        color: '#fff',
        padding: '5px 5px'
    },
    infoTop : {
        display: 'flex',
        flexDirection: 'column',
        color: '#fff',
        padding: '5px 5px'
    },
    infoOfTime : {
        display: 'flex',
        alignItems: 'center',
        color: 'grey'
    },
    video : {
        maxWidth: '100%',
        height: '140px',
        objectFit: 'cover',

    },
    icon: {
        border: '2px solid #fff',
        borderRadius: '50%',
        fontSize: '30px',
        marginRight: '5px',
        padding: '5px'
    },
    desc:{
        fontSize: '13px',
        marginBottom: '10px'
    },
    common : {
        textDecoration: 'none'
    }
}))
const ListItem = ({item }) => {
    const classes = useStyles();
    const [ isHovered , setisHoverd ] = useState(false)
    const [ movie , setMovie ] = useState({})
    const [ trail , setTrailor ] = useState('')

    useEffect(() => {
        const getMovieDetails = async () => {
            const { data } = await getMovieInfo(item)
            setMovie(data.gotMovie)
            setTrailor(movie?.trailor)
        }
        getMovieDetails()
    }, [trail ])
    return (
        <>
            <Box
                component={Link}
                to={{pathname: '/watchVideo' , movie: movie}}
                className={`${classes.list} ${classes.common} `}
                onMouseEnter={() => setisHoverd(true)}
                onMouseLeave={() => setisHoverd(false)}
            >
                {
                    isHovered === false && (
                        <>
                    <img
                        src={movie?.img}
                        className={classes.imgg}
                        alt={movie?.imgTitle}
                    />
                    </>
                    )
                }
                {
                    isHovered && (
                        <>
                            <ReactPlayer
                                url={trail}
                                className={classes.video}
                                playing={true}
                                controls={true}
                                />
                            <Box className={classes.second}>
                                <PlayArrowIcon   className={classes.icon} />
                                <AddIcon className={classes.icon} />
                                <ThumbUpAltIcon className={classes.icon} />
                                <ThumbDownIcon className={classes.icon} />
                            </Box>
                            <Box className={classes.infoTop}>
                                <Box className={classes.infoOfTime}>
                                    <Typography variant="body2" style={{paddingRight: '10px'}} >1 h 33min</Typography>
                                    <Typography variant="body2" style={{fontWeight: 'bold' , border: '1px solid grey' , padding: '1px 3px' , marginRight: '10px'}} >{movie?.limit}</Typography>
                                    <Typography variant="body2"  >{movie?.year}</Typography>
                                </Box>
                                <Typography variant="body2" className={classes.desc}>
                                    {movie?.desc}
                                </Typography>
                                <Box>
                                    <Button variant="contained" size="small" className={classes.margin}>
                                       {movie?.genre}
                                    </Button>
                                </Box>
                            </Box>
                        </>
                    )
                }
            </Box>
        </>
    )
}

export default ListItem
