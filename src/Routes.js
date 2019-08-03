import HomePage from "./pages/HomePage/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage/MovieDetailPage";

export const Routes = [
    {
        path: '/detail',
        component: MovieDetailPage
    },
    {
        component: HomePage
    }
];