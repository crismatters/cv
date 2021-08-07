import React from 'react';
import { Grid, Paper, Typography, Chip } from '@material-ui/core';

const TagsList = (props) => {

    return (
        <>
            <Grid container component={Paper} style={{ padding: "1rem", marginBottom: "1rem" }}>
                <Grid item xs={12}>
                    <Typography variant="h5" color="primary">{props.icon} {props.title}</Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                    {props.items.map(item => (
                        <Chip label={item} color="secondary" style={{ margin: "0.2rem" }} />
                    ))}
                </Grid>
            </Grid>
        </>
    );
}

export default TagsList;