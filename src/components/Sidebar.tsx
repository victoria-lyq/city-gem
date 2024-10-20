import React, { useState } from "react";
import { City, CityData } from "./type";
import "../styles/Sidebar.css";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface SidebarProps {
  cityData: CityData[];
  selectedCity: City;
  setSelectedCity: (city: City) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  cityData,
  selectedCity,
  setSelectedCity,
}) => {
  const [showList, setShowList] = useState<boolean>(false);

  return (
    <div className={`sidebar-show ${!showList ? "sidebar-collapsed" : ""}`}>
      <IconButton onClick={() => setShowList(!showList)} className="icon-btn">
        {showList ? <ArrowForwardIosIcon /> : <ArrowBackIosNewIcon />}
      </IconButton>
      {showList && (
        <FormControl className="radio-group-container">
          <FormLabel id="radio-buttons-group-label" className="form-label">
            Select City
          </FormLabel>
          <RadioGroup
            aria-labelledby="radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            {cityData.map((city) => (
              <FormControlLabel
                key={city.id}
                value={city.cityName}
                control={<Radio />}
                label={city.cityName}
                className="radio-item"
                onChange={() => setSelectedCity(city.cityName)}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    </div>
  );
};

export default Sidebar;
