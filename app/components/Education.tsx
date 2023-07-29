import education from '../api/mockinfo/education'

const Education = () => {
    const { data } = education || {}

    return <div className="education-module"></div>
}

export default Education
