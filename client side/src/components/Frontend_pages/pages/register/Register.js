import React , {useState} from 'react'
import RegisterNavbar from './registerSignUpNavbar'
import { Box , makeStyles, Typography , TextField , Button } from '@material-ui/core'
import FirstPortion from './FirstPortion'
import SecPortion from './SecPortion'
import ThirdPortion from './ThirdPortion'
import FourthPortion from './FouthPortion'
import FAQ from './FAQs'
import Footer from '../../footer/Footer'
import {storage}  from '../../../../Firebase'
import { checkUserData , uploadUserInfo } from '../../server_api/Api'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    mainContent : {
        marginTop: '-40%',
        marginLeft: '32%',
        color: '#fff'
    },
    para1 : {
        fontSize : '50px',
        fontWeight: 700,
        wordSpacing: '0.3rem',
        fontFamily: 'Rubik, sans-serif'
    },
    para2 : {
        fontSize : '40px',
        fontWeight: 700,
        marginLeft: '100px',
        wordSpacing: '0.3rem',
        fontFamily: 'Rubik, sans-serif'
    },
    para3: {
        fontSize : '25px',
        fontWeight: 500,
        marginLeft: '60px',
        wordSpacing: '0.3rem',
        fontFamily: 'Rubik, sans-serif'
    },
    input: {
        marginLeft: '50px',
        marginTop: '50px',
        width: '300px',
        "& .MuiFormLabel-root": {
            color: "#e84118" // or black
        }
    },
    inputtwo : {
        color: '#fff',
        border: '2px solid #e84118',

    },
    inputthree : {
        color: '#fff',
        border: '2px solid #273c75',
    },
    btnSub :{
        height: '61px',
        marginTop: '49px',
        color: '#fff',
        backgroundColor: '#e84118',
        textTransform: 'none',
        fontWeight: 600,
        fontSize : '16px'
    },
    fileInput : {
        marginLeft: '50px',
    }
}))


