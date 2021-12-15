import React ,{ useState , useEffect } from 'react'
import { makeStyles , Box, Typography , Grid , Button} from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility';
import { fetchNewUsers } from '../../../Frontend_pages/server_api/Api'

const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1,
        boxShadow: '2px 6px 39px -15px #000000',
        padding: '20px',
        marginRight: '20px',
        marginLeft: '-10px'
    },
    mainGrid : {
        marginTop: '20px'
    },
    heading : {
        fontSize: '22px',
        fontWeight: 700,
        marginLeft: '70px',
        marginBottom: '40px'
    },
    middle : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        borderRadius: '50%',
        width:"55px",
        height: '55px'
    }
}))
const Widgets = () => {
    const classes = useStyles();

    const [ newUsers , setnewUsers ] = useState([]);

    useEffect(()=> {
        const getNewUsers = async () => {
            try{
                const { data } = await fetchNewUsers()
                setnewUsers(data.allUsers)
            }catch(e){
                console.log("Error in Widgets APi call : ",e)
            }
        }
        getNewUsers();
    }, [])

    return (
        <>
            <Box className={classes.root}>
                <Typography className={classes.heading}>Newly Joined Members</Typography>
                {
                    newUsers && (
                        Object.values(newUsers).map((item) => (
                            <>
                                <Grid container  className={classes.mainGrid}>
                                    <Grid item xs={2}>
                                        <img
                                            src={item.profilePic || "data:image/jpeg;base64,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" }
                                            alt="User Profile Cover"
                                            width="100%"
                                            height="100%"
                                            className={classes.image}
                                            />
                                            {console.log("Item : ",item.username)}
                                    </Grid>
                                    <Grid item xs={7}>
                                        <Box className={classes.middle}>
                                            <Typography style={{fontSize:'17px', fontWeight: 600}}  >{item.username}</Typography>
                                            <Typography style={{fontSize:'15px', fontWeight: 400 , color: 'grey'}}>{item.email}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button
                                            variant="contained"
                                            style={{backgroundColor: 'lightGrey', color: '#0b0b0b' , fontWeight: 700 , textTransform: 'none' , fontSize: '15px'}}
                                            size="small"
                                            className={classes.button}
                                            startIcon={<VisibilityIcon />}
                                        >
                                            Display
                                        </Button>
                                    </Grid>

                                </Grid>
                            </>
                        ))
                    )
                }

            </Box>
        </>
    )
}

export default Widgets
