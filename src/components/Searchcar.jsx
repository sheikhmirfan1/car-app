import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';




const SearchCar = () => {
    const [search, setSearch] = useState(null);
    const [car, setCar] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const API_KEY = "2ZgWgwz9+CjWBDp1zI8ZJg==SDTo8FAYCGeDIf6p";

    const fetchCar = async () => {
        try {
            const response = await axios.get(`https://api.api-ninjas.com/v1/cars?make=${!search ? 'ford' :  search}`, {
              headers : {'X-Api-Key' : API_KEY}
            });
            console.log(response.data);
            setCar(response.data);
           
        } catch (error) {
            setError(error.message);
        }
        finally{
            
            setLoading(false);
        }
    
    };
   useEffect(() => {
    fetchCar();
   },[]);
   

 

   if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>There was an error</p>;
    }



    return (
      <div>
        <h1>Search Car</h1>

        <label>Search for a car </label>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={fetchCar}>Search</button>

        <h2>Car</h2>
        <>
          {car.map((car) => (
            <div key={car.id}>
              <div className='crs'>
                <h2>{car.make}</h2>
                <p>{car.class}</p>
                <p>{car.model}</p>
                <p>{car.year}</p>
                <p>{car.transmission}</p>
              </div>
            </div>
          ))}
        </>

        {error && <p>{error}</p>}

        <Link to="/home">Go back to home</Link>
      </div>
    );
}

export default SearchCar;