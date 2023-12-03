import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./PriorityBadge.css";

interface PriorityBadgeProps {
  prio: number;
}

const PriorityBadge = (props: PriorityBadgeProps): JSX.Element => {
  const onPrioUpClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();
    console.log("prio up clicked");
  };

  const onPrioDownClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();
    console.log("prio down clicked");
  };

  return (
    <>
      <div className="with-priority-div">
        <div className="with-priority-badge">
          <div className="with-priority-badge-arrows">
            <span
              className="with-priority-badge-arrow-icon"
              onClick={onPrioUpClick}
            >
              <ArrowUpwardIcon fontSize="small" />
            </span>
            <span className="with-priority-badge-number">{props.prio}</span>
            <span
              className="with-priority-badge-arrow-icon"
              onClick={onPrioDownClick}
            >
              <ArrowDownwardIcon fontSize="small" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriorityBadge;
