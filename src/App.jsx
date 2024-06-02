import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LayOut from "./components/LayOut/LayOut";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import NotFound from "./components/NotFound/NotFound";


function App() {

  const routes = createBrowserRouter([
    {path : "" , element : <LayOut/> , children : [
      {path : "", element : <Home/>},
      {path : "home", element : <Home/>},
      {path : "movieDetails/:id", element : <MovieDetails/>},
      {path : "*" , element : <NotFound/>}
    ] }
  ]);

  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}

export default App;
