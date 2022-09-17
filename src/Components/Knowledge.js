import React, {useContext} from 'react';
import {ThemeContext} from "../App";

function Knowledge(props) {

    const {themeMode} = useContext(ThemeContext);

    return (
        <div className={`Knowledge-${themeMode}`}>

        </div>
    );
}

export default Knowledge;
