import Header from "./components/Header/Header";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
import { getParcels } from "./API/API";
import Table from "./components/Table/Table";
import Forms from "./components/Forms/Forms";
import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  const [parcels, setParcels] = useState([]);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    if (!isPressed) {
      getParcels().then((data) => setParcels(data));
    }
  }, [isPressed]);

  return (
    <div className={styles.container}>
      <Header setIsPressed={setIsPressed} />
      {isPressed ? (
        <Forms setIsPressed={setIsPressed} />
      ) : (
        <Table parcels={parcels} />
      )}
    </div>
  );
}

export default App;
