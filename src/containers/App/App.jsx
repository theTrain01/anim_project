import { Routes, Route } from "react-router-dom";
import { routesConfig } from "@routes/routesConfig"

import PersonPage from "../PersonPage"
import Header from "@components/Header";

const App = () => {
  return (
    <>
      <div>
        <Header />
        
        <Routes>
          {routesConfig.map(({path, element}) => (
            <Route 
              path = {path} 
              element = {element} 
              key = {element}
            />
          ))}
        </Routes>
      </div>
    </> 
  )
}

export default App;
