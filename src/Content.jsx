import './index.css'
import Nodero from './assets/Nodero.svg'
import ImagineTees from './assets/ImagineTees.svg'
import React from './assets/React.svg'
import M365AI from './assets/M365-AI.jpg'
import M365PP from './assets/M365-PP.jpg'
import Massey from './assets/Massey.svg'
import Python from './assets/python.svg'
import PowerApps from './assets/powerapps.svg'
import PowerAutomate from './assets/powerautomate.svg'
import PowerShell from './assets/PowerShell.svg'
import SQL from './assets/AzureSQL.svg'
import Azure from './assets/azure.svg'
import NodeJS from './assets/nodejs.svg'
import Docker from './assets/docker.svg'
import OpenAILogo from './assets/openailogo.svg'
import Comfy from './assets/sd.png'
import Methanex from './assets/Methanex.svg'
import ProfilePic from './assets/ProfilePic.jpg'

function Content() {

  return (
    <>
      <div className="Content">
        <div className="ProfileContainer">
          <img src={ProfilePic} className="ProfilePic" />
        </div>
        <div className="ContentText">Donald Nixon</div>
        <div className="ContentIntro">
          Analyst Programmer - Crafting elegant solutions to solve problems
        </div>

        <div className="ContentHeader">My Favourite Tech</div>
        <div className="ContentCardContainer">
          <div className="ExperienceCard">
            <div className="TechContainer">  
              <div className="TechCard">
                <img src={Python} className='TechImage' />
                <div className="TechName">Python</div>
              </div>
              <div className="TechCard">
                <img src={PowerApps} className='TechImage' />
                <div className="TechName">Power Apps</div>
              </div>
              <div className="TechCard">
                <img src={PowerAutomate} className='TechImage' />
                <div className="TechName">Power Automate</div>
              </div>
              <div className="TechCard">
                <img src={PowerShell} className='TechImage' />
                <div className="TechName">PowerShell</div>
              </div>
              <div className="TechCard">
                <img src={SQL} className='TechImage' />
                <div className="TechName">SQL</div>
              </div>
              <div className="TechCard">
                <img src={Azure} className='TechImage' />
                <div className="TechName">Azure</div>
              </div>
              <div className="TechCard">
                <img src={React} className='TechImage' />
                <div className="TechName">React</div>
              </div>
              <div className="TechCard">
                <img src={NodeJS} className='TechImage' />
                <div className="TechName">Node JS</div>
              </div>
              <div className="TechCard">
                <img src={Docker} className='TechImage' />
                <div className="TechName">Docker</div>
              </div>
              <div className="TechCard">
                <img src={OpenAILogo} className='TechImage' />
                <div className="TechName">OpenAI API</div>
              </div>
              <div className="TechCard">
                <img src={Comfy} className='TechImage' />
                <div className="TechName">Stable Diffusion</div>
              </div>
            </div>
          </div>
        </div>
        

        <div className="ContentHeader">Recent Presentations</div>
        <div className="ContentCardContainer">
          <div className="ContentCard">
            <a href="https://1drv.ms/v/s!Aul32MPOSv_rgZ8X47N-yQwDut831g?e=h9Yy5q"><img src={M365AI} className='PresentationImage' /></a>
            <div className="ContentCardHeader">AI for M365 Specialists</div>
            <div className="ContentCardBody">All Microsoft Services (Azure, M365, Security, Windows, Power Platform, Dynamics) now have a copilot, but what is a copilot, and why has the hype train got a rocket strapped to its back??</div>
            <div className='ContentCardFooter'>Presented to Wellington M365 Meetup in April 2024</div>
          </div>
          <div className="ContentCard">
            <img src={M365PP} className='PresentationImage'/>
            <div className="ContentCardHeader">Power Platform, Meet Web API</div>
            <div className="ContentCardBody">Reviewing the pros and cons of Custom Connectors and the Power Automate HTTP action, with a demo building a custom connector for an AI image generation API and using it in a Power App</div>
            <div className='ContentCardFooter'>Presented to Manawatū M365 Meetup in February 2023 (recording unavailable)</div>
          </div>
        </div>

        <div className="ContentHeader">Experience</div>
          <div className="ContentCardContainer">
            <div className="ExperienceCard">
              <div className='ExperienceCardHeader'>
                <div className='ExperienceCardCompanyDetails'>
                  <div className="ExperienceCardCompany">Nodero</div>
                  <div className="ExperienceCardJobTitle">Microsoft 365 Specialist</div>
                  <div className="ExperienceCardJobDate">July 2022 - Present</div>
                </div>
                <img src={Nodero} alt="Nodero logo" className="ExperienceCardLogo" />
              </div>
              <div className="ExperienceCardBody">
                <ul>
                  <li>Power Platform/SharePoint Developer; analysing, architecting, building, implementing and documenting solutions for clients that accelerate their business success</li>
                  <li>Built AI solutions using custom ML models, OpenAI API, and Microsoft Copilot</li>
                  <li>Implemented an entire Client Management System for a local not-for-profit, enabling them to move to a cloud solution with no ongoing cost</li>
                </ul>
              </div>
            </div>
            <div className="ExperienceCard">
              <div className='ExperienceCardHeader'>
                <div className='ExperienceCardCompanyDetails'>
                  <div className="ExperienceCardCompany">ImagineTees</div>
                  <div className="ExperienceCardJobTitle">AI Engineer (Freelance)</div>
                  <div className="ExperienceCardJobDate">March 2024 - July 2024</div>
                </div>
                <img src={ImagineTees} alt="ImagineTees logo" className="ExperienceCardLogo" />
              </div>
              <div className="ExperienceCardBody">
                <ul>
                  <li>Built an AI backend for the creation of images and setup pipelines for future updates for virtual try-on for clothing using Python and Docker</li>
                </ul>
              </div>
            </div>
            <div className="ExperienceCard">
              <div className='ExperienceCardHeader'>
                <div className='ExperienceCardCompanyDetails'>
                  <div className="ExperienceCardCompany">Massey University</div>
                  <div className="ExperienceCardJobTitle">SOE Engineer</div>
                  <div className="ExperienceCardJobDate">2021 - July 2022</div>
                </div>
                <img src={Massey} alt="Massey University logo" className="ExperienceCardLogo" />
              </div>
              <div className="ExperienceCardBody">
                <ul>
                  <li>Worked as part of the optimisation team maintaining the desktop fleet of ~9200 devices using JAMF Pro and SCCM, automating internal processes using python/shell scripts and Office 365 Power Platform to increase IT staff efficiency and improve the device management lifecycle.</li>
                  <li>Led the Massey University Microsoft Office 365 Community of Practice, running weekly “Ask The Expert” sessions and fortnightly Message Centre Reviews which provided technical assistance and tailored information about upcoming Office 365 changes to the community</li>
                </ul>
              </div>
            </div>
            <div className="ExperienceCard">
              <div className='ExperienceCardHeader'>
                <div className='ExperienceCardCompanyDetails'>
                  <div className="ExperienceCardCompany">Massey University</div>
                  <div className="ExperienceCardJobTitle">Office 365 Optimization Team Leader</div>
                  <div className="ExperienceCardJobDate">2019 - 2020</div>
                </div>
                <img src={Massey} alt="Massey University logo" className="ExperienceCardLogo" />
              </div>
              <div className="ExperienceCardBody">
                <ul>
                  <li>Worked with business units to optimize their processes by building Power Apps, Power Automate, Azure Runbooks, and Power BI reports/dashboards.  This included the delivery of change management artefacts including technical design documentation and user guides.  One project I managed resulted in a <a href="https://news.microsoft.com/en-nz/2021/07/09/clear-the-runway-how-massey-universitys-school-of-aviation-is-taking-off-with-microsoft-teams/">Microsoft Case Study</a>. </li>
                  <li>Managing a team of analysts delivering business process optimization/automation services, Level 2 Office 365 Support, Information Management Consultations, and Cloud Migrations to 3800 staff</li>
                </ul>
              </div>
            </div>
            <div className="ExperienceCard">
              <div className='ExperienceCardHeader'>
                <div className='ExperienceCardCompanyDetails'>
                  <div className="ExperienceCardCompany">Massey University</div>
                  <div className="ExperienceCardJobTitle">Digital Services and Customer Support Service Leader, IRM</div>
                  <div className="ExperienceCardJobDate">2017 - 2019</div>
                </div>
                <img src={Massey} alt="Massey University logo" className="ExperienceCardLogo" />
              </div>
              <div className="ExperienceCardBody">
                <ul>
                  <li>Managed and delivered the project to migrate 500+ SharePoint 2013 sites into SharePoint Online using ShareGate</li>
                  <li>Managed a small team responsible for the deployment and support of SharePoint 2013 as an EDRMS solution</li>
                </ul>
              </div>
            </div>
          <div className="ExperienceCard">
              <div className='ExperienceCardHeader'>
                <div className='ExperienceCardCompanyDetails'>
                  <div className="ExperienceCardCompany">Methanex New Zealand</div>
                  <div className="ExperienceCardJobTitle">Business Analyst, BPO</div>
                  <div className="ExperienceCardJobDate">2014 - 2017</div>
                </div>
                <img src={Methanex} alt="Methanex logo" className="ExperienceCardLogo" />
              </div>
              <div className="ExperienceCardBody">
                <ul>
                  <li>Provided business analysis and SharePoint Designer, InfoPath, JavaScript & SQL development skills to assist the Business Process Optimization team with the elimination of waste, empowering people to seek excellence and promoting a culture of continuous improvement</li>
                  <li>Managed the implementation of the recommended technology solutions, receiving exceptional reviews from members of the business community and internal awards</li>
                </ul>
              </div>
            </div>
            <div className="ExperienceCard">
              <div className='ExperienceCardHeader'>
                <div className='ExperienceCardCompanyDetails'>
                  <div className="ExperienceCardCompany">Methanex New Zealand</div>
                  <div className="ExperienceCardJobTitle">IT Service Analyst</div>
                  <div className="ExperienceCardJobDate">2012 - 2014</div>
                </div>
                <img src={Methanex} alt="Methanex logo" className="ExperienceCardLogo" />
              </div>
              <div className="ExperienceCardBody">
                <ul>
                  <li>Provided customer-focused support services for the local IT desktop infrastructure, corporate applications (SharePoint, Maximo, SSIS, SSRS) and communications services with a 90% or higher rating in customer satisfaction surveys</li>
                  <li>Sustained strong relationships with users, system owners, business leaders and vendors/suppliers to proactively identify potential system improvements</li>
                  <li>Wrote and delivered the training material for various key applications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Content
