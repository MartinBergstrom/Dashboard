import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

interface PriceTextViewProps {
  price: string;
}
export const PriceTextView = ({ price }: PriceTextViewProps) => {
  return (
    <span className="key-value-span">
      <span className="key-span" style={{ color: "#cfc400" }}>
        <AttachMoneyIcon
          sx={{
            marginLeft: "-5px",
            verticalAlign: "-4px",
            fontSize: "1.2rem",
            color: "#cfc400",
          }}
        />
        <b>Price: </b>
      </span>
      <span className="value-span">
        <b>{price}</b>
      </span>
    </span>
  );
};
