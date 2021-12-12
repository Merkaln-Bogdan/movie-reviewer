import React, { Suspense } from "react";
import routes from "./Routes/Routes";
import Home from "./components/HomePage/Home";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MoviesPage from "./components/MoviesPage/MoviesPage";
import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage";

const App = () => (
  <>
    <Layout>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route path={routes.home} exact component={Home} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Route path={routes.movies} exact component={MoviesPage} />
        </Switch>
      </Suspense>
    </Layout>
  </>
);
export default App;
