import './Resume.css';
import { useEffect, useRef, useState } from 'react';
import useOnScreen from '../../hooks/useOnScreen';
import Timeline from '../timeline/Timeline';
import TimelineMobile from '../timelineMobile/TimelineMobile';
import { setCurrentPage } from '../../features/portfolioSlice';
import { useDispatch } from 'react-redux';

const resumes: Resume[] = [
    {
        title: 'Bachelor of Forest Engineering',
        description: 'Santa Catarina State University UDESC-CAV',
        date: '2007 - 2011'
    },
    {
        title: 'MBA in auditing, expertise and environmental Management',
        description: 'IPOG',
        date: '2014 - 2016'
    },
    {
        title: 'Coordinator of Graphic Editing of real estate Lot',
        description: 'Geomais Geotechnology',
        date: '2013 - 2018'
    },
    {
        title: 'Front-end carrer',
        description: 'Alura',
        date: '2019 - 2020'
    },
    {
        title: 'Developemnt Android',
        description: 'Alura',
        date: '2020 - 2021'
    },
    {
        title: 'Full-stack JavaScript developer',
        description: 'School of applied technology </salt>',
        date: '2022 - Present'
    }
]

function Resume() {

    const dispatch = useDispatch();

    const ref = useRef() as React.MutableRefObject<HTMLDivElement>
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        if (isVisible) {
            dispatch(setCurrentPage('resume'))
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
        <div id='resume' className="container__resume">
            <h2 className="container__resume--title">Resume</h2>
            <hr className='container__resume--line'></hr>
            {screenSize.dynamicWidth < 768 ? <TimelineMobile resumes={resumes} refResume={ref} /> : <Timeline resumes={resumes} refResume={ref} />}
            <a href='https://storage.googleapis.com/portfolio_bk/cv_barbaraKogus_2022.pdf' className='container__resume--btn-dowloadCV' download target='_blank'>Dowload Resume</a>
        </div>
    );
}

export default Resume;