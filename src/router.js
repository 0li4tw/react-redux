import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PostList from "./components/PostList";
import Post from "./components/Post";

const AppRouter = () => {
    return (
        <Router>
            <Route path="/" exact component={PostList} />
            <Route path="/post/:id" exact component={Post} />
        </Router>
    );
};

export default AppRouter;