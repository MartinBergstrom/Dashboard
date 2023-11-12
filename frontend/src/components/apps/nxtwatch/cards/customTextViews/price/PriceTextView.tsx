import { StyledAttachMoneyIcon } from "../../../customStyles/customIconStyles";

interface PriceTextViewProps {
  price: string;
}
export const PriceTextView = ({ price }: PriceTextViewProps) => {
  return (
    <span className="key-value-span">
      <span className="key-span" style={{ color: "#cfc400" }}>
        <StyledAttachMoneyIcon sx={{ marginLeft: "-5px" }} />
        <b>Price: </b>
      </span>
      <span className="value-span">
        <b>{price}</b>
      </span>
    </span>
  );
};
