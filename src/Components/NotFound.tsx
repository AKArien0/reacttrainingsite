import { useState } from "react"
import { Navigate } from "react-router-dom"

const NotFound = () => {
    const [redirectNow, setRedirectNow] = useState(false)
    setTimeout(() => {
        setRedirectNow(true)
    }, 3000)

    return (
        <>
            {redirectNow ?
                <Navigate to="/" />
            :
                <h1>
                    Not found
                </h1>
            }
        </>
    )
}

export default NotFound