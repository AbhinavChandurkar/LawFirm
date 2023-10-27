import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import styles from "./Accordian.module.css";

export default function BasicAccordion(props) {
  const { data } = props;

  const [expanded, setExpanded] = useState(null);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <div className={styles.accordainContainer}>
      {data.map((item, index) => (
        <Accordion
          key={index}
          className={styles.accordian}
          sx={{ width: "100%" , border: "none", margin: 0,boxShadow:0}}
          expanded={expanded === `panel${index + 1}`}
          onChange={handleAccordionChange(`panel${index + 1}`)}
        >
          <AccordionSummary
            expandIcon={<AddCircleIcon style={{ color: "#E3B748" }} />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
            sx={{ backgroundColor: "#1D1D1D" }}
          >
            <Typography
              className={styles.accordianHeading}
              sx={{ color: "white" }}
            >
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{ backgroundColor: "#1D1D1D", color: "white" }}
          >
            <Typography className={styles.accordianContent}>{item.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
