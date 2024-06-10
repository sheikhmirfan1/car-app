import { useState } from "react";
import MyModal from "./Modal";

const Card = ({car}) => {

    const customStyles = {
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      };
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = "#f00";
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  

    return (
      <>
        <div className="main" key={car.id}>
          <div>
            <img
              className="car-image"
              src={`https://node-exe.vercel.app/public/${car.Image}`}
              alt=""
            />
            <h2>The Car Brand {car.brand}</h2>
            <p>Car Model - {car.model}</p>
            <p>Car Year - {car.year}</p>
            <a onClick={openModal}>
              <h3>More Info </h3>
            </a>
          </div>

          <MyModal car={car} open={modalIsOpen} closeModal={closeModal} />
        </div>
      </>
    );
}


export default Card