

import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'

const Quote = () => {
    const [quote, setQuote] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

  const quoteApi = async () => {
    try {
      const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      setQuote(response.data)
      setLoading(false)
    } catch (error) {
      setError(error)
      
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      quoteApi();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>There was an error</p>;
  }

    return (
        <div>
            <h1>Quote Of The Day</h1>
            <p>{quote}</p>
            <Link to='/home'>Go back to home</Link>
        </div>
    )

}
     

export default Quote
