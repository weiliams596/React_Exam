import React from "react";

import {
  BrowserRouter as Router,
  /*HashRouter as Router,*/ Routes,
  Route,
} from "react-router-dom";

import routes from "./config";

import Home from './Home';

export default function MainRouter() {
  return <Router>
    <Routes>
        {routes.map((route,index)=>{
            if(!route.chilldren){
                return <Route key={index} path={route.path} element={<route.component/>} />
            }
            else{
                return (<Route key={index} path={route.path} element = {<route.component/>} >
                    {route.chilldren.map((child,indexChild)=>{
                        return <Route key={indexChild} path={child.path} element={<child.component/>} />
                    })}
                    <Route path={route.path + "/*"} key={index + 10000 } element={<route.component/>}/>
                </Route>);
            }
        })}
        <Route path="/" element={<Home/>} />
    </Routes>
  </Router>;
}
