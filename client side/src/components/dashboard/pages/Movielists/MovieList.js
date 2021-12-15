import React , {useState , useEffect } from 'react'
import { DataGrid  } from '@material-ui/data-grid';
import { Box , makeStyles , Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';
import { getAllMoviesListsAll , deleteMovieList } from '../../../Frontend_pages/server_api/Api'

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
    const [ moviesLists , setMoviesLists ] = useState([])
    const columns = [
        {field: "_id" , headerName: 'ID', width: '250'},
        {
            field: 'title',
            headerName: 'Title',
            width: 200,
            editable: true,
        },
        {
            field: 'genre',
            headerName: 'Genre',
            width: 150,
            editable: true,
        },
        {
            field: 'type',
            headerName: 'Type',
            width: 150,
            editable: true,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Button variant="contained" color="primary" size="small" component={Link} to={{ pathname :'/admin/moviesLists/' + params.row._id , movieList: params.row}} >
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
            await deleteMovieList(id)
        } catch (error) {
            console.log("Error is : ", error)
        }
    }

    // for showing Movies in Table Grid
    useEffect(() => {
        const getMovies = async () => {
            try {
                const { data } = await getAllMoviesListsAll();
                setMoviesLists(data.allMoviesLists)
            } catch (error) {
                console.log("Error is : ",error)
            }
        }
        getMovies();
    }, [moviesLists])

    return (
        <>
            <Box>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={moviesLists}
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
