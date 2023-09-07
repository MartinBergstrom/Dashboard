import { TextField, InputAdornment, IconButton, Button } from "@mui/material";
import { ChangeEvent, useState, KeyboardEvent } from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import "./Filter.css";

interface Filterprops {
  onSearch: (searchTerm: string) => void;
}

const Filter = (props: Filterprops) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
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
      <Button
        variant="text"
        size="small"
        style={{
          marginTop: "5px",
        }}
      >
        Advanced filters{" "}
        <KeyboardDoubleArrowDownIcon
          style={{
            marginBottom: "2px",
          }}
        />{" "}
      </Button>
    </>
  );
};

export default Filter;
