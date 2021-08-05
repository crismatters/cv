import React from 'react';
import CV from 'react-cv';
import './index.css';
import { PictureAsPdf } from '@material-ui/icons';
import { Button, Chip, Paper } from '@material-ui/core';
import { personalData, sections } from "./Data";
const { Octokit } = require("@octokit/core");


const App = () => {
  return (
    <>
      <PrintButton />
      <div id="cv-csdiaz">
        <CV
          personalData={personalData}
          sections={sections}
          branding={false} // or false to hide it.
        />
      </div>
      <UpdatedFooter />
    </>
  )
}

export default App;

const PrintButton = () => {
  const printPdf = () => {
    document.getElementById("print-cv-btn").style.visibility = "hidden";
    document.getElementById("version-footer").style.visibility = "hidden";
    window.print();
    setTimeout(() => {
      document.getElementById("print-cv-btn").style.visibility = "visible";
      document.getElementById("version-footer").style.visibility = "visible";
    }, 1000);
  }

  return (
    <Chip
      className="float-button"
      id="print-cv-btn"
      component={Paper}
      icon={<PictureAsPdf style={{ color: "#fff" }} />}
      label={<Button onClick={printPdf} style={{ color: "#fff" }}>Save as PDF</Button>}
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
      const response = await octokit.request(`GET ${tagsURI}`);
      setVersion(response.data[0].commit.committer.date);
    } catch (e) {
      console.log(e);
      setVersion("-")
    }

  }
  React.useEffect(() => {
    getVersion();
  }, [])
  return (
    <footer class="footer" id="version-footer">
      <div class="content has-text-centered">
        <p>
          <strong>This is my most recent CV version </strong>
          and it was updated at {version.split("T")[0]}.
        </p>
      </div>
    </footer>
  )
}