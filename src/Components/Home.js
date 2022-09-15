import React, {useContext} from 'react';
import {ThemeContext} from "../App";
import Typewriter from 'typewriter-effect';


function Home(props) {

    const {themeMode, setThemeMode} = useContext(ThemeContext);

    return (
        <div className={`Home-${themeMode}`}>
            <div className={'Home-Content'}>
                <div className={'Content'}>
                    <p>👋 Hello, it's Jakub Krasuski.</p>
                </div>
                <div className={'Content'}>
                    <Typewriter
                        options={{
                            strings: ['Junior React Developer', 'IT Student', 'Enthusiast of new technologies'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <div className={'Content'}>

                </div>
            </div>
        </div>
    );
}

export default Home;
