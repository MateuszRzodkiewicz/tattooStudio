import "../../../../Css/ArtistDiv.css";

function ArtistDiv({ artName, scroll, cursorX, cursorY }) {
  return (
    <div
      className="artistDiv"
      style={{
        left: `${cursorX - 100}px`,
        top: `${cursorY - scroll + 30}px`,
      }}
    >
      <p className="artistDivP">
        Artist
        <span>{artName}</span>
      </p>
    </div>
  );
}

export default ArtistDiv;
