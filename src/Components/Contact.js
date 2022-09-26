import React, {useContext, useRef} from 'react';
import {ThemeContext} from "../App";
import emailjs from "@emailjs/browser";

function Contact(props) {

    const {themeMode} = useContext(ThemeContext);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_afpsyxl', 'template_l302yb3', form.current, 'KMHJ2SCdbVqmNLQ9K')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
}

export default Contact;