const Register = () => {
    const classes = useStyles();
    const history = useHistory()
    const [ userData , setuserdata ] = useState({
        email: '',
        password: '',
        username : '',
        profilePic : '',
    })

    const [ isEmail , setisEmail ] = useState(true)
    const [ isUsername , setisUsername ] = useState(false)
    const [ isPassword , setisPassword ] = useState(false)
    const [ isProfilePic , setisProfilePic ] = useState(false)
    const [ img, setimg] = useState(null)
    const [ isPhotoUploaded, setisPhotoUploaded ] = useState(false)
    const [isUploadMsg, setisUploadMsg] = useState(false)
    const [ progress , setProgress ] = useState(0)
    const [ msg , setMsg ] = useState('')


    // for sending data to bacjend for checking Email and username exists or not
    const CheckInfo = async (name , mydata ) => {
        setMsg('')
        const { data } = await checkUserData(name , mydata)
        setMsg(data?.message)
        if(data?.message === null){
            if (name === "email") {
                setisEmail(false)
                setisUsername(true)
            }else{
                setisUsername(false)
                setisPassword(true)
            }
        }
    }
    const checkData =  (name , mydata) => {
        CheckInfo(name , mydata)
    }

    // for password changing
    const handleClick = () => {
        if(userData.password !== ""){
            setisPassword(false)
            setisProfilePic(true)
        }
    }

    // for Final Uploading to server
    const handleSubmit = async () => {
        if (!userData.username || !userData.email || !userData.password || !userData.profilePic){
            alert("Please Fill All Required Fields ")
        }else{
            const { data } = await uploadUserInfo(userData)
            history.push('/signin')
        }
    }

    // for uploading Profile Pic to Firebase
    const uploadImage = () => {
        setisUploadMsg(true)
        const fileName = new Date().getTime() + img.name
            const uploadedTask = storage.ref(`/NetflixApp/ProfileImages/${fileName}`).put(img)

            uploadedTask.on
            ("state_changed",
                (snapshot) => {
                    const progress =  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    setProgress(progress)
                    console.log(" file is " + progress + "% done")
            },
                (err) => {console.log(err)},
                () => {
                    uploadedTask.snapshot.ref.getDownloadURL().then((url) => {
                        setuserdata({...userData , profilePic: url })
                        setisPhotoUploaded(true)
                        setisUploadMsg(false)
                    })
                }
            )
    }



    return (
        <>
            <Box style={{backgroundColor: '#0b0b0b', color: '#fff'}}>
                <RegisterNavbar/>
                <Box>
                    <img
                        src = "https://help.nflxext.com/0af6ce3e-b27a-4722-a5f0-e32af4df3045_what_is_netflix_5_en.png"
                        alt="Register Cover"
                        width="100%"
                        maxHeight="80%"
                    />
                    <Box className={classes.mainContent}>
                        <Typography variant="h4" className={classes.para1} >Unlimited movies, TV</Typography>
                        <Typography variant="h5" className={classes.para2}>shows, and more.</Typography>
                        <Typography variant="p" className={classes.para3}>Watch anywhere. Cancel anytime.</Typography>
                        {
                            isEmail && (
                                <>
                                <Typography variant="body2" style={{marginLeft: '100px', marginBottom: '-40px' , marginTop: '10px', fontSize : '17px' , fontWeight: 500 , color: '#fff200' }} >{msg}</Typography>
                                <Box style={{display: 'flex'}}>
                                    <TextField
                                        label="Email"
                                        variant="filled"
                                        className={classes.input}
                                        inputProps={{ className: classes.inputtwo }}
                                        name="email"
                                        value={userData.email}
                                        onChange={(e) => setuserdata({...userData , [e.target.name ] : e.target.value})}
                                        />
                                        <Button variant="contained" className={classes.btnSub} onClick={() => checkData("email" , userData.email)} >
                                            Next
                                        </Button>
                                </Box>
                                </>
                            )
                        }

                        {
                            isUsername && (
                                <Box style={{display: 'flex'}}>
                                    <TextField
                                        label="UserName"
                                        variant="filled"
                                        className={classes.input}
                                        inputProps={{ className: classes.inputthree }}
                                        name="username"
                                        value={userData.username}
                                        onChange={(e) => setuserdata({...userData , [e.target.name ] : e.target.value})}
                                        />
                                        <Button variant="contained" className={classes.btnSub} onClick={() => checkData("username" , userData.username)} >
                                            Next
                                        </Button>
                                </Box>
                            )
                        }

                        {
                            isPassword && (
                                <Box style={{display: 'flex'}}>
                                    <TextField
                                        label="Password"
                                        type="password"
                                        variant="filled"
                                        className={classes.input}
                                        inputProps={{ className: classes.inputthree }}
                                         name="password"
                                        value={userData.password}
                                        onChange={(e) => setuserdata({...userData , [e.target.name ] : e.target.value})}
                                        />
                                        <Button variant="contained" className={classes.btnSub} onClick={handleClick   } >
                                            Create Account
                                        </Button>
                                </Box>
                            )
                        }

                        {
                            isProfilePic  && (
                                <Box style={{display: 'flex' , marginTop:'30px' }}>
                                    <Box className={classes.fileInput}>
                                        <Typography variant="h5" style={{fontWeight: 700 , marginBottom : '-30px' , color : '#34ace0' }}>Upload Profile Picture  <span style={{color: 'red' }}>*</span>  </Typography>
                                        <input type="file" onChange={(e)=> setimg(e.target.files[0])}  />
                                        {
                                            isPhotoUploaded ? (
                                                 <Button variant="contained" className={classes.btnSub} style={{backgroundColor: '#130f40'}} onClick={handleSubmit} >
                                                    Create Account
                                                </Button>
                                            ) : (
                                                <>
                                                    <Button variant="contained" className={classes.btnSub} style={{backgroundColor: '#34ace0' , height: '50px'  }} onClick={uploadImage} >
                                                        Upload Photo
                                                    </Button>
                                                    {
                                                            isUploadMsg && (
                                                                <>
                                                                    <Box style={{display: 'flex' }}>
                                                                        <Typography variant="h5" style={{fontWeight: 700 , marginBottom : '-30px' , marginTop: '20px', color : '#32ff7e' }}>Please Wait ...   </Typography>
                                                                        <Typography variant="h5" style={{fontWeight: 700 ,  marginTop: '20px', color : 'crimson' , marginLeft: '50px'  }}>{progress}% Uploded</Typography>
                                                                    </Box>
                                                                </>
                                                        )
                                                    }
                                                </>
                                                )
                                        }
                                    </Box>
                                </Box>
                            )
                        }
                    </Box>
                </Box>
                <FirstPortion/>
                <SecPortion/>
                <ThirdPortion/>
                <FourthPortion/>
                <FAQ/>
                <Footer/>
            </Box>
        </>
    )
}

export default Register
