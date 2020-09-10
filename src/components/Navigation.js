import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';
import axios from 'axios';
// axios is like fetch()

function Navigation() {

    function test() {
        axios.get('/#/about')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <button type="button" onClick={test}>Change Content</button>
        </div>
    );
  }

export default Navigation;