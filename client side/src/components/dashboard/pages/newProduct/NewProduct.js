import React , { useState } from 'react'
import {
    Box,
    makeStyles,
    Typography,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
    Grid
} from '@material-ui/core'
import { uploadMovie } from  '../../../Frontend_pages/server_api/Api'
import {storage}  from '../../../../Firebase'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root : {
        marginTop: '20px',
        padding: '20px',
        boxShadow: '2px 6px 39px -15px #000000',
        marginRight: '30px',
        marginLeft: '-30px',
        paddingLeft : '30px',
        maxWidth: '100%',
        marginBottom: '25px'
    },
    head : {
        fontSize : '22px',
        fontWeight: 600,
        marginBottom: '55px'
    },
    prodComps : {
        display : 'flex',
        flexDirection: 'row',
        marginTop: '30px'
    },
    inputs : {
        width: '300px',
        marginBottom : '20px'
    },
    uploadBtn: {
        color: '#fff',
        fontSize: '16px',
        width: '160px',
        marginLeft: '400px',
        backgroundColor: '#130f40',
        fontWeight: 700,
        marginTop: '30px',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#30336b'
        }
    },
    uploadBtn1: {
        color: '#fff',
        fontSize: '16px',
        width: '200px',
        marginLeft: '400px',
        backgroundColor: '#130f40',
        fontWeight: 700,
        marginTop: '30px',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#30336b'
        }
    },
    fileInput: {
    width: '97%',
    marginLeft: '20px',
    marginBottom: '50px',
    },
}))

const initValue = {
    title: '',
    desc: '',
    year: '',
    limit: 0,
    genre: '',
    isSeries: '',
    duration: '',
    img: '',
    imgTitle: '',
    imgSm: '',
    trailor: '',
    video: ''
}

