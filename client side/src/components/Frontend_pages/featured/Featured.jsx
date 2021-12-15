import React , { useState , useEffect } from 'react'
import { Box, Typography  , makeStyles, Button  , MenuItem , FormControl,
    InputLabel,
    Select, } from '@material-ui/core'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoIcon from '@material-ui/icons/Info';
import { getRandomData , getAllMoviesLists , getAllListsfromList } from '../server_api/Api'
import { Link } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
        flexDirection: 'column',
        zIndex: '999',
        marginTop: '-470px',
        marginLeft: '50px',
        maxWidth:'500px',
        marginBottom : '0'
    },
    btns : {
        display: 'flex',
        marginTop: '20px'
    },
    button: {
        marginRight: '15px',
        backgroundColor: '#fff',
        marginLeft: '30px',
        color: '#0b0b0b',
        fontWeight: 700,
        '&:hover':{
            backgroundColor: 'grey'
        }
    },
    image : {
        width: '450px',
        height: '150px',
        paddingLeft : '20px',
        paddingRight: '20px',
        marginBottom: '10px',
        borderRadius: '10%',
        marginTop: " 50px"
    },
    desc : {
        color: '#fff',
        paddingLeft: '30px',
        fontWeight: 500
    },
    toglle :{
        marginBottom: '80px',
        marginLeft: '20px',
        zIndex: '999',
        
    },
    dropDown : {
        fontWeight: 600,
        '&:hover': {
            backgroundColor: 'red',
            color: '#fff',
        }
    },
    type : {
        color: '#fff',
        fontWeight: 900,
        marginRight: '20px',
        fontSize: '30px'
    },
    genHeight : {
        marginTop: '120px'
    }
}))
const Featured = ({type , setLists , setImg}) => {

    const classes = useStyles();
    const [ genre , setGenre ] = useState('')
    const [ content , setContent ] = useState({})

    // for getting random Product on home page
    useEffect(() => {
        const getRamndomContent = async () => {
            try {
                const { data } = await getRandomData(type)
                setImg(data?.movie[0]?.imgSm)
                setContent(data?.movie[0])
            } catch (error) {
                console.log("Error in fetching Random Record" , error)
            }
        }
        getRamndomContent();
    }, [type, setImg])

    // for getting genre related data
    useEffect(() => {
        // for getting movies genre
        const getListsDataAll = async (gotType) => {
            try {
                const { data } = await getAllMoviesLists(gotType);

                setLists(data.allMoviesLists)
            }catch(e){
                console.log("Error in Home :  ",e)
            }
        }

        /// for getting all movies Lists
        const getAllLists = async () => {
            try {
                const { data } = await getAllListsfromList();
                setLists(data.allMoviesLists)
            }catch(e){
                console.log("Error in Home :  ",e)
            }
        }

        if(type === "movies"){ // for showing only movies Lists
            getListsDataAll("movies");
        }else if(type === "series"){ // for showing all Series
            getListsDataAll("series")
        }else{ // for showing only Lists
            getAllLists()
        }
    }, [type, setLists])

   // for Type of List
    const [open, setOpen] = React.useState(false);

    // this will show data on changing select
    const getListsData = async (whichType , type) => {
        try {
            const { data } = await getAllMoviesLists(whichType ,type);
            setLists(data.allMoviesLists)
        }catch(e){
            console.log("Error in Home :  ",e)
        }
    }
    // for changing type of genre
    const handleType = (e) => {
        setGenre(e.target.value)
        if(type === "movies"){
            getListsData("movies" , e.target.value)
        }else{
            getListsData("series" , e.target.value)
        }
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <>
            <Box className={classes.root}>
            {
                type ? (
                        <>
                        <div className={classes.toglle}>
                            <span className={classes.type} >{type === "movies" ? "Movies" : "Series" }</span>
                                <FormControl required sx={{ m: 1, minWidth: 120 }} style={{width: '200px' , marginTop: '-12px'}}>
                            <InputLabel id="demo-simple-select-required-label">Genre</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-required"
                                value={genre}
                                label="Genre"
                                name="genre"
                                style = {
                                    {
                                        border: '1px solid #130f40',
                                        width: '110px',
                                        color: 'black',
                                        backgroundColor: '#fff'
                                    }
                                }
                                onChange={handleType} 
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="comedy">Comedy</MenuItem>
                            <MenuItem value="adventure">Adventure</MenuItem>
                            <MenuItem value="horror">Horror</MenuItem>
                            <MenuItem value="scifi">Sc-Fi</MenuItem>
                            <MenuItem value="animation">Animation</MenuItem>
                            <MenuItem value="kids">Kids</MenuItem>
                            <MenuItem value="action">Action</MenuItem>
                            </Select>
                        </FormControl>
                            </div>
                        </>
                        ) : (
                            <p className={classes.genHeight} ></p>
                        )
                    }


                <img
                    src={content.img}
                    alt="Featured pgoto"
                    className={classes.image}
                />
                <Typography variant="body2" className={classes.desc} >
                    {content.desc}
                </Typography>
                <Box className={classes.btns}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        component={Link} to={{pathname: '/watchVideo' , movie: content}}
                        startIcon={<PlayArrowIcon>send</PlayArrowIcon>}
                        >
                        Play
                    </Button>

                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<InfoIcon>send</InfoIcon>}
                        >
                        Info
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default Featured
