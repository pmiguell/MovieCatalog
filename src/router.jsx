import { createBrowserRouter } from "react-router-dom"
import RootLayout from "./pages/RootLayout"
import Home from "./pages/Home"
import MovieDetails from "./pages/MovieDetails/MovieDetails"

const router = new createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "movie/:id",
                element: <MovieDetails />
            }
        ]
    }
])

export default router;