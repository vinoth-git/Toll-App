import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AddEntryForm from "./components/AddEntryForm";
import AddTollForm from "./components/AddTollForm";
import Popup from "./components/Popup";
import HomePage from "./containers/HomePage";
import TollList from "./containers/TollList";

function App() {
  const [isTollEntry, setTollEntry] = useState(false);
  const [isVehicleEntry, setVehicleEntry] = useState(false);

  function handleButton(isTollEntry: boolean, value: boolean) {
    if (isTollEntry) {
      setTollEntry(value);
    } else {
      setVehicleEntry(value);
    }
  }

  return (
    <div className="App">
      <h4 className="header">Toll Management Application </h4>

      <Router>
        <Routes>
          <Route path="/" element={<HomePage handleButton={handleButton} />} />
          <Route
            path="/toll-list"
            element={<TollList handleButton={handleButton} />}
          />
        </Routes>
      </Router>
      {isTollEntry && (
        <Popup handleButton={handleButton}>
          <AddTollForm handleButton={handleButton} />
        </Popup>
      )}
      {isVehicleEntry && (
        <Popup handleButton={handleButton}>
          <AddEntryForm handleButton={handleButton} />
        </Popup>
      )}
    </div>
  );
}

export default App;
