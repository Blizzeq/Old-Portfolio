import React, {useContext} from 'react';
import {ThemeContext} from "../App";


function Home(props) {

    const {themeMode, setThemeMode} = useContext(ThemeContext);

    return (
        <div className={`Home-${themeMode}`}>
            <div className={'Home-Content'}>
                <p>👋 Hello, it's Jakub Krasuski.</p>
            </div>
        </div>
    );
}

export default Home;
