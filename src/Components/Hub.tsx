import { Link } from "react-router-dom"

const Hub = () => {

    return (
        <>
            <h1>
                Welcome to this site
            </h1>
            <p>
                Click below to see the current salmon run rewards.
            </p>
            <Link to="/rotations">Knowledge is here !</Link>
        </>
    )
}

export default Hub