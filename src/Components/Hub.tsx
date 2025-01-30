import { Link } from "react-router-dom"

const Hub = () => {

    return (
        <>
            <h1 className="text-center my-4">
                Welcome to this site
            </h1>
            <p className="text-center mb-4">
                Click below to see the current salmon run rotations.
            </p>
            <div className="text-center">
                <Link to="/rotations" className="btn btn-primary">Knowledge is here!</Link>
            </div>
        </>
    )
}

export default Hub
