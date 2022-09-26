import React, {useContext, useRef, useState} from 'react';
import {ThemeContext} from "../App";
import emailjs from "@emailjs/browser";
import {Alert, Button, Card, Form} from "react-bootstrap";


function Contact(props) {

    const {themeMode} = useContext(ThemeContext);

    const form = useRef();

    const [valueCheck, setValueCheck] = useState(0);

    const [validated, setValidated] = useState(false);


    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            sendEmail(e);
        }

        setValidated(true);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_afpsyxl', 'template_v4qx4u4', form.current, 'KMHJ2SCdbVqmNLQ9K')
            .then((result) => {
                console.log(result.text);
                setValueCheck(1);
            }, (error) => {
                console.log(error.text);
                setValueCheck(2);
            });
    };


    return (
        <div className={`Contact-${themeMode}`}>
            <div className={'Contact-Content'}>
                <Card className={'Card-Contact'}>
                    <Form noValidate validated={validated} ref={form} onSubmit={handleSubmit}
                          className={'Form-Contact'}>

                        <Form.Group className="form-content" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control required type="text" placeholder="Name" name="user_name"/>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid name.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="form-content" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required type="email" placeholder="Email" name="user_email"/>
                            <Form.Text className="text-muted">
                                I'll never share your email with anyone else.
                            </Form.Text>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="form-content" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control required as="textarea" rows={2} placeholder="Message" name="message"/>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid message.
                            </Form.Control.Feedback>
                        </Form.Group>
                        {valueCheck === 0 && <Button variant="primary" type="submit" className={'Button-Contact'}>
                            Contact me
                        </Button>}
                        {valueCheck === 1 && <Alert variant={"success"} className={'Alert'}>
                            Message sent successfully! I will contact you as soon as possible.
                        </Alert>}
                        {valueCheck === 2 && <Alert variant={"danger"} className={'Alert'}>
                            Message not sent! Please try again.
                        </Alert>}
                    </Form>
                </Card>
            </div>
        </div>
    );
}

export default Contact;
