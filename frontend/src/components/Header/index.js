import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useDispatch , useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { signoutcall } from '../../actions/auth.actions';

export default function Header(props) {

    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const logout = () => {
        dispatch(signoutcall());
    }


    const signinout = () => {
        return (
            <Nav>
                <li className="nav-item">
                    <NavLink to="/signup" className="nav-link"> Signup </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/signin" className="nav-link" > Signin </NavLink>
                </li>

            </Nav>
        );
    };

    const signout = () => {
        return (
            <Nav>
                <li className="nav-item">
                    <span className="nav-link" onClick={logout} > Signout </span>
                </li>

            </Nav>
        );
    }

    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

            <Container>
                <li>
                    <Link to='/' className='navbar-brand' > Home </Link>
                </li>

                <li>
                    <Link to='/posts' className='navbar-brand' > Posts </Link>
                </li>

                <li>
                    <Link to='/createPost' className='navbar-brand' > Create-Post </Link>
                </li>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto">
            
                    </Nav>

            
                    { !auth.authenticate ? signinout()
                    : signout() 
                    } 


                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
