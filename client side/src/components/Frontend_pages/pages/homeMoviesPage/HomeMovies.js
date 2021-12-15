import React  , { useState , useEffect }  from 'react'
import { makeStyles  , Box } from '@material-ui/core'
import Featured from '../../featured/Featured'
import Lists from '../../lists/List'
import Footer from '../../footer/Footer'
import NavBar from '../../navbar/Navbar'


const useStyles = makeStyles((theme) => ({
    mainRoot : {
        overflow: 'hidden',
        backgroundColor: '#0b0b0b'
    },
    root: {
        display : 'flex',
        backgroundColor: '#0b0b0b',
        color: '#fff',
        overflow: 'hidden',
    },
    homeImage :{
        width: '100%',
        height: '90vh'
    }
}))

const Home = () => {
    const classes = useStyles();
    const [ lists, setLists ] = useState([])
    const [img, setImg] = useState('https://images.unsplash.com/photo-1615986201152-7686a4867f30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vdmllc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')

    return (
        <>
            <Box className={classes.mainRoot}>
            <NavBar />
                <Box className={classes.root}>
                    <img src={img}  alt="main_Image" className={classes.homeImage} />
                </Box>
                <Featured type="movies" setLists={setLists}  setImg={setImg}/>
                <Box style={{marginTop: '35px'}}>
                    <Lists allMovies={lists}  />
                </Box>
            </Box>
            <Footer/>
           </>
    )
}

export default Home
