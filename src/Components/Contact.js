import React, {useContext, useRef} from 'react';
import {ThemeContext} from "../App";
import emailjs from "@emailjs/browser";
import {Button, Card, Form} from "react-bootstrap";

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
        <div className={`Contact-${themeMode}`}>
            {/*<form ref={form} onSubmit={sendEmail}>*/}
            {/*    <label>Name</label>*/}
            {/*    <input type="text" name="user_name" />*/}
            {/*    <label>Email</label>*/}
            {/*    <input type="email" name="user_email" />*/}
            {/*    <label>Message</label>*/}
            {/*    <textarea name="message" />*/}
            {/*    <input type="submit" value="Send" />*/}
            {/*</form>*/}
            <div className={'Contact-Content'}>
                <Card className={'Card-Contact'}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card>
            </div>
        </div>
    );
}

export default Contact;
