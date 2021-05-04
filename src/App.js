import "./App.css";
import PopUp from "./components/PopUp";
import ModalProvider from "./contexts/NewModal";

function App() {
  return (
    <ModalProvider>
      <PopUp />
    </ModalProvider>
  );
}

export default App;
