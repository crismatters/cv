import React from 'react';
import { Paper, Grid } from '@material-ui/core';

const LinkedInBadge = ({ user, theme }) => {
    return (
        <Grid component={Paper}
            class="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="medium"
            data-theme={theme}
            data-type="HORIZONTAL"
            data-vanity={user}
            data-version="v1"
            xs={12}
            sm={3}
            md={3}
            style={{ display: "table-cell", padding: "1rem" }}
        >
        </Grid>
    );
}

export default LinkedInBadge;