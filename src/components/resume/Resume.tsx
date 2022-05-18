import './Resume.css';

// const resume: Resume = [
//     {
//         title: 'Bachelor of Forest Engineering',
//         description: 'Santa Catarina State University UDESC-CAV',
//         date: '2007 - 2011'
//     },
//     {
//         title: 'Coordinator of Graphic Editing of real estate Lot',
//         description: 'Geomais Geotechnology',
//         date: '2013 - 2018'
//     },
//     {
//         title: 'MBA in auditing, expertise and environmental Management',
//         description: 'IPOG',
//         date: '2014 - 2016'
//     },
//     {
//         title: 'Carrer Front-end',
//         description: 'Alura',
//         date: '2019 - 2020'
//     },
//     {
//         title: 'Developemnt Android',
//         description: 'Alura',
//         date: '2020 - 2021'
//     },
//     {
//         title: 'School of applied technology </salt>',
//         description: 'School of applied technology',
//         date: '2022 - Present'
//     }
// ]

function Resume() {
    return (
        <div id='resumepage' className="container__resume">
            <div className='container__resume--timeline'>
            <img src="https://img.icons8.com/carbon-copy/100/ffffff/chevron-right.png"/>
                <span className='container--timeline-start'></span>
                <ul>
                    <li>
                        <div>
                            <h3 className='resume--title'>Bachelor of Forest Engineering</h3>
                            <p className='resume--description'>Santa Catarina State University UDESC-CAV</p>
                            <p className='resume--date'>2007 - 2011</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3 className='resume--title'>Coordinator of Graphic Editing of real estate Lot</h3>
                            <p className='resume--description'>Geomais Geotechnology</p>
                            <p className='resume--date'>2013 - 2018</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3 className='resume--title'>MBA in auditing, expertise and environmental Management</h3>
                            <p className='resume--description'>IPOG</p>
                            <p className='resume--date'>2014 - 2016</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3 className='resume--title'>Carrer Front-end</h3>
                            <p className='resume--description'>Alura</p>
                            <p className='resume--date'>2019 - 2020</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3 className='resume--title'>Developemnt Android</h3>
                            <p className='resume--description'>Alura</p>
                            <p className='resume--date'>2020 - 2021</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3 className='resume--title'>School of applied technology</h3>
                            <p className='resume--description'>School of applied technology</p>
                            <p className='resume--date'>2022 - Present</p>
                        </div>
                    </li>
                </ul>
            </div>
            <button className='container__resume--btn-dowloadCV'>Dowload Resume</button>
        </div>
    );
}

export default Resume;