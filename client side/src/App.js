import './App.css';
import React , { useEffect , useState } from 'react'
import { Switch , Route , useLocation } from 'react-router-dom'


// Front End Imports
import Home from './components/Frontend_pages/pages/home/Home'
import WatchVideo from './components/Frontend_pages/pages/watch/Watch'
import Register from './components/Frontend_pages/pages/register/Register'
import SignIn from './components/Frontend_pages/pages/signIn/SignIn'
import HomeMovies from './components/Frontend_pages/pages/homeMoviesPage/HomeMovies'
import HomeSeries from './components/Frontend_pages/pages/homeSeriesPage/HomeSeries'


//   Dashboard Imports
import { Grid  } from '@material-ui/core'
import DashSidebar from './components/dashboard/components/sidebar/Sidebar'
import DashBoardHome from './components/dashboard/pages/home/Home'
import NavbarDashboard from './components/dashboard/components/topbar/Topbar'
import DashBoardUsers from './components/dashboard/pages/userLists/UserLists'
import AdminLists from './components/dashboard/pages/AdminLists/AdminLists'
import AdminSingle from './components/dashboard/pages/users/Users'
import NewUser from './components/dashboard/pages/newusers/NewUsers'
import ProductList from './components/dashboard/pages/productLists/ProductList'
import ProductSingle from './components/dashboard/pages/product/Product'
import NewProduct from './components/dashboard/pages/newProduct/NewProduct'
import DashBoardSignIn from './components/dashboard/pages/signin/SignIn'
import MoviesLists from './components/dashboard/pages/Movielists/MovieList'
import SingleList from './components/dashboard/pages/ListMovieSingle/MovieList'
import AddMovieList from './components/dashboard/pages/NewMovieList/NewMovieList'




