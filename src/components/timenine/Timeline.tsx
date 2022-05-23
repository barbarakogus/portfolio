import './Timeline.css';

interface TimelineProps {
    resumes: Resume[]
    refResume: React.MutableRefObject<HTMLDivElement>
}

function Timeline({ resumes, refResume }: TimelineProps) {

    return (
        <div className='container__resume--timeline'>
            <img className='container--timeline-arrow' src="https://img.icons8.com/carbon-copy/100/ffffff/chevron-right.png" />
            <span ref={refResume} className='container--timeline-start'></span>
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
    );
}

export default Timeline;