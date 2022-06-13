import './Contact.css';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import useOnScreen from '../../hooks/useOnScreen';
import { setCurrentPage } from '../../features/portfolioSlice';
import { useDispatch } from 'react-redux';

function Contact() {

    const [inputName, setInputName] = useState('');
    const [inputSubject, setInputSubject] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputMessage, setInputMessage] = useState('');
    const [emailResultMessage, setEmailResultMessage] = useState('');
    const [isEmailSent, setIsEmailSent] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(true);

    const dispatch = useDispatch();

    const ref = useRef() as React.MutableRefObject<HTMLDivElement>
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        if (isVisible) {
            dispatch(setCurrentPage('contact'));
        }
    }, [isVisible]);

    //it is not getting here -- FIX TOMORROW!
    function validateEmail(email: string) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log('i am in')
        return re.test(String(email).toLowerCase());
    }

    const sendEmail = (event: React.SyntheticEvent) => {
        event.preventDefault();

        if (validateEmail(inputEmail)) {

            fetch('http://localhost:3002/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: inputName,
                    subject: inputSubject,
                    email: inputEmail,
                    message: inputMessage
                })
            })
                .then(() => {
                    setInputName('');
                    setInputSubject('');
                    setInputEmail('');
                    setInputMessage('');
                    setEmailResultMessage('Email successfully sent. Thank you for reaching out. As soon as possible, I will contact you.');
                    setIsEmailSent(true);
                })
                .catch((error) => {
                    setEmailResultMessage('Something went wrong. Please try later or get in touch via Linkedin. Sorry for the inconvenience.');
                    console.error(error);
                });
        } else {
            setIsEmailValid(false);
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        switch (event.target.name) {
            case 'name':
                setInputName(event.target.value);
                setEmailResultMessage('');
                break;
            case 'subject':
                setInputSubject(event.target.value);
                setEmailResultMessage('');
                break;
            case 'email':
                setInputEmail(event.target.value);
                setEmailResultMessage('');
                break;
            case 'message':
                setInputMessage(event.target.value);
                setEmailResultMessage('');
                break;
        }
    }

    return (
        <div id='contact' className="container__contact">
            <h2 className="container__contact--title">Contact</h2>
            <hr className='container__contact--line'></hr>
            <h4 ref={ref} className='container__contact--introduction'>Hi, did you like what you've seen so far?! I hope so, then let's talk!</h4>
            <div className='container__contact--info'>
                <address>
                    <p><span>Stockholm</span>, SE </p><br />
                    Bromma, 16838 <br /><br />
                    <a href='mailto:barbarakogus@gmail.com' className='container__contact--email'>barbarakogus@gmail.com</a><br />
                </address>
                <form className='container__contact__form' onSubmit={(event) => sendEmail(event)}>
                    <div>
                        <input className='container__form__input' placeholder='Name' name='name' type="text" value={inputName} onChange={handleChange} required></input>
                        <input className='container__form__input' placeholder='Subject (Optional)' name='subject' type="text" value={inputSubject} onChange={handleChange}></input>
                    </div>
                    {!isEmailValid ? <span className='container__form__input--invalidEmail'>The email format is not valid</span> : ''}
                    <input className='container__form__input--email' placeholder='Email' name='email' type="email" value={inputEmail} onChange={handleChange} required></input>
                    <textarea cols={40} rows={6} className="container__form__input--textarea" placeholder='Message' name="message" value={inputMessage} onChange={handleChange} required /*maxLength={50}*/></textarea>
                    <button className='container__form__input--btn'>Contact me</button>
                    {emailResultMessage.length > 1 ? <span className={`container__form--statusMessage ${isEmailSent ? 'emailSucceed' : 'emailFailed'} `}>{emailResultMessage}</span> : ''}
                </form>
            </div>
        </div>
    );
}

export default Contact;