function App() {
  const location = useLocation()
 const [ isRegisteredUser , setisRegisteredUser ] = useState(false)
  const [ isAdmin , setisAdmin ] = useState(false)

 useEffect(() => {
   const User = JSON.parse(localStorage.getItem('profile'))?.myResult;
   const Admin = JSON.parse(localStorage.getItem('Admin'))?.myResult;

   if (User) {
     setisRegisteredUser(true)
   }else{
     setisRegisteredUser(false)
   }

   if(Admin){
     setisAdmin(true)
   }else{
     setisAdmin(false)
   }
 } , [location])
  return (
    <>
      <Switch>

      {/* Dashboard Routes */}

          <Route exact path="/admin" >
          { !isAdmin ? (
              <DashBoardSignIn/>
          ) : (
            <>
            <NavbarDashboard/>
              <Grid container style={{marginTop: '60px'}} >
                  <Grid item xs={3}>
                    <DashSidebar/>
                  </Grid>
                  <Grid item xs={9} style={{marginTop: '30px'}}>
                        <DashBoardHome />
                  </Grid>
              </Grid>
              </>
          ) }
          </Route>

          <Route exact path="/admin/users" >
          { !isAdmin ? (
              <DashBoardSignIn/>
          ) : (<>
            <NavbarDashboard/>
              <Grid container style={{marginTop: '60px'}} >
                  <Grid item xs={3}>
                    <DashSidebar/>
                  </Grid>
                  <Grid item xs={9} style={{marginTop: '30px'}}>
                        <DashBoardUsers />
                  </Grid>
              </Grid>
              </>
          )}
          </Route>

          <Route exact path="/admin/Admins/:id" >
          {
            !isAdmin ? ( <
                DashBoardSignIn / >
              ) : (<>
            <NavbarDashboard/>
              <Grid container style={{marginTop: '60px'}} >
                  <Grid item xs={3}>
                    <DashSidebar/>
                  </Grid>
                  <Grid item xs={9} style={{marginTop: '30px'}}>
                        <AdminSingle />
                  </Grid>
              </Grid>
              </>
              )}
          </Route>

          <Route exact path="/admin/newUser" >
          {
            !isAdmin ? ( <
                DashBoardSignIn / >
              ) : (<>
            <NavbarDashboard/>
              <Grid container style={{marginTop: '60px'}} >
                  <Grid item xs={3}>
                    <DashSidebar/>
                  </Grid>
                  <Grid item xs={9} style={{marginTop: '30px'}}>
                        <NewUser />
                  </Grid>
              </Grid>
              </>
              )
              }

          </Route>

          <Route exact path="/admin/allAdmins" >
          {
            !isAdmin ? ( <
                DashBoardSignIn / >
              ) : (
                <>
            <NavbarDashboard/>
              <Grid container style={{marginTop: '60px'}} >
                  <Grid item xs={3}>
                    <DashSidebar/>
                  </Grid>
                  <Grid item xs={9} style={{marginTop: '30px'}}>
                        <AdminLists />
                  </Grid>
              </Grid>
              </>
              ) }
          </Route>

          <Route exact path="/admin/movies" >
          {
            !isAdmin ? ( <
                DashBoardSignIn / >
              ) : (
                <>
            <NavbarDashboard/>
              <Grid container style={{marginTop: '60px'}} >
                  <Grid item xs={3}>
                    <DashSidebar/>
                  </Grid>
                  <Grid item xs={9} style={{marginTop: '30px'}}>
                        <ProductList />
                  </Grid>
              </Grid>
              </>
              ) }
          </Route>

          <Route exact path="/admin/movies/:id" >
          {
            !isAdmin ? ( <
                DashBoardSignIn / >
              ) : (
                <>
            <NavbarDashboard/>
              <Grid container style={{marginTop: '60px'}} >
                  <Grid item xs={3}>
                    <DashSidebar/>
                  </Grid>
                  <Grid item xs={9} style={{marginTop: '30px'}}>
                        <ProductSingle />
                  </Grid>
              </Grid>
              </>
              )}
          </Route>

          <Route exact path="/admin/addMovie" >
          {
            !isAdmin ? ( <
                DashBoardSignIn / >
              ) : (
                <>
            <NavbarDashboard/>
              <Grid container style={{marginTop: '60px'}} >
                  <Grid item xs={3}>
                    <DashSidebar/>
                  </Grid>
                  <Grid item xs={9} style={{marginTop: '30px'}}>
                        <NewProduct />
                  </Grid>
              </Grid>
              </>
              )}
          </Route>

          <Route exact path="/admin/moviesLists" >
          {
            !isAdmin ? ( <
                DashBoardSignIn / >
              ) : (
                <>
            <NavbarDashboard/>
              <Grid container style={{marginTop: '60px'}} >
                  <Grid item xs={3}>
                    <DashSidebar/>
                  </Grid>
                  <Grid item xs={9} style={{marginTop: '30px'}}>
                        <MoviesLists />
                  </Grid>
              </Grid>
              </>
              )}
          </Route>

          <Route exact path="/admin/moviesLists/:id" >
          {
            !isAdmin ? ( <
                DashBoardSignIn / >
              ) : (
                <>
            <NavbarDashboard/>
              <Grid container style={{marginTop: '60px'}} >
                  <Grid item xs={3}>
                    <DashSidebar/>
                  </Grid>
                  <Grid item xs={9} style={{marginTop: '30px'}}>
                        <SingleList />
                  </Grid>
              </Grid>
              </>
              )}
          </Route>

          <Route exact path="/admin/addMovieList" >
          { !isAdmin ? (
              <DashBoardSignIn/>
          ) : (
            <>
            <NavbarDashboard/>
              <Grid container style={{marginTop: '60px'}} >
                  <Grid item xs={3}>
                    <DashSidebar/>
                  </Grid>
                  <Grid item xs={9} style={{marginTop: '30px'}}>
                        <AddMovieList />
                  </Grid>
              </Grid>
              </>
          )}
          </Route>



        {/*   Front End Routes */}

          <Route exact path='/' >
            { isRegisteredUser ? <Home type={null} />  : <Register/>}
          </Route>
          <Route exact  path='/register' >
            { !isRegisteredUser ? <Register/> : <Home/>}
          </Route>
          <Route exact path='/signin' component={SignIn} >
            { !isRegisteredUser ? <SignIn/> : <Home/>}
          </Route>
          
          {
            isRegisteredUser ?  (
                <>
                    <Route exact path='/movies' >
                        <HomeMovies />
                    </Route>
                    <Route exact path='/series' >
                        <HomeSeries/>
                    </Route>
                    <Route exact path='/watchVideo' component={WatchVideo} />
                </>
            ) : (
              <Register/>
            )
          }


      </Switch>

    </>
  );
}

export default App;
