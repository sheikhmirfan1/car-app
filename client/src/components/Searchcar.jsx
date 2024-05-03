import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';



const SearchCar = () => {
    const [search, setSearch] = useState(null);
    const [car, setCar] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const API_KEY = 'DNHAm2aSmhkfPh7Xpg8eug==uWZo49Q3Kq0bdCGF'

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
       
        {/* {car && car.map((car) =>
         (
          <div key={car.id}>
            <h2> Model: {car.name}</h2>
            <p> ID: {car.max_car_id}</p>
            
          </div>
        ))} */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {car && (
          <div>
            <h2>{car.name}</h2>
            <p>{car.year}</p>
          </div>
        )}
        {error && <p>{error}</p>}
        <button onClick={fetchCar}>Search</button>
        <br />

        <Link to="/home">Go back to home</Link>
      </div>
    );
}

export default SearchCar;