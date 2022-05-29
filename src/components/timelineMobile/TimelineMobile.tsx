import './TimelineMobile.css';

interface ResumeProps {
    resumes: Resume[]
    refResume: React.MutableRefObject<HTMLDivElement>
}

function TimelineMobile({ resumes, refResume }: ResumeProps) {

    return (
        <div className='container__timelineMobile'>
            <img className='container--timelineMobile-arrow' src="https://img.icons8.com/carbon-copy/100/ffffff/chevron-right.png" />
            <ul>
                {resumes.map((resume, key) =>
                    <li key={key}>
                        <div>
                            <h3 className='timelineMobile--title'>{resume.title}</h3>
                            <p className='timelineMobile--description'>{resume.description}</p>
                            <p className='timelineMobile--date'>{resume.date}</p>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default TimelineMobile;