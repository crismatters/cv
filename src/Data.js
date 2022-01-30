import { LinkedIn, Mail, GitHub, LocationCity, School, Book, Language, Cloud, Archive, TrendingUp } from "@material-ui/icons";

export const personalData = {
    image: 'https://drive.google.com/uc?export=view&id=1oK6Y6IXb6U0ST_5IJomNCEG--9Cla7FN',
    name: 'Cristóbal Silva Díaz',
    title: 'Systems Engineer',
    contacts: [
        { icon: <Mail color="primary" />, value: 'crismatters@outlook.com', mail: true },
        { icon: <Mail color="primary" />, value: 'crismatters.sls@gmail.com', mail: true },
        { icon: <LocationCity color="primary" />, value: 'Aguascalientes, Mexico', location: true },
        { icon: <LinkedIn color="primary" />, value: 'linkedin.com/in/crismatters' },
        { icon: <GitHub color="primary" />, value: 'github.com/crismatters' },
        { icon: <Language color="primary" />, value: 'crismatters.medium.com' }
    ]
};

const experiencesList = {
    type: 'common-list',
    title: 'Experiences',
    icon: <Archive />,
    items: [
        {
            title: 'Technical Solutions Engineer',
            authority: 'Google',
            description: `Advanced Support Engineer, with specialization on Infrastructure as a Service Products at Google Cloud Platform.
            Hands on experience with virtualization, security and perimeter control services. Some supported products are Compute Engine, 
            Kubernetes Engine, VPC Service Controls, IAM.`,
            authorityWebSite: 'https://about.google/',
            meta: '2021.07 - Present',
        },
        {
            title: 'DevOps Engineer',
            authority: 'Softtek',
            description: `DevOps Engineer focused in configuration management automation
      and containerization of applications. In the area I also gave support to
      web applications development using MongoDB, React JS, Node JS and
      Express JS. Some tools used are RedHat Ansible, SaltStack, Chef Infra, Kubernetes and Gitlab CI.`,
            authorityWebSite: 'https://www.softtek.com/',
            meta: '2019.12 - 2021.07',
        },
    ]
};

const educationList = {
    title: 'Education',
    type: "common-list",
    icon: <School color="primary" />,
    items: [
        {
            title: 'Information Sytems Engineering',
            authority: 'Universidad Politécnica de Aguascalientes',
            authorityWebSite: 'https://upa.edu.mx/',
            meta: '2016.08 - 2020.04',
            description: `Systems Engineering specialized in networking. 
    Some knowledge acquired: web development, services and 
    users administration using Linux/Unix systems and Cisco
    devices configuration.`
        },
        {
            title: 'App Development Technician',
            authority: 'CECyTEA Ferrocarriles',
            authorityWebSite: 'https://cecytea.edu.mx/plantel-ferrocarriles/',
            meta: '2013.08 - 2016.06',
            description: `Technical career oriented to applications development and
    networks design.`
        },
    ]
};

const certificatesList = {
    type: 'common-list',
    title: 'Certificates',
    description: '',
    icon: <Book />,
    items: [
        {
            title: 'Associate Cloud Engineer',
            authority: 'Google Cloud',
            authorityWebSite: 'https://www.credential.net/94244ca3-ccd5-45ba-afd1-c8179779888e?key=4a8b6fba59ad0bea41f8d47d5253d4d0494e4aecd4bf3e0386a7581d7949cc08&record_view=true',
            meta: '2022.01 - 2024.01'
        },
        {
            title: 'A Beginner\'s Guide to Linux Kernel Development (LFD103)',
            authority: 'The Linux Foundation',
            authorityWebSite: 'https://www.credly.com/badges/72edb0d8-7590-40c2-9936-0c92b622bf4b',
            meta: '2021.05'
        },
        {
            title: 'Cyber Security Foundation Professional Certificate (CSFPC)',
            authority: 'CertiProf',
            authorityWebSite: 'https://www.credly.com/badges/f867dcc7-ac36-4c3e-8232-9743785f4878',
            meta: '2021.05'
        },
        {
            title: 'Scrum Foundation Professional Certificate (SFPC)',
            authority: 'CertiProf',
            authorityWebSite: 'https://www.credly.com/badges/93926aab-d28f-4547-86dc-a7e18af0da78',
            meta: '2021.05'
        },
    ]
};

const coursesList = {
    type: 'common-list',
    title: 'Courses',
    description: '',
    icon: <TrendingUp />,
    items: [
        {
            title: 'Architecting with Google Kubernetes Engine: Foundations',
            authority: 'Coursera',
            authorityWebSite: 'https://drive.google.com/file/d/1k7lgzDvD_F1Gbc81X7KSRBVUT3U-k-WA/view?usp=sharing',
            meta: '2021.08'
        },
        {
            title: 'Reliable Google Cloud Infrastructure: Design and Process',
            authority: 'Coursera',
            authorityWebSite: 'https://drive.google.com/file/d/1gxYXaNQM4dvaiEW9mDpm9vPM4fmhWvtf/view?usp=sharing',
            meta: '2021.07'
        },
        {
            title: 'Elastic Google Cloud Infrastructure: Scaling and Automationn',
            authority: 'Coursera',
            authorityWebSite: 'https://drive.google.com/file/d/1ddwszSWqwgOdFp2aRxwZnNMJuFoi3kkq/view?usp=sharing',
            meta: '2021.07'
        },
        {
            title: 'Essential Google Cloud Infrastructure: Core Services',
            authority: 'Coursera',
            authorityWebSite: 'https://drive.google.com/file/d/1csCAfDpZKWxNL1hs2x6kCr-w1fXWPoxM/view?usp=sharing',
            meta: '2021.07'
        },
        {
            title: 'Certified Kubernetes Administrator',
            authority: 'Linux Academy',
            authorityWebSite: 'https://drive.google.com/file/d/13uUfvzGjuABAfmXzcnv1jYumwopj-e12/view?usp=sharing',
            meta: '2020.11'
        },
        {
            title: 'RedHat Certified Specialist in Ansible Automation',
            authority: 'Linux Academy',
            authorityWebSite: 'https://drive.google.com/file/d/19fZdkkyBALFPA7R_TGfmLEvKRKnpVRuI/view?usp=sharing',
            meta: '2020.08'
        },
        {
            title: 'RedHat Certified Engineer',
            authority: 'Linux Academy',
            authorityWebSite: 'https://drive.google.com/file/d/1Mr-osApoMnZjMBpBx34z--u3zAS6yUhJ/view?usp=sharing',
            meta: '2020.07'
        },
        {
            title: 'SaltStack Certified Engineer',
            authority: 'Linux Academy',
            authorityWebSite: 'https://drive.google.com/file/d/1-G7L6h_CrGpiCwgAbmLTd0hU12RgBOvg/view?usp=sharing',
            meta: '2020.02'
        },
    ]
}

const languagesList = {
    type: 'common-list',
    title: 'Languages',
    icon: <Language />,
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
};

const skillsList = {
    title: 'Skills Proficiency',
    type: "tags-list",
    icon: <Cloud />,
    items: [
        "Linux", "Windows", "Wireshark", "NMap", "MySQL", "PostgreSQL", "MongoDB", "JavaScript",
        "RedHat Ansible", "SaltStack", "Kubernetes", "GitlabCI", "Docker", "Google Cloud", "Azure",
        "Jira", "ReactJS", "Agile", "Scrum", "SAFe DevOps"
    ]
};

export const sections = [experiencesList, educationList, certificatesList, coursesList, languagesList, skillsList];
