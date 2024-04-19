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
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

function MyModal({open, car, closeModal}) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  console.log(car.model)


  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
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
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{car.model && car.model}</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
      </Modal>
    </div>
  );
}

export default MyModal