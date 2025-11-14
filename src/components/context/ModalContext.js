import { createContext, useContext } from "react";

export const ModalContext = createContext({
  openModal: null,
  closeModal: null,
  key: null,
  props: null,
});

export const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("context required");
  return ctx;
};
