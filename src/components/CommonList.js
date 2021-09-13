import React from 'react';
import { Paper, Grid, Typography, Link } from '@material-ui/core';
import { yellow } from "../assets/colors";

const CommonList = (props) => {
    return (
        <>
            <Grid container component={Paper} style={{ padding: "1rem", marginBottom: "1rem" }}>
                <Grid item xs={12}>
                    <Typography variant="h5" color="primary">{props.icon} {props.title}</Typography>
                </Grid>
                <Grid item xs={12} style={{ alignContent: "center" }}>
                    {props.items.map(item => (
                        <>
                            <Paper style={{ padding: "20px 10px", maxWidth: "90%", marginBottom: "1rem", display: "block", marginLeft: "auto", marginRight: "auto" }}>
                                <Grid container wrap="nowrap" spacing={2}>
                                    <Grid justifyContent="left" item xs zeroMinWidth>
                                        <Typography style={{ margin: 0, textAlign: "left" }} color="primary"><b>{item.title}</b></Typography>
                                        <Link href={item.authorityWebSite} target="_blank">
                                            <Typography style={{ margin: 0, textAlign: "left" }} color="secondary">{item.authority}</Typography>
                                        </Link>
                                        <p>{item.authorityMeta}</p>
                                        <div>
                                            <p>
                                                {item.description}
                                            </p>
                                        </div>
                                        <p style={{ textAlign: "left", color: (localStorage.getItem("theme") === "dark" ? yellow[200] : yellow[700]) }}>{item.meta}</p>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </>
                    ))}
                </Grid>
            </Grid>
        </>
    );

}
export default CommonList;