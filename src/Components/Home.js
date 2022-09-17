import React, {useContext, useEffect, useRef, useState} from 'react';
import {ThemeContext} from "../App";
import Typewriter from 'typewriter-effect';
import Education from "./Education";
import {useInView} from "framer-motion";
import Knowledge from "./Knowledge";


function Home(props) {

    const isInViewRef = useRef(null);

    const isInView = useInView(isInViewRef, {once: false});

    const [isInViewInfo, setIsInViewInfo] = useState('');

    function checkInView(){
        if(isInView){
            setIsInViewInfo('Appear');
        }else{
            setIsInViewInfo('');
        }
    }

    useEffect(() => {
        checkInView();
    }, [isInView]);

    const {themeMode} = useContext(ThemeContext);

    return (
        <>
        <div className={`Home-${themeMode}`}>
            <div className={'Home-Content'}>
                <div className={'Content'}>
                    <p>👋 Hello, it's Jakub Krasuski.</p>
                </div>
                <div className={'Content'}>
                    <Typewriter
                        options={{
                            strings: ['Junior React Developer', 'IT Student', 'Enthusiast of technologies'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <div className={'Content'}>
                </div>
                <div className={`Content ${isInViewInfo}`} ref={isInViewRef}>
                    <p>Let me introduce myself</p>
                </div>
            </div>
        </div>
        <Education/>
        <Knowledge/>
        </>
    );
}

export default Home;
