import './Contact.css';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import useOnScreen from '../../hooks/useOnScreen';
import { setCurrentPage } from '../../features/portfolioSlice';
import { useDispatch } from 'react-redux';

function Contact() {

    const [contactForm, setContactForm] = useState({
        name: '',
        subject: '',
        email: '',
        message: ''
    });
    const [sendEmailStatus, setSendEmailStatus] = useState({
        erroMessage: '',
        status: false,
    });
    const [isLoading, setIsLoading] = useState(false);
    const url = 'https://email-service.barbarakogus.com/email';

    const dispatch = useDispatch();

    const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        if (isVisible) {
            dispatch(setCurrentPage('contact'));
        }
    }, [dispatch, isVisible]);

    const sendEmail = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: contactForm.name,
                    subject: contactForm.subject,
                    email: contactForm.email,
                    message: contactForm.message
                })
            })
            if (response.ok) {
                setContactForm({
                    name: '',
                    subject: '',
                    email: '',
                    message: ''
                })
                setSendEmailStatus({
                    erroMessage: 'Email successfully sent. Thank you for reaching out. I will contact you as soon as possible.',
                    status: true
                })
                setIsLoading(false)
            } else {
                throw new Error('Failed to send email.')
            }
        } catch (err) {
            setSendEmailStatus({
                erroMessage: 'Something went wrong. Please try later or get in touch via Linkedin. Sorry for the inconvenience.',
                status: false
            })
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = event.target;
        setSendEmailStatus({
            erroMessage: '',
            status: sendEmailStatus.status
        });
        setContactForm((prevForm) => ({
            ...prevForm,
            [name]: value 
        }));
    };

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
                        <input className='container__form__input' placeholder='Name' name='name' type="text" value={contactForm.name} onChange={handleChange} required></input>
                        <input className='container__form__input' placeholder='Subject (Optional)' name='subject' type="text" value={contactForm.subject} onChange={handleChange}></input>
                    </div>
                    <input className='container__form__input--email' placeholder='Email' name='email' type="email" value={contactForm.email} onChange={handleChange} required></input>
                    <textarea cols={40} rows={6} className="container__form__input--textarea" placeholder='Message' name="message" value={contactForm.message} onChange={handleChange} required /*maxLength={50}*/></textarea>
                    <button id='submit_button' className={`container__form__input--btn ${isLoading && 'loading'}`}>{!isLoading && 'Contact me'}</button>
                    {sendEmailStatus.erroMessage.length > 1 && <span className={`container__form--emailResultMessage ${sendEmailStatus.status ? 'emailSucceed' : 'emailFailed'} `}>{sendEmailStatus.erroMessage}</span>}
                </form>
            </div>
        </div>
    );
}

export default Contact;