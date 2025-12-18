import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

function Home() {

    return <h2>Home</h2>

}

function About() {

    return <h2>About</h2>

}

function Post() {

    const { id } = useParams();
    return <h2>Post ID: { id }</h2>
    
}

function RouterExam() {

    return (
        <Router>
            <nav>
                <Link to="/router/home">Home</Link>
                <Link to="/router/about">About</Link>
            </nav>
            <Routes>
                <Route path="/router/home" element={ <Home /> } />
                <Route path="/router/about" element={ <About /> } />
            </Routes>
        </Router>
    )

}

export default RouterExam;
