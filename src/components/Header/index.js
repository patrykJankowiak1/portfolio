import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Projects from '../Projects';
import logo from '../../assets/header.png';
import './header.css';

export default class Header extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div id='header' className='header-wrapper' style={{ backgroundImage:`url(${ logo })`, backgroundPosition:'center', backgroundSize:'cover' }}>
                        <Navbar />
                        <div className='title-wrapper'>
                            <h1 className='title'><span className='active'>Hello.</span><br/> My name is <span className='active'>Aleksandra</span>.<br/>And I am Front-end Developer.</h1>
                        </div>
                        <div><a className="blink to-main-section" href='#main'></a></div>
                    </div>
                    <div className='main-section-wrapper'>
                        <Route exact path='/home' component={ Home } />
                        <Route exact path='/about' component={ About } />
                        <Route exact path='/projects' component={ Projects } />
                    </div>
                </div>
            </Router>

        )
    }
}

const Navbar = () => {
    return (
        <div className='navbar-wrapper'>
            <div className='logo'></div>

            <ul className='navbar'>
                <li className='navbar-item'>
                    <NavLink to='/home'>Home</NavLink>
                </li>
                <li className='navbar-item'>
                    <NavLink activeClassName='active' to='/about'>About</NavLink>
                </li>
                <li className='navbar-item'>
                    <NavLink activeClassName='active' to='/projects'>Projects</NavLink>
                </li>
            </ul>
        </div>
    )
}