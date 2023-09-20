import {
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Icon,
} from "@mui/material";
import { ChangeEvent, useState, KeyboardEvent } from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import TableRowsIcon from "@mui/icons-material/TableRows";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import "./Filter.css";

export enum ViewModeType {
  LARGE = "large-view-mode",
  SMALL = "small-view-mode",
  LIST = "list-view-mode",
}

interface Filterprops {
  onSearch: (searchTerm: string) => void;
  onViewChange: (vewChange: ViewModeType) => void;
}

const Filter = (props: Filterprops) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isAdvancedOpen, setIsAdvancedOpen] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const toggleAdvanced = () => {
    setIsAdvancedOpen(!isAdvancedOpen);
  };

  const handleSearch = () => {
    props.onSearch(searchTerm);
    setSearchTerm("");
  };

  return (
    <>
      <div className="search-bar">
        <TextField
          size="small"
          style={{
            width: "20%",
            zIndex: 1,
          }}
          placeholder="Search..."
          variant="outlined"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyUp={handleKeyPress}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSearch}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: 1, marginLeft: "8%" }}>
          <Button
            variant="text"
            size="small"
            onClick={toggleAdvanced}
            style={{
              marginTop: "5px",
              zIndex: 1,
            }}
          >
            Advanced filters{" "}
            {!isAdvancedOpen ? (
              <KeyboardDoubleArrowDownIcon
                style={{
                  marginBottom: "2px",
                }}
              />
            ) : (
              <KeyboardDoubleArrowUpIcon
                style={{
                  marginBottom: "2px",
                }}
              />
            )}{" "}
          </Button>
        </div>
        <div style={{ marginRight: "2%" }}>
          <Icon
            color="primary"
            className="icon-button"
            style={{
              verticalAlign: "middle",
              cursor: "pointer",
              width: "30px",
              height: "30px",
            }}
            onClick={() => props.onViewChange(ViewModeType.LIST)}
          >
            <TableRowsIcon sx={{ fontSize: "24px" }} />
          </Icon>
          <Icon
            color="primary"
            className="icon-button"
            style={{
              verticalAlign: "middle",
              cursor: "pointer",
              width: "30px",
              height: "30px",
            }}
            onClick={() => props.onViewChange(ViewModeType.LARGE)}
          >
            <ViewModuleIcon sx={{ fontSize: "28px" }} />
          </Icon>
          <Icon
            color="primary"
            className="icon-button"
            style={{
              verticalAlign: "middle",
              cursor: "pointer",
              width: "30px",
              height: "30px",
            }}
            onClick={() => props.onViewChange(ViewModeType.SMALL)}
          >
            <ViewCompactIcon sx={{ fontSize: "29px" }} />
          </Icon>
        </div>
      </div>
      {isAdvancedOpen ? (
        <div className={`advanced-div`}>
          <h1>OPEN</h1>
        </div>
      ) : null}
    </>
  );
};

export default Filter;
