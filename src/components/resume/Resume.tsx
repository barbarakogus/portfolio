import './Resume.css';
import { useEffect, useRef, useState } from 'react';
import useOnScreen from '../../hooks/useOnScreen';
import Timeline from '../timenine/Timeline';
import TimelineMobile from '../timelineMobile/TimelineMobile';

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

    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
    });

    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight
        })
    };

    useEffect(() => {
        window.addEventListener('resize', setDimension);
        return (() => {
            window.removeEventListener('resize', setDimension);
        })
    }, [screenSize]);

    return (
        <div id='resumepage' className="container__resume">
            <h2 className="container__resume--title">Resume</h2>
            <hr className='container__resume--line'></hr>
            {screenSize.dynamicWidth < 768 ? <TimelineMobile resumes={resumes} refResume={ref} /> : <Timeline resumes={resumes} refResume={ref} />}
            <a href='https://storage.googleapis.com/portfolio_bk/cv_barbaraKogus_2022.pdf' className='container__resume--btn-dowloadCV' download target='_blank'>Dowload Resume</a>
        </div>
    );
}

export default Resume;