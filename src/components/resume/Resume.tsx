import './Resume.css';
import { useEffect, useRef } from 'react';
import useOnScreen from '../../hooks/useOnScreen';

const resumes: Resume[] = [
    {
        title: 'Bachelor of Forest Engineering',
        description: 'Santa Catarina State University UDESC-CAV',
        date: '2007 - 2011'
    },
    {
        title: 'Coordinator of Graphic Editing of real estate Lot',
        description: 'Geomais Geotechnology',
        date: '2013 - 2018'
    },
    {
        title: 'MBA in auditing, expertise and environmental Management',
        description: 'IPOG',
        date: '2014 - 2016'
    },
    {
        title: 'Carrer Front-end',
        description: 'Alura',
        date: '2019 - 2020'
    },
    {
        title: 'Developemnt Android',
        description: 'Alura',
        date: '2020 - 2021'
    },
    {
        title: 'School of applied technology </salt>',
        description: 'School of applied technology',
        date: '2022 - Present'
    }
]

function Resume() {

    const ref = useRef() as React.MutableRefObject<HTMLDivElement>
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        if (isVisible) {
            window.location.hash = '#resumepage'
        }
    }, [isVisible]);

    return (
        <div id='resumepage' className="container__resume">
            <h2 className="container__resume--title">Resume</h2>
            <hr className='container__resume--line'></hr>
            <div className='container__resume--timeline'>
                <img src="https://img.icons8.com/carbon-copy/100/ffffff/chevron-right.png" />
                <span ref={ref} className='container--timeline-start'></span>
                <ul>
                    {resumes.map((resume, key) =>
                        <li key={key}>
                            <div>
                                <h3 className='resume--title'>{resume.title}</h3>
                                <p className='resume--description'>{resume.description}</p>
                                <p className='resume--date'>{resume.date}</p>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
            <a href='https://storage.googleapis.com/portfolio_bk/cv_barbaraKogus_2022.pdf' className='container__resume--btn-dowloadCV' download target='_blank'>Dowload Resume</a>
        </div>
    );
}

export default Resume;