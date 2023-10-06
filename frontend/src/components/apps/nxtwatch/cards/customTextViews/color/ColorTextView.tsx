import "./ColorTextView.css";

interface ColorTextViewProps {
  displayName: string;
  color: string;
}

const ColorTextView = ({ displayName, color }: ColorTextViewProps) => {
  const adjustColor = () => {
    if (color && color.toLowerCase() === "steel") {
      return "#D1D2D2";
    }
    return color;
  };

  return (
    <span className="key-value-span">
      <span className="key-span">
        <b>{displayName}: </b>
      </span>
      {color}
      <span className="box" style={{ backgroundColor: adjustColor() }}></span>
    </span>
  );
};

export default ColorTextView;
