import React from 'react';
import Link from "./Link";


const Header = () =>{
    return (
        <div className = " ui segment" style={{ marginTop: '10px' }}>
            <nav className="flex-container">
                <div className="home ">
                    <Link href="/"><h1>Home</h1></Link></div>
                <div className="about ">
                    <Link href="/Aboutus"><h1>About us</h1></Link></div>
                <div className="register ">
                    <Link href="/Register"><h1>Register</h1></Link></div>
                <div className="Login">
                    <Link href="/Login"><h1>Login</h1></Link></div>
            </nav>
        </div>)
    
}

export default Header;