import React, { useState } from "react";
import { postParcel } from "../../API/API";
import styles from "./Forms.module.css";


const Forms = ({ setIsPressed }) => {
  const [name, setName] = useState("Default");
  const [settlement, setSettlement] = useState("Default");
  const [latitude, setLatitude] = useState("01.11111");
  const [longtitude, setLongitude] = useState("01.111110");
  const [water_level, setWaterLevel] = useState(0);
  const [measurement_date, setMeasurementDate] = useState("2000-01-01 00:00:01");

  const onClick = (e) => {
    e.preventDefault();
    postParcel({
      name,
      settlement,
      latitude,
      longtitude,
      water_level: Number(water_level),
      measurement_date
    })
      .then(() => {
        setIsPressed(false);
      })
      .catch((e) => console.warn(e));
  };

  return (
    <div className={styles.container}>
      <form>
        <div className={styles.item}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className={styles.item}>
          <label>Settlement</label>
          <input
            type="text"
            name="settlement"
            value={settlement}
            onChange={(e) => {
              setSettlement(e.target.value);
            }}
          />
        </div>
        <div className={styles.item}>
          <label>Latitude</label>
          <input
            type="text"
            name="latitude"
            value={latitude}
            onChange={(e) => {
              setLatitude(e.target.value);
            }}
          />
        </div>
        <div className={styles.item}>
          <label>Longitude</label>
          <input
            type="text"
            name="longitude"
            value={longtitude}
            onChange={(e) => {
              setLongitude(e.target.value);
            }}
          />
        </div>
        <div className={styles.item}>
          <label>Water level</label>
          <input
            type="number"
            name="waterLevel"
            value={water_level}
            onChange={(e) => {
              setWaterLevel(e.target.value);
            }}
          />
        </div>
        <div className={styles.item}>
          <label>Recepient Id</label>
          <input
            type="text"
            name="measurementDate"
            value={measurement_date}
            onChange={(e) => {
              setMeasurementDate(e.target.value);
            }}
          />
        </div>
        
        <input type="submit" value="Add River" onClick={onClick} />
        <button
          onClick={() => {
            setIsPressed(false);
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Forms;
