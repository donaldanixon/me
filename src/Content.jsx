import './index.css'
import Nodero from './assets/Nodero.svg'
import React from './assets/React.svg'
import M365AI from './assets/M365-AI.jpg'
import M365PP from './assets/M365-PP.jpg'
import Massey from './assets/Massey.svg'
import Python from './assets/python.svg'
import JS from './assets/js.svg'
import PowerApps from './assets/powerapps.svg'
import PowerAutomate from './assets/powerautomate.svg'
import PowerShell from './assets/PowerShell.svg'
import SQL from './assets/AzureSQL.svg'
import Azure from './assets/azure.svg'
import NodeJS from './assets/nodejs.svg'
import Docker from './assets/docker.svg'
import OpenAILogo from './assets/openailogo.svg'
import Methanex from './assets/Methanex.svg'
import DTSL from './assets/dtsl.png'
import ProfilePic from './assets/ProfilePic.jpg'

function Content() {

  return (
    <>
      <div className="Content">
        <div className="ProfileContainer">
          <img src={ProfilePic} className="ProfilePic" />
        </div>
        <div className="ContentText">
        <svg width="516" height="82.5" viewBox="0 0 344 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className='animatedText' d="M12.896 52.384L7.584 52.576C4.59733 52.576 2.656 52.1707 1.76 51.36C1.20533 50.9333 0.928 50.336 0.928 49.568C0.928 44.7467 1.09867 38.432 1.44 30.624C1.78133 22.7733 1.952 16.672 1.952 12.32C1.952 10.5707 3.57333 9.16267 6.816 8.096C10.0587 7.02933 13.536 6.496 17.248 6.496C24.2027 6.496 29.9627 8.45867 34.528 12.384C39.136 16.3093 41.44 21.408 41.44 27.68C41.44 30.8373 40.8853 33.76 39.776 36.448C38.7093 39.136 37.2587 41.4613 35.424 43.424C33.5893 45.344 31.456 46.9867 29.024 48.352C24.16 51.04 18.784 52.384 12.896 52.384ZM36.896 29.216C36.896 23.712 35.0187 19.104 31.264 15.392C27.552 11.6373 22.7307 9.76 16.8 9.76C13.8987 9.76 10.4427 10.72 6.432 12.64C6.432 16.096 6.26133 21.28 5.92 28.192C5.57867 35.0613 5.408 39.8187 5.408 42.464C5.408 45.0667 5.42933 46.9227 5.472 48.032C7.86133 48.5013 10.4213 48.736 13.152 48.736C20.064 48.736 25.7387 47.0507 30.176 43.68C34.656 40.3093 36.896 35.488 36.896 29.216ZM50.0145 25.44C52.1905 22.112 55.3265 20.448 59.4225 20.448C63.5185 20.448 66.7825 22.112 69.2145 25.44C71.6892 28.768 72.9265 32.5653 72.9265 36.832C72.9265 41.056 71.5825 44.64 68.8945 47.584C66.2065 50.528 62.7932 52 58.6545 52C54.5158 52 51.5078 50.848 49.6305 48.544C47.7532 46.1973 46.8145 42.912 46.8145 38.688C46.8145 33.184 47.8812 28.768 50.0145 25.44ZM52.8305 28.832C52.2758 30.496 51.8492 32.16 51.5505 33.824C51.2945 35.488 51.1665 37.0453 51.1665 38.496C51.1665 39.904 51.2732 41.2053 51.4865 42.4C51.6998 43.552 52.0625 44.704 52.5745 45.856C53.0865 46.9653 53.8545 47.8613 54.8785 48.544C55.9025 49.184 57.1185 49.504 58.5265 49.504C61.3852 49.504 63.7745 48.3307 65.6945 45.984C67.6572 43.6373 68.6385 40.8 68.6385 37.472C68.6385 34.144 67.7425 30.9227 65.9505 27.808C64.2012 24.6507 62.0465 23.072 59.4865 23.072C57.9505 23.072 56.6065 23.6053 55.4545 24.672C54.3025 25.7387 53.4278 27.1253 52.8305 28.832ZM105.518 50.208C104.75 51.0187 103.875 51.424 102.894 51.424C101.059 51.424 99.6935 50.4427 98.7975 48.48C97.9015 46.5173 97.3682 44.128 97.1975 41.312C97.0695 38.496 96.9842 35.68 96.9415 32.864C96.8988 30.048 96.6642 27.6587 96.2375 25.696C95.8535 23.7333 95.1068 22.752 93.9975 22.752C92.5042 22.752 91.2242 24.096 90.1575 26.784C89.1335 29.472 88.4082 32.4587 87.9815 35.744C86.7868 44.9173 85.6348 50.0587 84.5255 51.168C83.7575 51.552 83.0962 51.744 82.5415 51.744C81.9868 51.744 81.5175 51.68 81.1335 51.552C80.2375 47.6267 79.6615 40.864 79.4055 31.264C79.3202 26.4853 79.2348 23.392 79.1495 21.984C80.0455 21.3867 80.8135 21.088 81.4535 21.088C82.0935 21.088 82.6055 21.152 82.9895 21.28C83.2028 23.1147 83.3095 26.8693 83.3095 32.544C83.3522 38.2187 83.3948 41.4827 83.4375 42.336C83.6508 41.44 83.9068 39.9893 84.2055 37.984C84.5468 35.9787 84.8455 34.336 85.1015 33.056C85.3575 31.7333 85.7628 30.1973 86.3175 28.448C86.8722 26.6987 87.4908 25.312 88.1735 24.288C88.8562 23.2213 89.7948 22.3253 90.9895 21.6C92.1842 20.832 93.5282 20.448 95.0215 20.448C97.0268 20.448 98.4775 21.3653 99.3735 23.2C100.312 24.992 100.824 27.232 100.91 29.92C100.995 32.608 101.038 35.3387 101.038 38.112C101.08 40.8853 101.422 43.424 102.062 45.728C102.744 48.032 103.896 49.5253 105.518 50.208ZM129.875 33.568L129.555 40.928C129.555 44.64 129.982 47.136 130.835 48.416C131.347 49.2693 132.051 49.696 132.947 49.696C133.203 49.696 133.566 49.632 134.035 49.504C134.931 49.248 135.678 49.376 136.275 49.888C135.976 51.3813 134.483 52.128 131.795 52.128C129.96 52.128 128.744 51.36 128.147 49.824C127.678 48.672 127.336 47.2427 127.123 45.536C126.91 43.7867 126.739 42.592 126.611 41.952C123.838 47.2427 121.15 50.464 118.547 51.616C117.224 52.2133 115.688 52.512 113.939 52.512C112.19 52.512 110.824 51.68 109.843 50.016C108.904 48.3093 108.435 45.8347 108.435 42.592C108.435 39.3493 108.968 35.9573 110.035 32.416C111.102 28.832 112.659 25.824 114.707 23.392C116.755 20.9173 118.995 19.68 121.427 19.68C124.926 19.68 127.251 21.1307 128.403 24.032C129.384 26.5067 129.875 29.6853 129.875 33.568ZM114.195 31.52C113.598 33.824 113.15 36.0213 112.851 38.112C112.552 40.16 112.403 41.9947 112.403 43.616C112.403 45.1947 112.723 46.56 113.363 47.712C114.046 48.864 114.92 49.44 115.987 49.44C118.291 49.44 120.51 47.264 122.643 42.912C124.776 38.56 125.843 34.5067 125.843 30.752C125.843 28.32 125.203 26.3147 123.923 24.736C123.07 23.712 121.939 23.2 120.531 23.2C119.166 23.2 117.907 24.0107 116.755 25.632C115.646 27.2107 114.792 29.1733 114.195 31.52ZM140.513 13.728C140.513 9.504 139.937 6.66667 138.785 5.216C139.34 4.40533 140.3 4 141.665 4C141.921 4 142.198 4.02133 142.497 4.064C143.564 5.13066 144.097 8.224 144.097 13.344C144.097 16.1173 143.969 19.3387 143.713 23.008C143.201 29.408 142.945 34.1013 142.945 37.088C142.945 45.152 144.502 49.184 147.617 49.184C147.617 49.184 148.406 49.0347 149.985 48.736C150.369 48.736 150.689 48.9067 150.945 49.248C150.817 50.784 149.558 51.552 147.169 51.552C144.822 51.552 143.009 50.848 141.729 49.44C140.449 47.9893 139.638 46.1973 139.297 44.064C138.998 41.888 138.849 40.096 138.849 38.688C138.849 37.28 138.87 35.744 138.913 34.08C138.956 32.3733 139.148 29.9413 139.489 26.784C140.172 20.384 140.513 16.032 140.513 13.728ZM177.715 0.735996C176.094 15.4133 175.283 25.888 175.283 32.16C175.283 38.3893 175.859 44.6187 177.011 50.848C176.158 51.7013 175.411 52.128 174.771 52.128C174.131 52.128 173.598 52.0427 173.171 51.872C172.275 48.7147 171.742 45.28 171.571 41.568C170.547 43.1893 169.779 44.3413 169.267 45.024C168.798 45.7067 167.966 46.7093 166.771 48.032C164.595 50.592 162.014 51.872 159.027 51.872C156.766 51.872 155.123 50.8267 154.099 48.736C153.118 46.6027 152.627 43.8933 152.627 40.608C152.627 37.28 152.99 34.1227 153.715 31.136C154.483 28.1067 155.784 25.504 157.619 23.328C159.454 21.1093 161.715 20 164.403 20C166.024 20 167.518 20.3413 168.883 21.024C170.248 21.7067 171.187 22.624 171.699 23.776C171.784 22.624 171.87 20.8533 171.955 18.464C172.04 16.0747 172.126 13.9627 172.211 12.128C172.339 10.2507 172.531 8.352 172.787 6.432C173.256 2.336 174.302 0.287998 175.923 0.287998C176.478 0.287998 177.075 0.437331 177.715 0.735996ZM170.227 26.08C169.715 25.1413 169.011 24.4587 168.115 24.032C167.219 23.5627 166.024 23.328 164.531 23.328C163.08 23.328 161.715 24.16 160.435 25.824C157.918 29.1093 156.659 33.8667 156.659 40.096C156.659 42.1013 156.979 44.1067 157.619 46.112C158.259 48.0747 159.198 49.056 160.435 49.056C162.227 49.056 163.976 47.8827 165.683 45.536C167.39 43.1893 168.712 40.5013 169.651 37.472C170.59 34.4 171.059 31.648 171.059 29.216C171.059 28.064 170.782 27.0187 170.227 26.08ZM234.243 47.008L234.819 7.328C235.501 6.64533 236.227 6.304 236.995 6.304C237.763 6.304 238.36 6.432 238.787 6.688C239.085 12.3627 239.235 17.0347 239.235 20.704L238.723 50.336C238.723 51.1893 238.723 52 238.723 52.768C237.272 53.7067 236.077 54.176 235.139 54.176L234.371 54.048C233.944 53.8347 233.603 53.664 233.347 53.536C233.133 53.4507 232.835 53.152 232.451 52.64C232.067 52.1707 231.811 51.8293 231.683 51.616C231.555 51.4027 231.256 50.9333 230.787 50.208C230.36 49.4827 230.061 48.992 229.891 48.736C229.72 48.4373 228.504 46.496 226.243 42.912C224.024 39.2853 222.616 37.024 222.019 36.128C221.421 35.232 220.141 33.3333 218.179 30.432C216.259 27.5307 214.744 25.376 213.635 23.968C210.349 19.7867 207.32 16.416 204.547 13.856C204.76 19.4453 204.867 25.4187 204.867 31.776C204.867 38.1333 204.739 44.9173 204.483 52.128C203.971 52.896 202.541 53.28 200.195 53.28C200.195 29.1733 200.109 14.3253 199.939 8.736C200.749 7.968 201.539 7.584 202.307 7.584C203.075 7.584 203.821 7.79733 204.547 8.224C205.656 8.90666 206.893 9.93066 208.259 11.296C212.781 15.8187 217.048 20.96 221.059 26.72C225.112 32.48 229.507 39.2427 234.243 47.008ZM252.445 4.896C252.402 5.87733 252.381 6.96533 252.381 8.16C252.381 9.35467 252.445 10.592 252.573 11.872C251.976 12.5547 251.165 12.896 250.141 12.896C248.861 12.896 248.221 11.872 248.221 9.824C248.221 9.73867 248.221 9.41867 248.221 8.864C248.221 8.30933 248.221 7.81866 248.221 7.392C248.264 6.92267 248.349 6.38933 248.477 5.792C248.776 4.768 249.437 4.256 250.461 4.256C251.485 4.256 252.146 4.46933 252.445 4.896ZM248.349 36.256C248.349 27.8933 248.776 23.072 249.629 21.792C249.928 21.3227 250.29 21.088 250.717 21.088C251.144 21.088 251.848 21.3227 252.829 21.792C252.616 25.4187 252.509 29.3653 252.509 33.632C252.509 33.632 252.552 38.3467 252.637 47.776C252.637 49.0987 252.338 50.0373 251.741 50.592C251.186 51.104 250.653 51.36 250.141 51.36C249.672 51.36 249.181 51.232 248.669 50.976C248.456 45.4293 248.349 40.5227 248.349 36.256ZM258.666 21.92C259.391 20.9387 260.308 20.448 261.418 20.448C261.844 20.448 262.271 20.5547 262.698 20.768C263.594 26.4853 265.471 31.7333 268.33 36.512C270.207 33.0133 272.468 28.0853 275.114 21.728C276.138 21.1733 276.948 20.896 277.546 20.896C278.186 20.896 278.698 20.96 279.082 21.088C278.228 23.8613 277.226 26.4427 276.074 28.832C274.922 31.2213 273.834 33.4187 272.81 35.424C271.786 37.4293 271.039 38.9013 270.57 39.84C271.764 41.3333 272.767 42.528 273.578 43.424C274.431 44.2773 275.604 45.1733 277.098 46.112C279.06 47.392 280.916 48.032 282.666 48.032C283.562 48.032 284.18 48.2027 284.522 48.544C284.052 49.9947 282.922 50.72 281.13 50.72C278.143 50.72 275.156 49.5467 272.17 47.2C271.06 46.304 270.399 45.7707 270.186 45.6C270.015 45.3867 269.439 44.8107 268.458 43.872C268.116 44.384 267.626 45.28 266.986 46.56C266.388 47.84 265.876 48.864 265.45 49.632C265.023 50.3573 264.447 50.9333 263.722 51.36C262.996 51.744 262.356 51.936 261.802 51.936C261.29 51.936 260.799 51.872 260.33 51.744C261.012 50.336 262.015 48.416 263.338 45.984C264.703 43.552 265.62 41.888 266.09 40.992C263.956 37.664 262.25 34.5707 260.97 31.712C259.732 28.8107 258.964 25.5467 258.666 21.92ZM287.64 25.44C289.816 22.112 292.952 20.448 297.048 20.448C301.144 20.448 304.408 22.112 306.84 25.44C309.314 28.768 310.552 32.5653 310.552 36.832C310.552 41.056 309.208 44.64 306.52 47.584C303.832 50.528 300.418 52 296.28 52C292.141 52 289.133 50.848 287.256 48.544C285.378 46.1973 284.44 42.912 284.44 38.688C284.44 33.184 285.506 28.768 287.64 25.44ZM290.456 28.832C289.901 30.496 289.474 32.16 289.176 33.824C288.92 35.488 288.792 37.0453 288.792 38.496C288.792 39.904 288.898 41.2053 289.112 42.4C289.325 43.552 289.688 44.704 290.2 45.856C290.712 46.9653 291.48 47.8613 292.504 48.544C293.528 49.184 294.744 49.504 296.152 49.504C299.01 49.504 301.4 48.3307 303.32 45.984C305.282 43.6373 306.264 40.8 306.264 37.472C306.264 34.144 305.368 30.9227 303.576 27.808C301.826 24.6507 299.672 23.072 297.112 23.072C295.576 23.072 294.232 23.6053 293.08 24.672C291.928 25.7387 291.053 27.1253 290.456 28.832ZM343.143 50.208C342.375 51.0187 341.5 51.424 340.519 51.424C338.684 51.424 337.319 50.4427 336.423 48.48C335.527 46.5173 334.993 44.128 334.823 41.312C334.695 38.496 334.609 35.68 334.567 32.864C334.524 30.048 334.289 27.6587 333.863 25.696C333.479 23.7333 332.732 22.752 331.623 22.752C330.129 22.752 328.849 24.096 327.783 26.784C326.759 29.472 326.033 32.4587 325.607 35.744C324.412 44.9173 323.26 50.0587 322.151 51.168C321.383 51.552 320.721 51.744 320.167 51.744C319.612 51.744 319.143 51.68 318.759 51.552C317.863 47.6267 317.287 40.864 317.031 31.264C316.945 26.4853 316.86 23.392 316.775 21.984C317.671 21.3867 318.439 21.088 319.079 21.088C319.719 21.088 320.231 21.152 320.615 21.28C320.828 23.1147 320.935 26.8693 320.935 32.544C320.977 38.2187 321.02 41.4827 321.062 42.336C321.276 41.44 321.532 39.9893 321.831 37.984C322.172 35.9787 322.471 34.336 322.727 33.056C322.983 31.7333 323.388 30.1973 323.943 28.448C324.497 26.6987 325.116 25.312 325.799 24.288C326.481 23.2213 327.42 22.3253 328.615 21.6C329.809 20.832 331.153 20.448 332.647 20.448C334.652 20.448 336.103 21.3653 336.999 23.2C337.937 24.992 338.449 27.232 338.535 29.92C338.62 32.608 338.663 35.3387 338.663 38.112C338.705 40.8853 339.047 43.424 339.687 45.728C340.369 48.032 341.521 49.5253 343.143 50.208Z" fill="white"/>
        </svg>
        </div>
        <div className="ContentIntro">
          Analyst Programmer with 15+ years of IT experience crafting elegant solutions that solve problems
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
                <img src={JS} className='TechImage' />
                <div className="TechName">JavaScript</div>
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
            <div className='ContentCardFooter'>Presented to Manawatū M365 Meetup in February 2023<br /> (recording unavailable)</div>
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
            <div className="ExperienceCard">
              <div className='ExperienceCardHeader'>
                <div className='ExperienceCardCompanyDetails'>
                  <div className="ExperienceCardCompany">DTSL</div>
                  <div className="ExperienceCardJobTitle">Field Service Engineer</div>
                  <div className="ExperienceCardJobDate">2008 - 2012</div>
                </div>
                <img src={DTSL} alt="DTSL Logo" className="ExperienceCardLogo" />
              </div>
              <div className="ExperienceCardBody">
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Content
