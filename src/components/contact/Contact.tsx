import './Contact.css';
import { useEffect, useRef } from 'react';
import useOnScreen from '../../hooks/useOnScreen';

function Contact() {

    const ref = useRef() as React.MutableRefObject<HTMLDivElement>
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        if (isVisible) {
            window.location.hash = '#contactpage'
        }
    }, [isVisible]);

    return (
        <div id='aboutpage' className="container__contact">
            <h2 className="container__contact--title">Contact</h2>
            <hr className='container__contact--line'></hr>
            <h4 ref={ref} className='container__contact--introduction'>Hi, did you like what you've seen so far?! I hope so, then let's talk!</h4>
            <div className='container__contact--info'>
                <address>
                    <p><span>Stockholm</span>, SE </p><br />
                    Bromma, 16838 <br /><br />
                    <a href='mailto:barbarakogus@gmail.com' className='container__contact--email'>barbarakogus@gmail.com</a><br />
                </address>
                <form className='container__contact__form'>
                    <div>
                        <input className='container__form__input' placeholder='Name' name='name' type="text" required></input>
                        <input className='container__form__input' placeholder='Subject (Optional)' name='subject' type="text"></input>
                    </div>
                    <input className='container__form__input--email' placeholder='Email' name='email' type="email"></input>
                    <textarea cols={40} rows={6} className="container__form__input--textarea" placeholder='Message' name="mensagem"  /*maxLength={50}*/></textarea>
                    <button className='container__form__input--btn'>Contact me</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;