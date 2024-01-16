import GoogleCloudImage from '../images/brands/gcp_gray.webp';
import SofttekImage from '../images/brands/softtek_gray.webp';


export const personalData = {
    image: process.env.PUBLIC_URL + '/photo.jpg',
    name: 'Cristóbal Silva Díaz',
    title: 'Systems Engineer',
    contacts: [
        { icon: "city", value: 'Aguascalientes, Mexico', location: true },
        { icon: "linkedin", value: 'linkedin.com/in/crismatters' },
        { icon: "github", value: 'github.com/crismatters' },
        { icon: "language", value: 'crismatters.medium.com' }
    ]
};

const experiencesList = {
    type: 'common-list',
    title: 'Experience',
    icon: "archive",
    items: [
        {
            title: 'Technical Solutions Engineer - SME',
            authority: 'Google',
            description: `<ul/>
                <li> Premium Google Cloud products support, focused in IaaS and Security services, such as Kubernetes Engine, Compute Engine,
                IAM, VPC SC, Resource Manager. </li>
                <li> I am also part of the SME workforce, providing support to my colleagues in critical and complex cases. </li>
                <li> As part of the SME role, I analyze common problems to improve the supportability of our products by improving documentation and suggesting
                changes for the GCP products. </li>
            </ul>`,
            authorityWebSite: 'https://about.google/',
            meta: '2021.07 - Present',
        },
        {
            title: 'DevOps Engineer',
            authority: 'Softtek',
            description: `<ul>
                <li> Web applications development and deployment using MERN stack and Azure AKS. </li>
                <li> AKS cluster monitoring and administration. </li>
                <li> Pipelines development to implement CI/CD practices following SAFe DevOps and Scrum methodologies. </li>
                <li> Technical coordinator and tasks management through Jira. </li>
            </ul>`,
            authorityWebSite: 'https://www.softtek.com/',
            meta: '2019.12 - 2021.07',
        },
    ]
};

const educationList = {
    title: 'Education',
    type: "common-list",
    icon: "school",
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
    icon: "book",
    items: [
        {
            title: 'Professional Cloud Security Engineer',
            authority: 'Google Cloud',
            authorityWebSite: "https://www.credential.net/707df0d9-983c-445b-858d-b1a38826e809",
            meta: '2023.11 - 2025.11'
        },
        {
            title: 'Associate Cloud Engineer',
            authority: 'Google Cloud',
            authorityWebSite: 'https://www.credential.net/94244ca3-ccd5-45ba-afd1-c8179779888e',
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
        }
    ]
};

const coursesList = {
    type: 'common-list',
    title: 'Courses',
    description: '',
    icon: "Trending Up",
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
    icon: "Language",
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
    icon: "Cloud",
    items: [
        "Linux", "Windows", "Wireshark", "NMap", "MySQL", "PostgreSQL", "MongoDB", "JavaScript",
        "RedHat Ansible", "SaltStack", "Kubernetes", "GitlabCI", "Docker", "Google Cloud", "Azure",
        "Jira", "ReactJS", "Agile", "Scrum", "SAFe DevOps"
    ]
};

const salutation = {
    title: "Hello, friend",
    description: "A Systems Engineer and Web Design and Security Enthusiast"
}

const about = [
    {
		id: 1,
		bio: `I am Cristóbal, a passionate Cloud Security professional.
        With over 4 years of experience, I have become a specialist in the design, implementation, and management of Cloud security solutions. 
        I am a technology enthusiast, always looking for new ways to apply my knowledge and protect organizations.
        I consider myself an expert in the leading Cloud security services, such as Identity and Access Management (IAM), VPC, Kubernetes, and
        Resource Management.`,
	},
	{
		id: 2,
		bio: `I have also developed strong skills in web design, system architecture, and process automation.
        Being a multi-faceted professional allows me to come up with and implement innovative and efficient security solutions that truly meet
        the needs of organizations of any size.`,
	},
]

const employersData = {
    employersHeading: "Who I've worked for",
    employersInfo: [
        {
            id: 1,
            title: 'Google Cloud',
            img: GoogleCloudImage,
        },
        {
            id: 2,
            title: 'Softtek',
            img: SofttekImage,
        },
    ]
}
const sections = {experiencesList, educationList, certificatesList, coursesList, languagesList, skillsList, salutation, about, employersData};

export default sections;
