import Header2 from "../components/Header2";
import "./SchemaSelectionPage.css";
import httpClient from "../httpClient";
// import {useState, useEffect} from 'react';

export default function SchemaSelectionPage() {

  const onClickHandler = async (id) => {
    const data = (await httpClient.get("http://localhost:5000/api/animation/schema/" + id)).data.results;

    console.log(data)
  }
  
  return (
    <>
      <Header2 />
      <div className="SchemaSelectionContainer">
            <div className="SchemaSelectionCard">
                <div className="SchemaSelectionTitle">Schema Selection</div>
                <div className="SchemaSelectionText">
                Begin your journey into the world of data manipulation and SQL query visualization by selecting from our five diverse range of pre-designed schemas.
                </div>
                <div className="colored-line" /> {/* Colored line */}
                <div className="button-container">
                    <button onClick={() => onClickHandler(1)} className="Schema1Button">SCHEMA 1</button>
                    <button onClick={() => onClickHandler(2)} className="Schema2Button">SCHEMA 2</button>
                    <button onClick={() => onClickHandler(3)} className="Schema3Button">SCHEMA 3</button>
                    <button onClick={() => onClickHandler(4)} className="Schema4Button">SCHEMA 4</button>
                    <button onClick={() => onClickHandler(5)} className="Schema5Button">SCHEMA 5</button>
                </div>
                <div className="SchemaDisplayCard">
                </div>
                <div className="SchemaSelectButton-container">
                    <button className="SchemaSelectButton">SELECT</button>
                </div>
            </div>
      </div>
    </>
  );
}
