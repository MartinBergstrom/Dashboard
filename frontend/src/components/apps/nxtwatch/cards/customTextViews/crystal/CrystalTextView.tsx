import DiamondIcon from "@mui/icons-material/Diamond";

interface CrystalTextViewProps {
  crystal: string;
}
export const CrystalTextView = ({ crystal }: CrystalTextViewProps) => {
  return (
    <>
      <span className="key-span">
        <b>Crystal</b>
      </span>
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
