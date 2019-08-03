import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";

export const Routes = [
    {
        path: '/detail',
        component: MovieDetailPage
    },
    {
        component: HomePage
    }
];