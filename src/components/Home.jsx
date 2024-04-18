import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

    function App() {
  const [cars, setCar] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  const apiCall = async () => {
    try {
      const response = await axios.get("https://node-exe.vercel.app/cars");
      setCar(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://node-exe.vercel.app/cars", {
        brand,
        model,
        year,
        image,
        url,
      });
    } catch (error) {
      setError(error);
    } finally {
      apiCall();
      setBrand("");
      setModel("");
      setYear("");
    }
  };
  useEffect(() => {
    apiCall();
  }, []);
  console.log(cars);

  if (error) return <p>error</p>;
  if (loading) return <p>Loading...</p>;
    return(
        <>
        <img className="logo" src="/src/assets/a.avif" alt="" />
            <h2>Welcome home</h2>
             <div>
        <h1>Car Details</h1>

        {cars.map((car) => (
          <div key={car.id}>
            <div className="main">
              <h2>The Car Brand {car.brand}</h2>
              <p>Car Model - {car.model}</p>
              <p>Car Year - {car.year}</p>
              <img src={`https://node-exe.vercel.app/public/${car.Image}`} alt="" />
              <a href={car.URL}>More Info</a>
            </div>
          </div>
        ))}
      </div>
            <Link to='/home'></Link>
        </>
    )
}



export default App;