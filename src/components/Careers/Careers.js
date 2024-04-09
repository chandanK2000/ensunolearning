import React from 'react'
import Bannercarrers from './Banners/Bannercarrers';
import Careersresources from './Careersresources/Careersresources';
import Careersensueno from './Careersensueno/Careersensueno';
import Careersfrom from './Careersform/Careersfrom';

const Careers = () => {
  return (
    <div>
    <Bannercarrers/>
      <Careersresources />
      <Careersensueno/>
      <div className="banner_section">
        <h1 className="banner-text">Don’t see a suitable position?</h1>
        <p>
          We are for everyone. Write to us at EnsuenoLearning@gmail.com
        </p>
      </div>
      <Careersfrom/>
    </div>
  )
}

export default Careers;