import React from 'react';
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <Link to="/">RabiaIslek🌼</Link>
                </div>
            </div>


            <div>

                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/about">About</Link>
            </div>

            <div>
                <Link to="/projects">Projects</Link>
            </div>

            <div>
                <Link to="/contact">Contact</Link>
            </div>

        </nav>
    )
}

export default Navbar;