import { useModal } from "./components/context/ModalContext";

function App() {
  const { openModal } = useModal();

  const openModal1 = () => {
    openModal("modal1");
  };
  const openModal2 = () => {
    openModal("modal2");
  };
  const openModal3 = () => {
    openModal("modal3");
  };

  return (
    <div>
      <div>
        <button className="modal-trigger" onClick={openModal1}>
          Open Modal 1
        </button>
        <button className="modal-trigger" onClick={openModal2}>
          Open Modal 2
        </button>
        <button className="modal-trigger" onClick={openModal3}>
          Open Modal 3
        </button>
      </div>
    </div>
  );
}

export default App;
