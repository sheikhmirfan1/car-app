import { Link } from 'react-router-dom'


const Contact = () => {
    return(
        <>
            <form action="">
                <input type="text" />
                <br />
                <input type="text" />
                <br />
                <button>Click me</button>
            </form>
            <Link to='/home'>Go back to home</Link>
        
        </>
    )
}

export default Contact