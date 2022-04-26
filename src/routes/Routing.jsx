import React, { Component } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { AllRoutesList } from './AllRoutesList'

function GenerateMap(value) {
    return ( <Route exact path={value.path} key={value} element={value.comp}/> );
}

class Routing extends React.Component {
    render() { 
        return(
            <Router>
                <Routes>
                    {
                    AllRoutesList.map((value)=>GenerateMap(value))
                    }
                </Routes>
            </Router>
        )
    }
}
 
export default Routing;