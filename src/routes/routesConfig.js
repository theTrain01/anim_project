import HomePage from "@containers/HomePage/HomePage";
import PersonPage from "@containers/PersonPage";
import PersonInfo from "@components/PersonPage/PersonInfo";
import AboutEpisodes from "@containers/AboutEpisodes";
import AboutEpisodesInfo from '@components/AboutEpisode/AboutEpisodesInfo';

export const routesConfig = [
    {
        path: '/', 
        element: <HomePage/>
    }, 

    {
        path: '/people', 
        element: <PersonPage/>
    },

    {
        path: '/people/:id', 
        element: <PersonInfo />
    },

    {
        path: '/episodes', 
        element: <AboutEpisodes />
    },

    {
        path: '/episodes/:id', 
        element: <AboutEpisodesInfo />
    }
]