import './App.css'
import { Routes, Route} from 'react-router-dom'
import Contact from './components/Contact.jsx'
import App from './components/Home.jsx'
import Users from './components/Users.jsx'
import NavBar from './components/NavBar.jsx'
import Weather from './components/Weather.jsx'
import Quote from './components/Quote.jsx'
import User from './components/User.jsx'
import SearchCar from './components/Searchcar.jsx'




function AppRouter() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/searchCar" element={<SearchCar />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users/" element={<Users />} />
        <Route path="/users/:student" element={<User />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </>
  );
}

export default AppRouter
