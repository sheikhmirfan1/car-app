import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    color: "black",
  },
};

function MyModal({ open, car, closeModal }) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  console.log(car.model);

  function afterOpenModal() {
    subtitle.style.color = "#0060f0";
  }

  return (
    <div>
      <Modal
        
        isOpen={open}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{car.model}</h2>
        <img
          className="car-image"
          src={`https://node-exe.vercel.app/public/${car.Image}`}
          alt=""
        />
        <p>Car ID :{car.id}</p>
        <p>Model : {car.year}</p>
        <p>Brand : {car.brand}</p>
        <p>Price : {car.price}</p>
        <p>Mileage : {car.kilometers}</p>

        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
}

export default MyModal;
