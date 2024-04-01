import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "./sportsCalendar.css";
import { useState } from "react";


const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const SportsCalendar = () => {
    const [currentMonth, setCurentMonth] = useState<Date>(new Date());
    const navigate = useNavigate();

    const getStartDate = () => {
        let date = new Date(currentMonth);
        date.setDate(1);
        let dayNbr = date.getDay()
        if (dayNbr === 1) {
            // it's monday
            return date;
        } else {
            date.setDate(0);
            while (dayNbr !== 1) {
                const modifiedDate = new Date(date);
                modifiedDate.setDate(date.getDate() - 1);
                date = modifiedDate;
                dayNbr = date.getDay();
            }
            return date;
        }
    }

    const getEndDate = () => {
        // Get end of this month
        let date = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
        let dayNbr = date.getDay();
        if (dayNbr === 0) {
            return date;
        }
        date = getNextMonth(date);
        dayNbr = date.getDay();
        while (dayNbr !== 0) {
            date.setDate(date.getDate() + 1);
            dayNbr = date.getDay();
        }
        return date;
    }

    const getNextMonth = (date: Date) => {
        const nextYear = date.getMonth() === 11 ? date.getFullYear() + 1 : date.getFullYear();
        const nextMonth = date.getMonth() === 11 ? 0 : date.getMonth() + 1;
        return new Date(nextYear, nextMonth, 1);
    }

    const setPrevMonth = () => {
        const date = new Date(currentMonth);
        date.setMonth(date.getMonth() - 1);
        setCurentMonth(date);
    }

    const setNextMonth = () => {
        setCurentMonth(getNextMonth(currentMonth));
    }

    const renderCells = () => {
        const startDate = getStartDate();
        const endDate = getEndDate();
        const rows: any = [];

        let day: Date = startDate;
        let days = [];

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                days.push(<div className="col cell" key={day.toDateString()}>
                    <span>{day.toDateString()}</span>
                </div>)
                day.setDate(day.getDate() + 1);
            }
            rows.push(<div className="row" key={day.toDateString()}>
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
            <div className="calendar-wrapper">
                <div className="sports-calendar">
                    <div> <IconButton
                        color="primary"
                        onClick={() => setPrevMonth()}
                    >
                        <KeyboardArrowLeftIcon />
                    </IconButton>{monthNames[currentMonth.getMonth()]}
                    <IconButton
                        color="primary"
                        onClick={() => setNextMonth()}
                    >
                        <KeyboardArrowRightIcon />
                    </IconButton>
                    </div>
                    <div>Days</div>
                    {renderCells()}
                </div>
            </div>
        </>
    );

};

export default SportsCalendar;
