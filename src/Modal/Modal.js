import React from "react";
import Modal from "react-modal";


function Example({ show, onHide, values}) {
    console.log(values);
  return (
    <Modal className="modal-box" isOpen={show} onRequestClose={onHide}>
      <h2>Shipping</h2>
      <h4>{JSON.stringify(values)}</h4>
      <button onClick={onHide}>close</button>
    </Modal>
  );
}

export default Example;