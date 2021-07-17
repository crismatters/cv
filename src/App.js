import React from 'react'
import CV from 'react-cv'

const App = () => {
  return (
    <CV
      personalData={{
        name: 'Cristóbal Silva Díaz',
        title: 'Systems Engineer',
        contacts: [
          { type: 'email', value: 'crismatters@outlook.com' },
          { type: 'email', value: 'crismathers3@gmail.com' },
          { type: 'location', value: 'Aguascalientes, Mexico' },
          { type: 'linkedin', value: 'linkedin.com/in/cristobal-silva-diaz/' },
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
              description: 'Google Cloud Platform Support Engineer.',
              companyWebSite: 'https://about.google/',
              datesBetween: '2021.07 - Present',
              descriptionTags: ["Google Cloud"]
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
              descriptionTags: ["Ansible", "SaltStack", "Linux", "SCM", "GitlabCI", "Kubernetes", "Azure", "NodeJS", "MongoDB", "ReactJS", "SAFe DevOps"]
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
              title: 'SaltStack Certified Engineer / 2020',
              authority: 'Linux Academy',
              authorityWebSite: 'https://app.linuxacademy.com'
            },
            {
              title: 'Some Conferences / 2019',
              authority: 'SomeConf',
              authorityMeta: 'Speaker',
              authorityWebSite: 'https://www.someconf.somesome',
              rightSide: 'test'
            },
            {
              title: 'Some Conferences / 2012',
              authorityMeta: 'Speaker'
            }
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
      ]}
      branding={false} // or false to hide it.
    />
  )
}

export default App;