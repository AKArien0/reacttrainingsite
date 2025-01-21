
const NotFound = () => {
    setTimeout(() => {
        window.location.replace("/")
    }, 3000)

    return (
        <>
            <h1>
                Not found
            </h1>
        </>
    )
}

export default NotFound