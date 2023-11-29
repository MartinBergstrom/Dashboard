import "./WithPriority.css";

interface WithPriorityProps {
  prio: number;
  size: string;
}

export function withPriority<P>(WrappedComp: React.ComponentType<P>) {
  const PriorityIndicator = (props: P & WithPriorityProps) => {
    return (
      <div className="with-priority-div">
        <WrappedComp {...props} />
        <div
          className="with-priority-badge"
          style={{
            width: props.size,
            height: props.size,
          }}
        >
          <span>{props.prio}</span>
        </div>
      </div>
    );
  };

  return PriorityIndicator;
}
