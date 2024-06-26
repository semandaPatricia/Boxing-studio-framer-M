"use client";
import Link from 'next/link';
import React, { useState } from "react";
import Styles from "./navbar.module.css";
import { motion } from "framer-motion";

const Navbar = () => {
    const [burgerMenuActive, setBurgerMenuActive] = useState(false);

    const toggleBurgerMenu = () => {
        setBurgerMenuActive(!burgerMenuActive);
    };

    const motionVariants = {
        open: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                ease: "easeOut",
                type: "spring",
            },
        },
        closed: {
            opacity: 0,
            transition: {
                staggerChildren: 0,
                duration: 0,
            },
        },
    };

    const listItemVariants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.35,
                ease: "easeOut",
            },
        },
        closed: {
            y: 100,
            opacity: 0,
            transition: {
                duration: 0,
            },
        },
    };

    return (
        <div
            className={`${Styles.navbar} ${
                burgerMenuActive ? Styles.active : ""
            }`}
        >
            <div className={Styles.navigation}>
               <Link  href={'/'}> <button className={Styles.button}>MAX Boxing</button></Link> 
                <div
                    className={Styles.burgerMenuContainer}
                    onClick={() => toggleBurgerMenu()}
                >
                    <div className={Styles.burgerMenuTrigger}></div>
                    <div className={Styles.burgerMenu}></div>
                </div>
            </div>
            <div className={Styles.content}>
                <motion.ul
                    animate={burgerMenuActive ? "open" : "closed"}
                    variants={motionVariants}
                >
                    <motion.li variants={listItemVariants}>
                        <a href="/">Home</a>
                    </motion.li>
                    <motion.li variants={listItemVariants}>
                        <a href="/about">About us</a>
                    </motion.li>
                    <motion.li variants={listItemVariants}>
                        <a href="/programs">Programs</a>
                    </motion.li>
                    <motion.li variants={listItemVariants}>
                        <a href="/trainers">Trainers</a>
                    </motion.li>
                    <motion.li variants={listItemVariants}>
                        <a href="/contact">Contact</a>
                    </motion.li>
                </motion.ul>
            </div>
        </div>
    );
};

export default Navbar;