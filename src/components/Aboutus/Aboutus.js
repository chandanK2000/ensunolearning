import React from 'react';
import AboutEnsuno from './AboutEnsuno/AboutEnsuno';
import './Aboutus.css'
const Aboutus = () => {

  const ScheduleCall = () => {
    alert("call scheduling");
  }
  return (
    <div>
      <AboutEnsuno />
      <div className="mission-section">
        <div className="mission-image">
          <img src="./missionimage.webp" alt="Mission" height="100px" width="130px" />
        </div>
        <div className="mission-content">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit metus ut massa tempor, eu lobortis quam sodales. Curabitur vehicula convallis arcu, vel posuere dolor molestie eu. In hac habitasse platea dictumst. Integer auctor ante ac urna tempor, et fermentum nisi scelerisque. Sed vel risus at lectus tincidunt volutpat in vitae mi. Phasellus vitae sapien vitae lacus viverra aliquet vel a felis. Vivamus vehicula metus non leo aliquet, nec tincidunt purus convallis. Sed malesuada orci vel sapien dapibus, ut mollis tortor finibus. Fusce fringilla tincidunt orci, id mollis velit. Curabitur volutpat velit et justo mollis, at semper nisl commodo. Nullam in magna enim.
          </p>
        </div>
      </div>
      <div className="vision-section">
        <div className="vision-content">
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit metus ut massa tempor, eu lobortis quam sodales. Curabitur vehicula convallis arcu, vel posuere dolor molestie eu. In hac habitasse platea dictumst. Integer auctor ante ac urna tempor, et fermentum nisi scelerisque. Sed vel risus at lectus tincidunt volutpat in vitae mi. Phasellus vitae sapien vitae lacus viverra aliquet vel a felis. Vivamus vehicula metus non leo aliquet, nec tincidunt purus convallis. Sed malesuada orci vel sapien dapibus, ut mollis tortor finibus. Fusce fringilla tincidunt orci, id mollis velit. Curabitur volutpat velit et justo mollis, at semper nisl commodo. Nullam in magna enim.
          </p>
          <div className='scheduleButton'>
            <button className='' onClick={ScheduleCall}>Schedule a call Now</button>
          </div>
        </div>
        <div className="vision-image">
          <img src="./vissionimage.webp" alt="Mission" height="100px" width="130px" />
        </div>

      </div>

      <div className="founders-section">
        <h1>Meet the Founders</h1>
        <div className="thick-line"></div>


        <div className="founder-block">
          <img src="./anil.webp" alt="Founder 1" height="100px" width="120px" />
          <div className="founder-info">
            <h5>Anil kumar</h5>
            <h6>Founder, CEO</h6>
            <p className='abouts'>An experienced banker with over 35 years of experience working for both public and private sector banks.</p>
          </div>
        </div>

        <div className="founder-block">
          <img src="./rahul.webp" alt="Founder 1" height="100px" width="120px" />
          <div className="founder-info">
            <h5>Rahul Kumar</h5>
            <h6>Co- Founder, COO</h6>
            <p className='abouts'> A qualified computer science engineer and a seasoned Digital Media & Growth Expert who is actively involved in Brand Building and Digital Support for a variety of businesses and celebrities.</p>
          </div>
        </div>
      </div>


      <div className="experts-container">
      
        <div className="expert-left">
          <h2>Our Experts</h2>
          <div className="expertthickline"></div>

          <h3>Experience is what sets us apart.</h3>
          <p>
            Backed by real leaders who have been through the process and experienced the industry from the ground level and up.
          </p>
        </div>

        <div className="expert-right">
        
          <div className="expert-block">
            <img src="./expertman.webp" alt="Expert 1" height="30px" width="40px" />
            <div className="expert-info">
              <h4>Deepak Pande</h4>
              <p>CFP, PGPMX, M.Sc., DIB & <br />CAIIB</p>

            </div>
          </div>
          <div className="expert-block">
            <img src="./narender.webp" alt="Expert 1" height="30px" width="40px" />
            <div className="expert-info">
              <h4>
                Dr. Narinder Bhasin</h4>
              <p>27 years as a banker 6 years a<br />s a BFSI professor</p>
            </div>
          </div>
          <div className="expert-block">
            <img src="./harish.webp" alt="Expert 1" height="30px" width="40px" />
            <div className="expert-info">
              <h4>
                Dr. Narinder Bhasin</h4>
              <p>27 years as a banker 6 years a<br />s a BFSI professor</p>
            </div>
          </div> <div className="expert-block">
            <img src="./anil.webp" alt="Expert 1" height="30px" width="40px" />
            <div className="expert-info">
              <h4>
                Dr. Narinder Bhasin</h4>
              <p>27 years as a banker 6 years a<br />s a BFSI professor</p>
            </div>
          </div> <div className="expert-block">
            <img src="./anil.webp" alt="Expert 1" height="30px" width="40px" />
            <div className="expert-info">
              <h4>
                Dr. Narinder Bhasin</h4>
              <p>27 years as a banker 6 years a<br />s a BFSI professor</p>
            </div>
          </div> <div className="expert-block">
            <img src="./shubra.webp" alt="Expert 1" height="30px" width="40px" />
            <div className="expert-info">
              <h4>
                Dr. Narinder Bhasin</h4>
              <p>27 years as a banker 6 years a<br />s a BFSI professor</p>
            </div>
          </div>
          <div className="expert-block">
            <img src="./brsingh.webp" alt="Expert 1" height="30px" width="40px" />
            <div className="expert-info">
              <h4>B R Singh</h4>
              <p>40 years of experience in<br /> BFSI Education sector</p>
            </div>
          </div>
          <div className="expert-block">
            <img src="./arpit.png" alt="Expert 1" height="30px" width="40px" />
            <div className="expert-info">
              <h4>Arpit Jain</h4>
              <p>20 years + working as a <br />transformation coach.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mentors-container">
        <h1> Our Mentors</h1>

        <div className="mentors-right">

          <div className="mentors-block">
            <img src="./anil.webp" alt="mentors 1" height="30px" width="40px" />
            <div className="mentors-info">
              <h4>Deepak Pande</h4>
              <p>CFP, PGPMX, M.Sc., DIB & <br />CAIIB</p>

            </div>
          </div>
          <div className="mentors-block">
            <img src="./narender.webp" alt="mentors 1" height="30px" width="40px" />
            <div className="mentors-info">
              <h4>
                Dr. Narinder Bhasin</h4>
              <p>27 years as a banker 6 years a<br />s a BFSI professor</p>
            </div>
          </div>
         
          <div className="mentors-block">
            <img src="./brsingh.webp" alt="mentors 1" height="30px" width="40px" />
            <div className="mentors-info">
              <h4>B R Singh</h4>
              <p>40 years of experience in<br /> BFSI Education sector</p>
            </div>
          </div>
          <div className="mentors-block">
            <img src="./arpit.png" alt="mentors 1" height="30px" width="40px" />
            <div className="mentors-info">
              <h4>Arpit Jain</h4>
              <p>20 years + working as a <br />transformation coach.</p>
            </div>
          </div>
        </div>
      </div>


      <div className="wonder-section">
        <div className="prompt-text">
          <h2>Wondering where to begin?</h2>
        </div>
        <div className="action-button">
          <button>Schedule a call Now</button>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
