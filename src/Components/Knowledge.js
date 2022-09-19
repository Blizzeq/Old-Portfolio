import React, {useContext, useEffect, useRef, useState} from 'react';
import {ThemeContext} from "../App";
import {Card} from "react-bootstrap";
import {useInView} from "framer-motion";

function Knowledge(props) {

    const {themeMode} = useContext(ThemeContext);

    const isInViewRef = useRef(null);

    const isInView = useInView(isInViewRef, {once: true});

    const [isInViewInfo, setIsInViewInfo] = useState('');

    const isInViewRef2 = useRef(null);

    const isInView2 = useInView(isInViewRef2, {once: false});

    const [isInViewInfo2, setIsInViewInfo2] = useState('');

    const isInViewRef3 = useRef(null);

    const isInView3 = useInView(isInViewRef3, {once: false});

    const [isInViewInfo3, setIsInViewInfo3] = useState('');

    const isInViewRef4 = useRef(null);

    const isInView4 = useInView(isInViewRef4, {once: false});

    const [isInViewInfo4, setIsInViewInfo4] = useState('');

    const isInViewRef5 = useRef(null);

    const isInView5 = useInView(isInViewRef5, {once: false});

    const [isInViewInfo5, setIsInViewInfo5] = useState('');

    const isInViewRef6 = useRef(null);

    const isInView6 = useInView(isInViewRef6, {once: false});

    const [isInViewInfo6, setIsInViewInfo6] = useState('');

    const isInViewRef7 = useRef(null);

    const isInView7 = useInView(isInViewRef7, {once: false});

    const [isInViewInfo7, setIsInViewInfo7] = useState('');

    const isInViewRef8 = useRef(null);

    const isInView8 = useInView(isInViewRef8, {once: false});

    const [isInViewInfo8, setIsInViewInfo8] = useState('');

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

        if (isInView5) {
            setIsInViewInfo5('Appear');
        } else {
            setIsInViewInfo5('');
        }

        if (isInView6) {
            setIsInViewInfo6('Appear');
        } else {
            setIsInViewInfo6('');
        }

        if (isInView7) {
            setIsInViewInfo7('Appear');
        } else {
            setIsInViewInfo7('');
        }

        if (isInView8) {
            setIsInViewInfo8('Appear');
        } else {
            setIsInViewInfo8('');

        }


    }

    useEffect(() => {
        checkInView();
    }, [isInView, isInView2, isInView3, isInView4, isInView5, isInView6, isInView7, isInView8]);

    return (
        <div className={`Knowledge-${themeMode}`}>
            <div className={'Knowledge-Content'}>
                <Card className={`Knowledge-Card-Main ${isInViewInfo}`} ref={isInViewRef}>
                    <Card className={`Knowledge-Card-Content ${isInViewInfo2}`} ref={isInViewRef2}>
                        <a href={'https://reactjs.org/'}>React</a>
                    </Card>
                    <Card className={`Knowledge-Card-Content ${isInViewInfo2}`} ref={isInViewRef2}>
                        <a href={'https://www.typescriptlang.org/'}>Typescript</a>
                    </Card>
                    <Card className={`Knowledge-Card-Content ${isInViewInfo3}`} ref={isInViewRef3}>
                        <a href={'https://www.gatsbyjs.com/'}>Gatsby</a>
                    </Card>
                    <Card className={`Knowledge-Card-Content ${isInViewInfo3}`} ref={isInViewRef3}>
                        <a href={'https://leafletjs.com/'}>Leaflet</a>
                    </Card>
                    <Card className={`Knowledge-Card-Content ${isInViewInfo4}`} ref={isInViewRef4}>
                        <a href={'https://sass-lang.com/'}>SASS</a>
                    </Card>
                    <Card className={`Knowledge-Card-Content ${isInViewInfo4}`} ref={isInViewRef4}>
                        <a href={'https://en.wikipedia.org/wiki/CSS'}>CSS</a>
                    </Card>
                    <Card className={`Knowledge-Card-Content ${isInViewInfo5}`} ref={isInViewRef5}>
                        <a href={'https://expressjs.com/'}>Express.js</a>
                    </Card>
                    <Card className={`Knowledge-Card-Content ${isInViewInfo5}`} ref={isInViewRef5}>
                        <a href={'https://www.mysql.com/'}>MySQL</a>
                    </Card>
                    <Card className={`Knowledge-Card-Content ${isInViewInfo6}`} ref={isInViewRef6}>
                        <a href={'https://mui.com/'}>Material-UI</a>
                    </Card>
                    <Card className={`Knowledge-Card-Content ${isInViewInfo6}`} ref={isInViewRef6}>
                        <a href={'https://nodejs.org/en/'}>Node.js</a>
                    </Card>
                    <Card className={`Knowledge-Card-Content ${isInViewInfo7}`} ref={isInViewRef7}>
                        <a href={'https://en.wikipedia.org/wiki/Responsive_web_design'}>Responsive Web</a>
                    </Card>
                    <Card className={`Knowledge-Card-Content ${isInViewInfo7}`} ref={isInViewRef7}>
                        <a href={'https://getbootstrap.com/'}>Bootstrap</a>
                    </Card>
                    <Card className={`Knowledge-Card-Content ${isInViewInfo8}`} ref={isInViewRef8}>
                        <a href={'https://styled-components.com/'}>Styled Components</a>
                    </Card>
                    <Card className={`Knowledge-Card-Content ${isInViewInfo8}`} ref={isInViewRef8}>
                        <a href={'https://github.com/'}>Github</a>
                    </Card>
                </Card>
            </div>
        </div>
    );
}

export default Knowledge;
