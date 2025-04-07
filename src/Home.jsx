import React from "react";
import { Link } from "react-router-dom";

import routes from "./config";

export default function Home() {
  return (
    <div>
      {routes.map((route, index) => {
        return (
          <div>
            <Link to={route.path} key={index} >{route.name}</Link>
          </div>
        );
      })}
    </div>
  );
}
