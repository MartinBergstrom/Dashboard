import { TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { getComment, updateCommentText } from "../service/NxtwatchService";
import { useMutation, useQuery } from "react-query";
import { CommentModel } from "../model/CommentModel";

const CommentsArea = () => {
    const DEFAULT_ROWS = 2;
    const EXPANDED_ROWS = 20;
    const DEFAULT_WIDTH = "25%";
    const EXPANDED_WIDTH = "60%";
    const DEFAULT_OPACITY = "0.5";
    const FULL_OPACITY = "1";
    const [rows, setRows] = useState(DEFAULT_ROWS);
    const [width, setWidth] = useState(DEFAULT_WIDTH);
    const [opacity, setOpacity] = useState(DEFAULT_OPACITY);
    const [currentText, setCurrentText] = useState<string>("");
    const textareaRef = useRef<HTMLDivElement>(null)
    const targetRef = useRef<HTMLDivElement>(null);

    const { isLoading } = useQuery<CommentModel>(
        "watchescomment",
        getComment, {
        onSuccess: (data) => {
            setCurrentText(data.text);
        }
    }
    );

    const { mutate: mutatePut } = useMutation(
        updateCommentText,
        {
            onSuccess: (data) => {
                console.log("Success on update comment text. Data: ", data);
            },
            onError: () => {
                alert("there was an error");
            }
        }
    );

    useEffect(() => {
        if (rows === EXPANDED_ROWS && width === EXPANDED_WIDTH) {
            targetRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [rows, width]);


    const onTextFieldFocus = () => {
        setRows(EXPANDED_ROWS);
        setWidth(EXPANDED_WIDTH);
        setOpacity(FULL_OPACITY)
    }

    const onTextFieldBlur = () => {
        setRows(DEFAULT_ROWS);
        setWidth(DEFAULT_WIDTH);
        setOpacity(DEFAULT_OPACITY);
        mutatePut(currentText);
    }

    const updateText = (newText: string) => {
        setCurrentText(newText);
    }

    if (isLoading) {
        return (<div>Loading comments..</div>)
    }

    return (
        <div
            style={{ width: width, margin: "auto", marginBottom: "50px", overflow: "none", opacity: opacity }}>
            <TextField
                ref={textareaRef}
                onFocus={onTextFieldFocus}
                onBlur={onTextFieldBlur}
                placeholder="Add comments..."
                multiline
                fullWidth
                value={currentText}
                onChange={(e) => updateText(e.target.value)}
                rows={rows}
            />
            <div ref={targetRef}></div>
        </div>
    );
};

export default CommentsArea;
