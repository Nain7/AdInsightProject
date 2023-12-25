import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom"; 
import "./CreateAd.css";

const CreateAd = () => {
  const [textAdChecked, setTextAdChecked] = useState(false);
  const [mediaAdChecked, setMediaAdChecked] = useState(false);

  const navigate = useNavigate();

  const handleTextAdChange = () => {
    setTextAdChecked(!textAdChecked);
  };

  const handleMediaAdChange = () => {
    setMediaAdChecked(!mediaAdChecked);
  };

  const handleNextClick = () => {
    if (textAdChecked) {
      navigate("/TextAd");
    } else if (mediaAdChecked) {
      navigate("/MediaAd");
    }
  };

  return (
    <div className="createad-container">
      <h1 className="createad-header"> Create Ad</h1>

      <div className="createad-content">
        <div className="flex-container">
          <div className="flex-item">
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                action={
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={textAdChecked}
                        onChange={handleTextAdChange}
                      />
                    }
                  />
                }
              />
              <Link to="/TextAd"></Link>

              <img
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSjyisXRFlJmcRrtlcfS6y3N4ESNoB9KPGUghLBEUo5PkI9wc9Z"
                alt="Text Ad Image"
                style={{ width: "100%", height: "auto" }}
              />
              <CardContent style={{ textAlign: "center" }}>
                <Typography variant="body2" color="text.secondary">
                  <strong>Create</strong>
                </Typography>
                <Typography variant="h6" component="div" fontWeight="bold">
                  Text Ad
                </Typography>
              </CardContent>
            </Card>
          </div>

          {/* Media Ad Card */}
          <div className="flex-item">
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                action={
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={mediaAdChecked}
                        onChange={handleMediaAdChange}
                      />
                    }
                  />
                }
              />
              <Link to="/MediaAd"> </Link>

              <img
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSjyisXRFlJmcRrtlcfS6y3N4ESNoB9KPGUghLBEUo5PkI9wc9Z"
                alt="Media Ad Image"
                style={{ width: "100%", height: "auto" }}
              />
              <CardContent style={{ textAlign: "center" }}>
                <Typography variant="body2" color="text.secondary">
                  <strong>Create</strong>
                </Typography>
                <Typography variant="h6" component="div" fontWeight="bold">
                  Media Ad
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Button
        className="next-button"
        variant="contained"
        color="primary"
        onClick={handleNextClick}
      >
        Next
      </Button>
    </div>
  );
};

export default CreateAd;
