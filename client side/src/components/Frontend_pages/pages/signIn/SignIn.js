import React , {useState} from 'react'
import LoginNavbar from './SignInNavbar'
import { Box , makeStyles, Typography , TextField , Button } from '@material-ui/core'
import { Link , useHistory } from 'react-router-dom'
import { getUserSignIn } from '../../server_api/Api'


const useStyles = makeStyles((theme) => ({
    mainContent: {
        marginTop: '-35%',
        marginLeft: '40%',
        color: '#fff',
        backgroundColor: '#0b0b0b',
        border: '1px solid black',
        maxWith: '400px',
        maxHeight: '400px'
    },
    email : {
        width: '300px',
        marginBottom: '10px'
    },
    pass : {
        width: '300px'
    },
    input : {
        border: '3px solid #e84118',

    },
     root: {
             "& .MuiFormLabel-root": {
                 color: "#e84118" // or black
             }
    }
}))
const Register = () => {
    const history = useHistory();
    const classes = useStyles();
    const [ userData , setuserdata ] = useState({
        email: '',
        password: ''
    })

    const sendData = async () => {
        if(!userData.email || !userData.password){
            alert("Please Fill All Fields ")
        }else{
            const { data } = await getUserSignIn(userData);

            if(data?.message){
                alert(data?.message)
            }else{
                localStorage.setItem('profile', JSON.stringify(data));
                history.push('/')
            }
        }
    }

    return (
        <>
            <Box >
                <LoginNavbar/>
                <Box>
                    <img
                        src = "https://help.nflxext.com/0af6ce3e-b27a-4722-a5f0-e32af4df3045_what_is_netflix_5_en.png"
                        alt="Register Cover"
                        width="100%"
                        style={{maxHeight: '99.4vh' , borderRadius: 'none'}}
                    />
                </Box>
                <Box className = {classes.mainContent }>
                    <Typography variant="h3" style={{marginBottom: '20px'}} >Sign In</Typography>
                    <Box style={{display: 'flex', flexDirection: 'column' }} className={classes.root}>
                        <TextField id="outlined-basic" label="Email" variant="outlined" className={classes.email}  InputProps={{
                            className: classes.input,
                        }}
                        name="email"
                        value={userData.email}
                        onChange={(e) => setuserdata({...userData , [e.target.name] : e.target.value })}
                        />
                        <TextField id="outlined-basic" label="Password" variant="outlined"  className={classes.pass}  InputProps={{
                            className: classes.input,
                        }}
                             name="password"
                        value={userData.password}
                        type="password"
                        onChange={(e) => setuserdata({...userData , [e.target.name] : e.target.value })}
                        />
                        <Button variant="contained"  style={{width: '100px', marginLeft: '100px' , marginTop: '15px' , backgroundColor: "#e84118"}} onClick={sendData} >
                            Sign In
                        </Button>
                        <Typography  component={Link} to="/signup" variant="body2" style={{color: '#fff', marginLeft: '50px' , fontSize:'22px' , marginTop: '25px'}} >New to Netflix? Sign Up</Typography>
                    </Box>
                </Box>
                    
            </Box>
        </>
    )
}

export default Register
