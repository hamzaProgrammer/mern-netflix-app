import React  from 'react'
import { Box , makeStyles, Typography} from '@material-ui/core'
import ListItem from './listItem/ListItem'
import Slider from "react-slick";

const useStyles = makeStyles((theme) => ({
    root: {
        display : 'flex',
        flexDirection : 'column',
        paddingTop: '50px',
        backgroundColor: '#0b0b0b',
        width: '100%',
        fontSize: '20px',
        fontWeight: 500,
        maxWidth: '100%',
        marginTop:'0px'
    },
}))
const List = ({allMovies}) => {
    const classes = useStyles();
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4.2,
        slidesToScroll: 1
    };

    return (
        <>
        {
            allMovies.map((item) => {
                        return (
                            <>
                                <Box className={classes.root} key={item._id} >
                                    <Typography style={{color: "#fff" , marginLeft: '30px' , fontSize : '25px'}}>{item.title}</Typography>
                                    <div style={{maxWidth: '95%', marginLeft: '30px'}} key={item._id}>
                                        <Slider {...settings} key={item._id}  >
                                            { item.content[0].map((item) => {
                                                return (
                                                    <>
                                                        <div key={item} >
                                                            <ListItem item={item} />
                                                        </div>
                                                    </>
                                                )
                                            })
                                            }
                                        </Slider>
                                    </div>
                                </Box>
                            </>
                            )
                        })
                    }
            </>
    )
}

export default List
