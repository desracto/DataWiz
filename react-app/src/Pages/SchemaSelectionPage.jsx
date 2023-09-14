import Header1 from "../components/Header1";
import "./SchemaSelectionPage.css";

export default function SchemaSelectionPage() {
  return (
    <>
      <Header1 />
      <div className="SchemaSelectionContainer">
        <div className="SchemaSelectionCard">
          {/* Figma components */}
          <div className="SchemaSelectionTitle">Schema Selection</div>
          <div className="SchemaSelectionText">
            Begin your journey into the world of data manipulation and SQL query visualization by selecting from our five diverse range of pre-designed schemas.
          </div>
          <div className="colored-line" /> {/* Colored line */}
          <button className="Schema1Button">Schema 1</button>
        </div>
      </div>
    </>
  );
}