const NewProduct = () => {
    const classes = useStyles();
    const history = useHistory()
    const [value, setValue] = React.useState(new Date());
    const [ movieInfo , setMovieInfo ] = useState(initValue)

    const [ img , setimg ] = useState(null)
    const [ imgTitle , setimgTitle ] = useState(null)
    const [ imgSm , setimgSm ] = useState(null)
    const [ trailor , settrailor ] = useState(null)
    const [ video , setvideo ] = useState(null)
    const [ uploadedFiles , setUploadedFiles ] = useState(0)
    const [ progress , setProgress ] = useState('')

    const handleChange = (e) => {
        setMovieInfo({...movieInfo , [e.target.name]: e.target.value})
    }

    const promises = [];
    const upload =  (items) => {
        items.forEach((item , index) => {
            const fileName = new Date().getTime() + item.name
            const uploadedTask = storage.ref(`/tempImages/${fileName}`).put(item)

            promises.push(uploadedTask);

            uploadedTask.on
            ("state_changed",
                (snapshot) => {
                    const progress =  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    setProgress(`${index + 1} file is ${progress}% done`)
                    console.log( index + " file is " + progress + "% done")
            },
            (err) => {console.log(err)},
            () => {
                uploadedTask.snapshot.ref.getDownloadURL().then((url) => {
                    if(index === 0){
                        setMovieInfo((prev) => { return { ...prev , img: url } })
                    }else if( index === 1){
                        setMovieInfo((prev) => { return { ...prev , imgTitle: url }  })
                    }else if( index === 2){
                        setMovieInfo((prev) => { return { ...prev , imgSm: url } })
                    }else if( index === 3){
                        setMovieInfo((prev) => { return { ...prev , trailor: url }  })
                    }else if( index === 4){
                        setMovieInfo((prev) => { return { ...prev , video: url }  })
                    }
                    setUploadedFiles((prev) => prev + 1)
                })
            }
            )
        })
    }

    // for uploading Movie Files
    const handleUpload =   (e) => {
         upload([
             img,
             imgTitle,
             imgSm,
             trailor,
             video

        ])

        Promise.all(promises).then(tasks => {
            console.log('all uploads complete');
        });
        
    }


    // for Sending Movie Data to server
    const handleSubmit = async () => {
          if(!movieInfo.title || !movieInfo.desc || !movieInfo.year || !movieInfo.limit || !movieInfo.genre || !movieInfo.duration || !movieInfo.img || !movieInfo.imgTitle || !movieInfo.imgSm || !movieInfo.trailor || !movieInfo.video ){
                console.log("Please Fill All required Fields")
        }else{
            try {
                await uploadMovie(movieInfo)

                history.push('/admin/movies')
            } catch (error) {
                console.log("Error is : ", error)
            }
        }
    }

    // for dropdown
    const [open, setOpen] = React.useState(false);

    const handleActive = (e) => {
        setMovieInfo({...movieInfo , [e.target.name]: e.target.value})
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <>
        {console.log(movieInfo)}
            <Box className={classes.root} >
            {
                progress && (
                     <Typography variant="body2" style={{color: '#ff4d4d'}}>{progress}</Typography>
                )
            }
            {
                uploadedFiles > 0  && (
                    <Typography variant="body2" style={{color: 'crimson'}}>Uploaded Files : {uploadedFiles}/5</Typography>
                )
            }
                <Typography className={classes.head}>Add New Movie</Typography>

                 <Grid container direction="row" className={classes.prodComps} >
                    <Grid item xs={4}>
                        <Box className={classes.fileInput}>
                            <Typography variant="body1" style={{fontWeight: 700 , marginBottom:'10px' , paddingLeft: 'grey'}}>Image  </Typography>
                            <input type="file" className={classes.input} onChange={(e)=> setimg(e.target.files[0])}  />
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box className={classes.fileInput}>
                            <Typography variant="body1" style={{fontWeight: 700 , marginBottom:'10px' , paddingLeft: 'grey'}}>Image Title  </Typography>
                            <input type="file" className={classes.input} onChange={(e) => setimgTitle(e.target.files[0])}  />
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box className={classes.fileInput}>
                            <Typography variant="body1" style={{fontWeight: 700 , marginBottom:'10px' , paddingLeft: 'grey'}}>Image Thumbnail </Typography>
                            <input type="file" className={classes.input} onChange={(e) => setimgSm(e.target.files[0])}  />
                        </Box>
                    </Grid>

                </Grid>

                <Grid container direction="row" className={classes.prodComps} >
                    <Grid item xs={4}>
                        <TextField
                            label="Movie Title"
                            variant="outlined"
                            className={classes.inputs}
                            name="title"
                            value={movieInfo.title}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            label="Description"
                            variant="outlined"
                            className={classes.inputs}
                            name="desc"
                            value={movieInfo.desc}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={4}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Responsive"
                            views={['year']}
                            value={value}
                            onChange={(newValue) => {
                                const date =  newValue.getFullYear()
                                setMovieInfo({...movieInfo , year: date})
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    </Grid>
                </Grid>

                <Grid container direction="row" className={classes.prodComps} >
                    <Grid item xs={4}>
                        <FormControl required sx={{ m: 1, minWidth: 120 }} style={{width: '300px'}}>
                            <InputLabel id="demo-simple-select-required-label">Genre</InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                value={movieInfo.genre}
                                label="Genre"
                                name="genre"
                                onChange={handleChange}
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
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            label="Duration"
                            variant="outlined"
                            className={classes.inputs}
                            name="duration"
                            value={movieInfo.duration}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl required sx={{ m: 1, minWidth: 120 }} style={{width: '300px'}}>
                            <InputLabel id="demo-simple-select-required-label">Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                value={movieInfo.isSeries}
                                label="Active"
                                name = "isSeries"
                                onChange={handleChange}
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="movies">Movies</MenuItem>
                            <MenuItem value="series">Series</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                <Grid container direction="row" className={classes.prodComps} >
                    <Grid item xs={4}>
                        <FormControl className={`${classes.formControl}, ${classes.inputs} `}>
                            <InputLabel id="demo-controlled-open-select-label">Age Limit</InputLabel>
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={open}
                                onClose={handleClose}
                                onOpen={handleOpen}
                                value={movieInfo.isSeries}
                                onChange={handleActive}
                                name="limit" 
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="13">13+</MenuItem>
                            <MenuItem  value="15">15+</MenuItem>
                            <MenuItem  value="18">18+</MenuItem>
                            <MenuItem  value="21">21+</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <Box className={classes.fileInput}>
                            <Typography variant="body1" style={{fontWeight: 700 , marginBottom:'10px' , paddingLeft: 'grey'}}>Trailer  </Typography>
                            <input type="file" className={classes.input} onChange={(e) => settrailor(e.target.files[0])}  />
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box className={classes.fileInput}>
                            <Typography variant="body1" style={{fontWeight: 700 , marginBottom:'10px' , paddingLeft: 'grey'}}>Video  </Typography>
                            <input type="file" className={classes.input} onChange={(e) => setvideo(e.target.files[0])}  />
                        </Box>
                    </Grid>
                </Grid>

                {
                uploadedFiles === 5 ? (
                    <>
                        <Typography variant="h6" style={{color: 'green'}}>All are Files Uploaded. Now uploading to ServerPress the below Button to continue!!!</Typography>
                        <Button variant="contained" type="file" className={classes.uploadBtn1} onClick={handleSubmit} >Continue Uploading</Button>
                    </>
                ) : (
                    <Button variant="contained" type="file" className={classes.uploadBtn} onClick={handleUpload}  >Upload Movie</Button>
                )
            }
                )
            </Box>
        </>
    )
}

export default NewProduct