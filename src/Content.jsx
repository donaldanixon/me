import './index.css'
import Nodero from './assets/Nodero.svg'

function Content() {

  return (
    <>
      <div className="Content">
        <div className="HeaderText">Donald Nixon</div>
        <div className="ContentIntro">
          Analyst Programmer - Crafting elegant solutions that solve problems
        </div>
        <div className="ContentHeader">Samples</div>
          <div className="ContentCardContainer">
            <div className="ContentCard">
              <img src="https://via.placeholder.com/300" />
              <div className="ContentCardHeader">Sample 1</div>
              <div className="ContentCardBody">Sample 1 content - a blurb about the project this belongs to, not too long but enough to justify</div>
            </div>
            <div className="ContentCard">
              <img src="https://via.placeholder.com/300" />
              <div className="ContentCardHeader">Sample 2</div>
              <div className="ContentCardBody">Sample 2 content</div>
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
                  <div className="ExperienceCardCompany">Nodero</div>
                  <div className="ExperienceCardJobTitle">Microsoft 365 Specialist</div>
                  <div className="ExperienceCardJobDate">Microsoft 365 Specialist</div>
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
          </div>
      </div>
    </>
  )
}

export default Content
