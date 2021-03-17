import React, {Suspense} from 'react';
import { Route, Switch } from 'react-router-dom';
// import Details from "./Details";
// import Books from "./Books";
// import Blames from "./Blames";
// import Admin from "./Admin";
// import Book from "./Book";
// import Home from "./Home";

const Home = React.lazy(() =>import(/* webpackPrefetch: true, webpackChunkName:"Home" */"./Home"));
const Details = React.lazy(() =>import(/* webpackPrefetch: true, webpackChunkName:"Details" */"./Details"));
const Books = React.lazy(() =>import(/* webpackPrefetch: true, webpackChunkName:"Books" */"./Books"));
const Book = React.lazy(() =>import(/* webpackPrefetch: true, webpackChunkName:"Book" */"./Book"));
const Blames = React.lazy(() =>import(/* webpackPrefetch: true, webpackChunkName:"Blames" */"./Blames"));
const Admin = React.lazy(() =>import(/* webpackPrefetch: true, webpackChunkName:"Admin" */"./Admin"));

const Navigation = () => {
    return (
        <Suspense fallback={(<div>Loading...</div>)}>
            <Switch>
                <Route exact path="/" >
                   <Home/>
                </Route>
                <Route exact={true} path="/details">
                    <Details />
                </Route>
                <Route exact={true} path="/books/:id">
                        <Book />
                </Route>
                <Route exact={true} path="/books">
                        <Books />
                </Route>
                <Route exact={true} path="/blames">
                        <Blames />
                </Route>
                <Route exact={true} path="/admin">
                    <Admin />
                </Route>
            </Switch>
        </Suspense>
    )
}

export default Navigation;