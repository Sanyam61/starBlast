import React from 'react';
import "./HeaderBar.scss";
import logo from "../../assets/images/StarLogo.png";
import { motion } from "framer-motion";

function HeaderBar(props) {
    return (
        <motion.div animate={{y: 0}} initial={{y: "-120px"}} transition={{duration: 1}} className='Headerbar_Wrapper'>
            <div className=''>
                <img src={logo}/>
            </div>
            <div className=''>
                <button className='Menu_Wrapper'>Menu</button>
            </div>
        </motion.div>
    );
}

export default HeaderBar;