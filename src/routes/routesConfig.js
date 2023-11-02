import HomePage from "@containers/HomePage/HomePage";
import PersonPage from "@containers/PersonPage";
import PersonInfo from "@components/PersonPage/PersonInfo";

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
    }
]