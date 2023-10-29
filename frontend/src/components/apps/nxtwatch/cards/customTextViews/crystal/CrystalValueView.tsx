import DiamondIcon from "@mui/icons-material/Diamond";

interface CrystalValueViewProps {
  crystal: string;
}
export const CrystalValueView = ({ crystal }: CrystalValueViewProps) => {
  return (
    <>
      <span className="value-span">
        {crystal}
        {crystal && crystal.toLocaleLowerCase() === "sapphire" ? (
          <DiamondIcon
            sx={{
              verticalAlign: "-4px",
              fontSize: "1.2rem",
              color: "#4ACBF2",
            }}
          />
        ) : null}
      </span>
    </>
  );
};
