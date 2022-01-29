import React from 'react';
import { Grid, Typography, Chip, Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import { ExpandMoreOutlined } from '@material-ui/icons';
import { blue, red, yellow, green, gray } from "../assets/colors";

const TagsList = (props) => {
    const getRandomColor = () => {
        const opacity = localStorage.getItem("theme") === "dark" ? 200 : 700;
        const randomNumber = Math.floor(Math.random() * (5 - 1) + 1);
        var color;
        switch (randomNumber) {
            case 1:
                color = blue;
                break;
            case 2:
                color = red;
                break;
            case 3:
                color = yellow;
                break;
            case 4:
                color = green;
                break;
            default:
                color = red;
                break;
        }
        return color[opacity];
    }

    return (
        <Accordion defaultExpanded={true} className='common-list-accordion'>
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                <Grid item xs={12}>
                    <Typography variant="h5" color="primary">{props.icon} {props.title}</Typography>
                </Grid>
            </AccordionSummary>
            <AccordionDetails style={{ maxHeight: '500px', overflow: 'auto' }}>
                <Grid item xs={12} sm={3}>
                    {props.items.map(item => (
                        <Chip
                            label={item}
                            style={{
                                margin: "0.2rem",
                                backgroundColor: getRandomColor(),
                                color: localStorage.getItem("theme") === "dark" ? gray[800] : "#fff"
                            }}
                        />
                    ))}
                </Grid>
            </AccordionDetails>
        </Accordion>
    );
}

export default TagsList;