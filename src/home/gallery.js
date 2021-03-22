import React ,{useState}  from 'react';
import '../about.css';
import NavBar from '../NavBar'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Trial from '../trial'
import Footer from '../home/footer'
import { useTranslation } from 'react-i18next';


const org =() =>
{
     const { t, i18n } = useTranslation();
    

    return(
        <div>
             <NavBar></NavBar>
        
        <div>
        <h2 className="headerall"> {t('Gallery.1')} </h2>
        
        
        <ul >
            <br></br>
         <a href="/opening">
        <li className='title' >{t('opening.1')}</li> 
        </a>
        <br></br>
        <a href="/events">
        <li className='title'  >{t('events.1')}</li> 
        </a>
        <br></br>
        <a href="/team">
        <li className='title' >{t('team.1')}</li> 
        </a>
        <br></br>
        <a href="/labs">
        <li className='title' >{t('labs.1')}</li> 
        </a>
       
       

  </ul>
  </div>
  <div className="Footer"> 
     <Footer></Footer>
     </div>

  </div>
    );
}
export default org;

