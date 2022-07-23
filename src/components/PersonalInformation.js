import React from 'react';
import { Link, Grid, Paper, Typography, ListItem } from '@material-ui/core';
//import LinkedInBadge from './LinkedInBadge';

const PersonalInformation = (props) => {

    return (
        <>
            <Grid container component={Paper} className='personal-info-container'>
                <Grid item xs={12} sm={3}>
                    <img src={props.image} alt="Cristobal Diaz" className='avatar-image' />
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
                {
                    /*<Grid item xs={12} sm={3} style={{ display: "table" }}>
                        <LinkedInBadge
                            user="crismatters"
                            theme="light"
                        />
                        </Grid>*/
                }
            </Grid>
        </>
    );
}

export default PersonalInformation;