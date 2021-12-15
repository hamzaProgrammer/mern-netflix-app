import React , {useState , useEffect } from 'react'
import { DataGrid  } from '@material-ui/data-grid';
import { Box , makeStyles , Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';
import { getAllMovies , deleteMovie } from '../../../Frontend_pages/server_api/Api'

const useStyles = makeStyles((theme) => ({
    image : {
        display : 'flex',
    },
    userImage : {
        width:'32px',
        height: '32px',
        borderRadius: '50%',
        objectFit:'cover',
        marginRight:'10px',
        marginTop: '10px'
    },
    deleteBtn : {
        marginLeft: '20px',
        color: 'red',
        cursor: 'pointer'
    }
}))
const ProductList = () => {
    const classes = useStyles();
    const [ movies , setMovies ] = useState([])
    const columns = [
       {field: "_id" , headerName: 'ID', width: '90'},
        {
            field: 'movie',
            headerName: 'Movie',
            width: 200,
            editable: true,
            renderCell: (params) => {
                return (
                    <Box className={classes.image} >
                        <img className={classes.userImage} src={params.row.img} alt="User Cover" />
                        {params.row.title}
                    </Box>
                )
            }
        },
        {
            field: 'genre',
            headerName: 'Genre',
            width: 120,
            editable: true,
        },
        {
            field: 'year',
            headerName: 'Year',
            width: 120,
            editable: true,
        },
        {
            field: 'limit',
            headerName: 'Limit',
            width: 120,
            editable: true,
        },
        {
            field: 'isSeries',
            headerName: 'Type',
            width: 120,
            editable: true,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Button variant="contained" color="primary" size="small" component={Link} to={{ pathname :'/admin/movies/' + params.row._id , movie: params.row}} >
                            Edit
                        </Button>
                        <DeleteIcon
                            className={classes.deleteBtn}
                            onClick= { () => handleDelete(params.row._id)}
                        />
                    </>
                )
            }
        }
    ];

    // deleting Movie
    const handleDelete = async (id) => {
        try {
            await deleteMovie(id)
        } catch (error) {
            console.log("Error is : ", error)
        }
    }

    // for showing Movies in Table Grid
    useEffect(() => {
        const getMovies = async () => {
            try {
                const { data } = await getAllMovies();
                setMovies(data)
            } catch (error) {
                console.log("Error is : ",error)
            }
        }
        getMovies();
        
    },[movies])

    return (
        <>
            <Box>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={movies}
                        columns={columns}
                        pageSize={5}
                        checkboxSelection
                        disableSelectionOnClick
                        getRowId={r=>r._id}
                    />
                </div>
            </Box>
        </>
    )
}

export default ProductList
