import React from "react";
import CommonList from "./components/CommonList";
import { Brightness4, Brightness7, PictureAsPdf } from '@material-ui/icons';
import { Button, Chip, Paper, Grid, Link } from '@material-ui/core';
import PersonalInformation from "./components/PersonalInformation";
import { personalData, sections } from "./Data";
import TagsList from "./components/TagsList";
import { gray } from "./assets/colors";
import { printDoc } from "./utils/generatePDF";
const { Octokit } = require("@octokit/core");

const Main = ({ onToggleDark, currentTheme }) => (
    <>
        <PrintButton currentTheme={currentTheme} />
        <ToggleButton currentTheme={currentTheme} onToggleDark={onToggleDark} />
        <PersonalInformation
            {...personalData}
        />
        <CommonList
            {...sections[0]}
        />
        <CommonList
            {...sections[1]}
        />
        <Grid container>
            <Grid item xs={12} sm={6}>
                <CommonList
                    {...sections[2]}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <CommonList
                    {...sections[3]}
                />
            </Grid>
        </Grid>
        <Grid container style={{ marginBottom: '70px' }}>
            <Grid item xs={12} sm={6}>
                <CommonList
                    {...sections[4]}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TagsList
                    {...sections[5]}
                />
            </Grid>
        </Grid>
        <UpdatedFooter />
    </>
);

export default Main;

const ToggleButton = ({ currentTheme, onToggleDark }) => {
    return (
        <Chip
            color="primary"
            className="float-button-2"
            id="dark-toggle-btn"
            component={Paper}
            icon={currentTheme.palette.type === "dark" ?
                <Brightness7 style={{ color: gray[800] }} /> :
                <Brightness4 />
            }
            label={
                <Button
                    onClick={onToggleDark}
                    style={{ color: currentTheme.palette.type === "dark" ? gray[800] : "#fff" }}
                >
                    Toggle Theme
                </Button>
            }
        />
    )
}

const PrintButton = ({ currentTheme }) => {
    const printPdf = () => {
        printDoc({ personalData, sections });
    }

    return (
        <Chip
            color="secondary"
            className="float-button"
            id="print-cv-btn"
            component={Paper}
            icon={<PictureAsPdf style={{ color: currentTheme.palette.type === "dark" ? gray[800] : "#fff" }} />}
            label={<Button onClick={printPdf} style={{ color: currentTheme.palette.type === "dark" ? gray[800] : "#fff" }}>Save as PDF</Button>}
        />
    )
}

const UpdatedFooter = () => {
    const [version, setVersion] = React.useState("");
    const getVersion = async () => {
        const token = process.env.REACT_APP_GITHUB_TOKEN;
        const githubAPI = "https://api.github.com";;
        const octokit = new Octokit({ auth: token });
        const owner = "crismatters";
        const repo = "cv";
        try {
            var tagsURI = `${githubAPI}/repos/${owner}/${repo}/commits`;
            const response = await octokit.request(`  /* width: 100%; */
            GET ${tagsURI}`);
            setVersion(response.data[0].commit.committer.date);
        } catch (e) {
            console.log(e);
            setVersion((new Date().toISOString()))
        }

    }
    React.useEffect(() => {
        getVersion();
    }, [])
    return (
        <Grid component={Paper} id="version-footer">
            <b>This is my most recent CV version </b>
            and it was updated at {version.split("T")[0]}.
            <br />
            See how this site was created&nbsp;
            <Link target="_blank" href="https://crismatters.medium.com/creating-a-simple-cv-template-with-reactjs-fed81d5b1459">
                here
            </Link>.
            <br />
            <i>Crist??bal D??az</i>
        </Grid>
    )
}