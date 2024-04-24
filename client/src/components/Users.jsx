import { Link } from "react-router-dom"

const Users = () => {

    const students = ['Alex', 'Ben', 'Hadi', 'Marla', 'Samuel', 'Sheikh', 'Vlada', 'Wara','Paul']


    return (
        <>
         {students.map((student,index) => {
                return (
                   
                    <div key={index}>
                        <Link to={`/users/${student}`}><li>{student}</li></Link>
                    </div>
                )
            })}
            <br />
            <Link to='/home'>Go back to home</Link>
        </>
    )
}


export default Users