import React, {useContext, useEffect, useRef, useState} from 'react';
import {ThemeContext} from "../App";
import {useInView} from "framer-motion";

function Education(props) {

    const {themeMode} = useContext(ThemeContext);

    const isInViewRef = useRef(null);

    const isInView = useInView(isInViewRef, {once: false});

    const isInViewRef2 = useRef(null);

    const isInView2 = useInView(isInViewRef2, {once: false});

    const isInViewRef3 = useRef(null);

    const isInView3 = useInView(isInViewRef3, {once: false});

    const isInViewRef4 = useRef(null);

    const isInView4 = useInView(isInViewRef4, {once: false});

    const [isInViewInfo, setIsInViewInfo] = useState('');

    const [isInViewInfo2, setIsInViewInfo2] = useState('');

    const [isInViewInfo3, setIsInViewInfo3] = useState('');

    const [isInViewInfo4, setIsInViewInfo4] = useState('');

    function checkInView() {
        if (isInView) {
            setIsInViewInfo('Appear');
        } else {
            setIsInViewInfo('');
        }

        if (isInView2) {
            setIsInViewInfo2('Appear');
        } else {
            setIsInViewInfo2('');
        }

        if (isInView3) {
            setIsInViewInfo3('Appear');
        } else {
            setIsInViewInfo3('');
        }

        if (isInView4) {
            setIsInViewInfo4('Appear');
        } else {
            setIsInViewInfo4('');
        }
    }

    useEffect(() => {
        checkInView();
    }, [isInView, isInView2, isInView3, isInView4]);

    return (
        <div className={`Education-${themeMode}`} id={'Education'}>
            <div className={'Education-Content'}>
                <div className={`Content ${isInViewInfo}`} ref={isInViewRef}>

                </div>
                <div className={`Content ${isInViewInfo2}`} ref={isInViewRef2}>
                    <p>2015-2019</p>
                </div>
                <div className={`Content ${isInViewInfo2}`} ref={isInViewRef2}>
                    <p>Vocational Technical High School for Computer Science</p>
                </div>
                <div className={`Content ${isInViewInfo3}`} ref={isInViewRef3}>
                    <p>2019-2022</p>
                </div>
                <div className={`Content ${isInViewInfo3}`} ref={isInViewRef3}>
                    <p>John Paul II Catholic University of Lublin - Bachelor</p>
                </div>
                <div className={`Content ${isInViewInfo4}`} ref={isInViewRef4}>
                    <p>2022-2024</p>
                </div>
                <div className={`Content ${isInViewInfo4}`} ref={isInViewRef4}>
                    <p>John Paul II Catholic University of Lublin - Master</p>
                </div>
            </div>
        </div>
    );
}

export default Education;
