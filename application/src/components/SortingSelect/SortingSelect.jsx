import React from "react";
import { InputLabel, Select, MenuItem } from "@material-ui/core";

function SortingSelect(props) {
  return (
    <React.Fragment>
      <Select labelId='label' id='select'>
        <MenuItem >Date of growth</MenuItem>
        <MenuItem >Date of decline</MenuItem>
      </Select>
    </React.Fragment>
  );
}

export default SortingSelect;
