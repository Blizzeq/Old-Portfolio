import React, {useContext} from 'react';
import {ThemeContext} from "../App";
import {Card} from "react-bootstrap";

function Knowledge(props) {

    const {themeMode} = useContext(ThemeContext);

    return (
        <div className={`Knowledge-${themeMode}`}>
            <div className={'Knowledge-Content'}>
                <Card className={'Knowledge-Card-Main'}>

                </Card>
            </div>
        </div>
    );
}

export default Knowledge;
