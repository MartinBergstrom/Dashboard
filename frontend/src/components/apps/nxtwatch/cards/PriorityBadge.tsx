import "./PriorityBadge.css";

const priorityBadge = (width: string, prio: number): JSX.Element => {
  return (
    <>
      <div className="with-priority-div">
        <div
          className="with-priority-badge"
          style={{
            width: width,
            height: width,
          }}
        >
          <span>{prio}</span>
        </div>
      </div>
    </>
  );
};

export default priorityBadge;
