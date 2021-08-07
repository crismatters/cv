import { LinkedIn, Mail, GitHub, LocationCity, School, Book, Language, Cloud } from "@material-ui/icons";

export const personalData = {
    image: 'https://drive.google.com/uc?export=view&id=1nN_7WmKM-2JZruZ_FwPkNp17hkxU1FEz',
    name: 'Cristóbal Silva Díaz',
    title: 'Systems Engineer',
    contacts: [
        { icon: <Mail color="primary" />, value: 'crismatters@outlook.com', mail: true },
        { icon: <Mail color="primary" />, value: 'crismatters.sls@gmail.com', mail: true },
        { icon: <LocationCity color="primary" />, value: 'Aguascalientes, Mexico', location: true },
        { icon: <LinkedIn color="primary" />, value: 'linkedin.com/in/crismatters' },
        { icon: <GitHub color="primary" />, value: 'github.com/crismatters' }
    ]
};

const experiencesList = {
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
        },
    ]
};

const educationList = {
    title: 'Education',
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
    title: 'Certificates / Courses',
    description: '',
    icon: <Book />,
    items: [
        {
            title: 'Architecting with Google Kubernetes Engine: Foundations',
            authority: 'Coursera',
            authorityWebSite: 'https://www.coursera.org/',
            meta: '2021.08'
        },
        {
            title: 'Reliable Google Cloud Infrastructure: Design and Process',
            authority: 'Coursera',
            authorityWebSite: 'https://www.coursera.org/',
            meta: '2021.07'
        },
        {
            title: 'Elastic Google Cloud Infrastructure: Scaling and Automationn',
            authority: 'Coursera',
            authorityWebSite: 'https://www.coursera.org/',
            meta: '2021.07'
        },
        {
            title: 'Essential Google Cloud Infrastructure: Core Services',
            authority: 'Coursera',
            authorityWebSite: 'https://www.coursera.org/',
            meta: '2021.07'
        },
        {
            title: 'A Beginner\'s Guide to Linux Kernel Development (LFD103)',
            authority: 'The Linux Foundation',
            authorityWebSite: 'https://www.linuxfoundation.org/',
            meta: '2021.05'
        },
        {
            title: 'Cyber Security Foundation Professional Certificate (CSFPC)',
            authority: 'CertiProf',
            authorityWebSite: 'https://certiprof.com/',
            meta: '2021.05'
        },
        {
            title: 'Scrum Foundation Professional Certificate (SFPC)',
            authority: 'CertiProf',
            authorityWebSite: 'https://certiprof.com/',
            meta: '2021.05'
        },
        {
            title: 'Certified Kubernetes Administrator',
            authority: 'Linux Academy',
            authorityWebSite: 'https://app.linuxacademy.com',
            meta: '2020.11'
        },
        {
            title: 'RedHat Certified Specialist in Ansible Automation',
            authority: 'Linux Academy',
            authorityWebSite: 'https://app.linuxacademy.com',
            meta: '2020.08'
        },
        {
            title: 'RedHat Certified Engineer',
            authority: 'Linux Academy',
            authorityWebSite: 'https://app.linuxacademy.com',
            meta: '2020.07'
        },
        {
            title: 'SaltStack Certified Engineer',
            authority: 'Linux Academy',
            authorityWebSite: 'https://app.linuxacademy.com',
            meta: '2020.02'
        },
        {
            title: 'Partner: NDG Linux Unhatched',
            authority: 'Cisco Networking Academy',
            authorityWebSite: 'https://netacad.com',
            meta: '2019.08'
        },
        {
            title: 'CCNA Routing & Switching',
            authority: 'Cisco Networking Academy',
            authorityWebSite: 'https://netacad.com',
            meta: '2019.06'
        },
        {
            title: 'Introduction to Cibersecurity',
            authority: 'Cisco Networking Academy',
            authorityWebSite: 'https://netacad.com',
            meta: '2019.05'
        },
    ]
};

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
    icon: <Cloud />,
    items: [
        "Linux", "Windows", "Wireshark", "NMap", "MySQL", "PostgreSQL", "MongoDB", "JavaScript",
        "RedHat Ansible", "SaltStack", "Kubernetes", "GitlabCI", "Docker", "Scrum", "Google Cloud", "Azure",
        "Jira", "ReactJS", "Agile", "Scrum", "SAFe DevOps"
    ]
};

export const sections = [experiencesList, educationList, certificatesList, languagesList, skillsList];