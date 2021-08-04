import React from 'react';
import CV from 'react-cv';
import './index.css';
import { PictureAsPdf } from '@material-ui/icons';
import { Button, Chip, Paper } from '@material-ui/core';

const App = () => {
  return (
    <>
      <PrintButton />
      <div id="cv-csdiaz">
        <CV
          personalData={{
            image: 'https://drive.google.com/uc?export=view&id=1W0dbFCwaU0_wa6_5CmSYlkhTVv5B5dJr',
            name: 'Cristóbal Silva Díaz',
            title: 'Systems Engineer',
            contacts: [
              { type: 'email', value: 'crismatters@outlook.com' },
              { type: 'email', value: 'crismatters.sls@gmail.com' },
              { type: 'location', value: 'Aguascalientes, Mexico' },
              { type: 'linkedin', value: 'linkedin.com/in/crismatters' },
              { type: 'github', value: 'github.com/crismatters' }
            ]
          }}
          sections={[
            {
              type: 'experiences-list',
              title: 'Experiences',
              icon: 'archive',
              items: [
                {
                  title: 'Technical Solutions Engineer',
                  company: 'Google',
                  description: 'Google Cloud Platform Solutions Engineer focused on Infrastructure as a Service products.',
                  companyWebSite: 'https://about.google/',
                  datesBetween: '2021.07 - Present',
                  //  descriptionTags: ["Google Cloud"]
                },
                {
                  title: 'DevOps Engineer',
                  company: 'Softtek',
                  description: `DevOps Engineer focused in configuration management automation
                and containerization of applications. In the area I also gave support to
                web applications development using MongoDB, React JS, Node JS and
                Express JS. Some tools used are RedHat Ansible, SaltStack, Chef Infra, Kubernetes and Gitlab CI.`,
                  companyWebSite: 'https://www.softtek.com/',
                  companyMeta: '',
                  datesBetween: '2019.12 - 2021.07',
                  //   descriptionTags: ["Ansible", "SaltStack", "Linux", "SCM", "GitlabCI", "Kubernetes", "Azure", "NodeJS", "MongoDB", "ReactJS", "SAFe DevOps"]
                },
              ]
            },
            {
              type: 'common-list',
              title: 'Education',
              icon: 'graduation',
              items: [
                {
                  title: 'Information Sytems Engineering',
                  authority: 'Universidad Politécnica de Aguascalientes',
                  authorityWebSite: 'https://upa.edu.mx/',
                  rightSide: '2016.08 - 2020.04',
                  description: `Systems Engineering specialized in networking. 
              Some knowledge acquired: web development, services and 
              users administration using Linux/Unix systems and Cisco
              devices configuration.`
                },
                {
                  title: 'App Development Technician',
                  authority: 'CECyTEA Ferrocarriles',
                  authorityWebSite: 'https://cecytea.edu.mx/plantel-ferrocarriles/',
                  rightSide: '2013.08 - 2016.06',
                  description: `Technical career oriented to applications development and
              networks design.`
                },
              ]
            },
            {
              type: 'common-list',
              title: 'Certificates / Courses',
              description: '',
              icon: 'book',
              items: [
                {
                  title: 'A Beginner\'s Guide to Linux Kernel Development (LFD103)',
                  authority: 'The Linux Foundation',
                  authorityWebSite: 'https://www.linuxfoundation.org/',
                  rightSide: '2021.05'
                },
                {
                  title: 'Cyber Security Foundation Professional Certificate (CSFPC)',
                  authority: 'CertiProf',
                  authorityWebSite: 'https://certiprof.com/',
                  rightSide: '2021.05'
                },
                {
                  title: 'Scrum Foundation Professional Certificate (SFPC)',
                  authority: 'CertiProf',
                  authorityWebSite: 'https://certiprof.com/',
                  rightSide: '2021.05'
                },
                {
                  title: 'Certified Kubernetes Administrator',
                  authority: 'Linux Academy',
                  authorityWebSite: 'https://app.linuxacademy.com',
                  rightSide: '2020.11'
                },
                {
                  title: 'RedHat Certified Specialist in Ansible Automation',
                  authority: 'Linux Academy',
                  authorityWebSite: 'https://app.linuxacademy.com',
                  rightSide: '2020.08'
                },
                {
                  title: 'RedHat Certified Engineer',
                  authority: 'Linux Academy',
                  authorityWebSite: 'https://app.linuxacademy.com',
                  rightSide: '2020.07'
                },
                {
                  title: 'SaltStack Certified Engineer',
                  authority: 'Linux Academy',
                  authorityWebSite: 'https://app.linuxacademy.com',
                  rightSide: '2020.02'
                },
                {
                  title: 'Partner: NDG Linux Unhatched',
                  authority: 'Cisco Networking Academy',
                  authorityWebSite: 'https://netacad.com',
                  rightSide: '2019.08'
                },
                {
                  title: 'CCNA Routing & Switching',
                  authority: 'Cisco Networking Academy',
                  authorityWebSite: 'https://netacad.com',
                  rightSide: '2019.06'
                },
                {
                  title: 'Introduction to Cibersecurity',
                  authority: 'Cisco Networking Academy',
                  authorityWebSite: 'https://netacad.com',
                  rightSide: '2019.05'
                },
              ]
            },
            {
              type: 'common-list',
              title: 'Languages',
              icon: 'language',
              items: [
                {
                  authority: 'Spanish',
                  authorityMeta: 'Native'
                },
                {
                  authority: 'English',
                  authorityMeta: 'Fluent'
                },
                {
                  authority: 'German',
                  authorityMeta: 'Beginner'
                },
              ]
            },
            {
              type: 'tag-list',
              title: 'Skills Proficiency',
              icon: 'rocket',
              items: [
                "Linux", "Windows", "Wireshark", "NMap", "MySQL", "PostgreSQL", "MongoDB", "JavaScript",
                "RedHat Ansible", "SaltStack", "Kubernetes", "GitlabCI", "Docker", "Scrum", "Google Cloud", "Azure",
                "Jira", "ReactJS", "Agile", "Scrum", "SAFe DevOps"
              ]
            },
          ]}
          branding={false} // or false to hide it.
        />

      </div>
    </>
  )
}

export default App;

const PrintButton = () => {
  const printPdf = () => {
    document.getElementById("print-cv-btn").style.visibility = "hidden";
    window.print();
    setTimeout(() => document.getElementById("print-cv-btn").style.visibility = "visible", 1000);
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
