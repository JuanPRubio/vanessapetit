import React, { useState } from 'react';
import { UilArrowUp } from '@iconscout/react-unicons';
import Slide from '@mui/material/Slide';

function ScrollTop() {
    const [scrollTop, setScrollTop] = useState(false)

    window.onscroll=function(){
        if(window.pageYOffset >= 560){
            setScrollTop(true)
        } else {
            setScrollTop(false)
        }};
    return (
        <Slide direction="up" in={scrollTop} style={{ transitionDuration: 1000 }} >
            <a href="#home" className="scrollup" id="scroll-up">
            <UilArrowUp className="scrollup__icon" />
            </a>
        </Slide>
    )
}

export default ScrollTop
