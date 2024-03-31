import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "sportsCalendar.css";

const SportsCalendar = () => {
    const navigate = useNavigate();

    const getStartDate = () => {
        // get the start date by using current date
        // then get start of month
        // setDate(1) ?
        // if that is not on monday, get previous month and get at monday
        return new Date();
    }

    const getEndDate = () => {
        // Get end of month, check if sunday
        const current = new Date();
        current.setDate(current.getDate() + 10);
        return current;
    }

    const renderCells = () => {
        const startDate = getStartDate();
        const endDate = getEndDate();
        const rows: any = [];

        let day: Date = startDate;
        let days = [];

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                days.push(<div className="sports-calendar-cell" key={day.toDateString()}>
                    <span>{day.toDateString()}</span>
                </div>)
                day.setDate(day.getDate() + 1);
            }
            rows.push(<div className="sports-calendar-row" key={day.toDateString()}>
                {days}
            </div>)
            days = [];
        }

        return <div className="body">{rows}</div>
    }

    return (
        <>
            <IconButton
                color="primary"
                style={{
                    position: "absolute",
                    top: "10px",
                    left: "5px",
                }}
                onClick={() => navigate(-1)}
            >
                <KeyboardBackspaceIcon />
            </IconButton>
            <div>
                <div>Header</div>
                <div>Days</div>
                {renderCells()}
            </div>
        </>
    );

};

export default SportsCalendar;
