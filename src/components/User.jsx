
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';




const User = () => {
    const {student } = useParams();
    return (
        <div>
            <h1>Welcome </h1>
            <h2>User {student}</h2>

            <br />
            <Link to='/home'>Go back to home</Link>
        </div>
        
    )
  
}

export default User