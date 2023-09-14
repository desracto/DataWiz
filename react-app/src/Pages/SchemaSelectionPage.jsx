import Header1 from "../components/Header1";
import "./SchemaSelectionPage.css";

export default function SchemaSelectionPage() {
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
                    <button className="Schema1Button">SCHEMA 1</button>
                    <button className="Schema2Button">SCHEMA 2</button>
                    <button className="Schema3Button">SCHEMA 3</button>
                    <button className="Schema4Button">SCHEMA 4</button>
                    <button className="Schema5Button">SCHEMA 5</button>
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
