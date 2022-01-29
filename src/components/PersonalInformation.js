import React from 'react';
import { Link, Grid, Paper, Typography, ListItem } from '@material-ui/core';

const PersonalInformation = (props) => {

    return (
        <>
            <Grid container component={Paper} style={{ padding: "1rem", marginBottom: "1rem", marginRight: "10%", marginLeft: "10%", maxWidth: "80%", marginTop: "10px" }}>
                <Grid item xs={12} sm={3}>
                    <img src={props.image} alt="Cristobal Diaz"
                        style={{ borderRadius: "50%", maxHeight: "10rem", maxWidth: "10rem", boxShadow: "2px 2px 15px #202020", display: "block", margin: "auto" }} />
                </Grid>
                <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
                    <Typography color="primary" variant="h5"><b>{props.name}</b></Typography>
                    <Typography>{props.title}</Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                    {props.contacts.map(contact => (
                        <Link target="_blank" href={
                            contact.mail ? `mailto:${contact.value}` :
                                contact.location ? `https://www.google.com/maps?q=${contact.value}` :
                                    `https://${contact.value}`
                        }>
                            <ListItem>
                                {contact.icon}
                                &nbsp;{contact.value}
                            </ListItem>
                        </Link>
                    ))}
                </Grid>
            </Grid>
        </>
    );
}

export default PersonalInformation;