import { TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";


const CommentsArea = () => {
    const DEFAULT_ROWS = 1;
    const EXPANDED_ROWS = 20;
    const DEFAULT_WIDTH = "15%";
    const EXPANDED_WIDTH = "60%";
    const [rows, setRows] = useState(DEFAULT_ROWS);
    const [width, setWidth] = useState(DEFAULT_WIDTH);
    const textareaRef = useRef<HTMLDivElement>(null)
    const targetRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (rows === EXPANDED_ROWS && width === EXPANDED_WIDTH) {
            targetRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [rows, width]);


    const onTextFieldFocus = () => {
        setRows(EXPANDED_ROWS);
        setWidth(EXPANDED_WIDTH);
    }

    const onTextFieldBlur = () => {
        setRows(DEFAULT_ROWS);
        setWidth(DEFAULT_WIDTH);
    }

    return (
        <div
            style={{ width: width, margin: "auto", marginBottom: "50px" }}>
            <TextField
                ref={textareaRef}
                onFocus={onTextFieldFocus}
                onBlur={onTextFieldBlur}
                placeholder="Add comments..."
                multiline
                fullWidth
                rows={rows}
            />
            <div ref={targetRef}></div>
        </div>
    );
};

export default CommentsArea;
