import React from "react";
import Modal from "react-modal";

/**
 * @param show - show ,props received by default
 * @param onHide -onHide ,function received by default
 * @param values- values ,props received by default
 */
function Example({ show, onHide, values}) {
    console.log(values);
  return (
    <Modal  isOpen={show} onRequestClose={onHide}>
      <h2>Shipping</h2>
      <h4>{JSON.stringify(values)}</h4>
      <button onClick={onHide}>close</button>
    </Modal>
  );
}

export default Example;