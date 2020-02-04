import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import "./Calculator.scss";

const CssTextField = withStyles({
  root: {
    "& .MuiInputBase-root": {
      color: "#fff"
    },
    "& .MuiFormLabel-root": {
      color: "rgba(255, 255, 255, 0.7)"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(255, 255, 255, 0.7)"
      },
      "&:hover fieldset": {
        borderColor: "rgba(255, 255, 255)"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#90caf9"
      },
      "& .MuiFormLabel-root..Mui-focused": {
        color: "#90caf9"
      }
    }
  }
})(TextField);

const DistanceInput = ({ distance, onDistanceChange }) => {
  const handleChange = e => {
    onDistanceChange({ length: e.target.value, scale: distance.scale });
  };

  return (
    <CssTextField
      onChange={handleChange}
      value={distance.length}
      label={distance.scale}
      variant="outlined"
    />
  );
};

const DistanceCalculator = props => {
  const [distance, setDistance] = useState({ length: "", scale: "km" });

  const convertToKm = length => {
    return {
      length: distance.length === "" ? "" : distance.length * 1.60934,
      scale: "km"
    };
  };

  const convertToMi = length => {
    return {
      length: distance.length === "" ? "" : distance.length * 0.621371,
      scale: "mi"
    };
  };

  const onDistanceChange = distance => {
    setDistance(distance);
  };

  return (
    <div className="content">
      <h2>Distance converter</h2>
      <div className="converter">
        <div className="converter-input">
          <DistanceInput
            distance={
              distance.scale === "km" ? distance : convertToKm(distance.length)
            }
            scale="km"
            onDistanceChange={onDistanceChange}
          />
        </div>
        <div className="converter-input">
          <DistanceInput
            distance={
              distance.scale === "mi" ? distance : convertToMi(distance.length)
            }
            scale="mi"
            onDistanceChange={onDistanceChange}
          />
        </div>
      </div>
    </div>
  );
};

export default DistanceCalculator;
