import Home from '../pages/Home'
import MovieDetail from '../pages/MovieDetail'
import { Redirect } from 'react-router-dom'


export const allRoutes = [
    { path: "/", exact: true, component: Home, },
    { path: "/movie-detail", component: MovieDetail },
    { path: '*', component: () => <Redirect to='/' /> }


]



