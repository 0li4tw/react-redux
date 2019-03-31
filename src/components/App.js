import React from "react";
import SiteHeader from "./SiteHeader";
import AppRouter from "../router";

const App = () => {
    return (
        <div>
            <SiteHeader/>
            <AppRouter/>
        </div>
    )
};

export default App;