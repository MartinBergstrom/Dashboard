import "./ColorValueView.css";

interface ColorValueViewProps {
  color: string;
}

const ColorValueView = ({ color }: ColorValueViewProps) => {
  const adjustColor = () => {
    if (color && color.toLowerCase() === "steel") {
      return "#D1D2D2";
    }
    return color ? color : undefined;
  };

  return (
    <>
      <span className="value-span">
        {color}
        <span
          className="box"
          style={{
            backgroundColor: adjustColor(),
            border: "solid white 1px",
          }}
        ></span>
      </span>
    </>
  );
};

export default ColorValueView;
