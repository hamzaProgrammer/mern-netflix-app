const axios = require('axios');

const API = axios.create({
    baseURL: 'http://localhost:5000'
});

// this is for using local storage in headers, otherwise it will not work
API.interceptors.request.use((req) => {
    if (localStorage.getItem('Admin')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Admin')).token}`;
    }

    return req;

});



const getAllListsfromList = () => API.get(`/moviesLists`)
const getAllMoviesListsAll = () => API.get(`/getMoviesLists`)
const getMovieInfo = (id) => API.get(`/movies/${id}`);
const getRandomData = (type) => API.get(`/movies/random?type=${type}`);
const getStats = () => API.get(`/users/stats`);
const fetchNewUsers = () => API.get(`/users`);
const deleteUser = (id) => API.delete(`/users/${id}`);
const getAllMovies = () => API.get(`/movies`);
const deleteMovie = (id) => API.delete(`/movies/${id}`);
const UpdateMovie = (id , data) => API.put(`/movies/${id}` , data);
const uploadMovie = (data) => API.post(`/movies/addNew` , data);
const deleteMovieList = (id) => API.delete(`/moviesList/${id}`);
const getAllMovieName = () => API.get(`/movies/getNames`);
const getSingleMovieName = (id) => API.get(`/moviesSingle/${id}`);
const uploadMovieList = (data) => API.post(`/moviesLists/addNewList`, data);
const UpdateMovieList = (id , data) => API.put(`/moviesList/${id}` , data);
const getAllMoviesLists = (name , type) => API.get(`/moviesOnly/${name}${type ? "?type=" + type : ''}`);
const checkUserData = (parameter , data) => API.get(`/getUsersInfo/${parameter}/${data}`)
const uploadUserInfo = (data) => API.post(`/users/addNewuser`, data);
const getUserSignIn = (data) => API.post(`/users/LogInUser`, data);
const checkAdminInfo = (type, data) => API.get(`/adminCheck/${type}/${data}`);
const uploadAdminData = (data) => API.post(`/admin/addAdmin`, data);
const fetchAllAdmins = () => API.get(`/admin/allAdmins`);
const deleteAdmin = (id) => API.delete(`/admin/${id}`);
const updateAdmin = (id, data) => API.put(`/adminUpdate/${id}`, data);
const signInAdmin = (data) => API.post(`/admin/LogIn`, data);


module.exports = {
    getAllListsfromList,
    getMovieInfo,
    getRandomData,
    getStats,
    fetchNewUsers,
    getAllMovies,
    deleteMovie,
    UpdateMovie,
    uploadMovie,
    deleteMovieList,
    getAllMovieName,
    uploadMovieList,
    getSingleMovieName,
    UpdateMovieList,
    getAllMoviesLists,
    getAllMoviesListsAll,
    checkUserData,
    uploadUserInfo,
    getUserSignIn,
    checkAdminInfo,
    uploadAdminData,
    deleteUser,
    fetchAllAdmins,
    deleteAdmin,
    updateAdmin,
    signInAdmin
}