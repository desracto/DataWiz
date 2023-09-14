import Header1 from "../components/Header1";
import "./SchemaSelectionPage.css";

const URL = 'http://localhost:5000/api'

const getSchemaData = (id) => {
  const response = fetch(URL + "/animation/schema/" + id).then(response => response.json());

  console.log(response)
}

export default function SchemaSelectionPage() {
  
  const onClickHandler = (id) => {
    getSchemaData(id);
  }
  
  return (
    <>
      <Header1 />
      <div className="SchemaSelectionContainer">
            <div className="SchemaSelectionCard">
                <div className="SchemaSelectionTitle">Schema Selection</div>
                <div className="SchemaSelectionText">
                Begin your journey into the world of data manipulation and SQL query visualization by selecting from our five diverse range of pre-designed schemas.
                </div>
                <div className="colored-line" /> {/* Colored line */}
                <div className="button-container">
                    <button onClick={() => onClickHandler(1)} className="Schema1Button">SCHEMA 1</button>
                    <button onClick={(event) => onClickHandler(event, 2)} className="Schema2Button">SCHEMA 2</button>
                    <button onClick={(event) => onClickHandler(event, 3)} className="Schema3Button">SCHEMA 3</button>
                    <button onClick={(event) => onClickHandler(event, 4)} className="Schema4Button">SCHEMA 4</button>
                    <button onClick={(event) => onClickHandler(event, 5)} className="Schema5Button">SCHEMA 5</button>
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
