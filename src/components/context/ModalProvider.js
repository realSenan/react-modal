import { useState } from "react";
import Modal1 from "../modals/Modal1";
import ModalContainer from "../container/ModalContainer";
import { ModalContext } from "./ModalContext";

const ModalProvider = ({ children }) => {
  const registeredModals = {
    modal1: Modal1,
    // modal1 : Modal1,
    // modal1 : Modal1,
  };

  const [isOpen, setIsOpen] = useState(false);
  const [key, setKey] = useState(null);
  const [props, setProps] = useState({});

  const openModal = (key, props = {}) => {
    if (!registeredModals[key]) {
      throw new Error("Key is not defined");
    }
    setIsOpen(true);
    setKey(key);
    setProps(props);
  };

  const closeModal = () => {
    setIsOpen(false);
    setKey(null);
    setProps({});
  };

  const Modal = registeredModals[key];

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
        key,
        props,
      }}
    >
      {children}

      {isOpen && (
        <ModalContainer closeModal={closeModal}>
          <Modal />
        </ModalContainer>
      )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
