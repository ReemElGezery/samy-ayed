import React ,{useState}  from 'react';
import '../products.css';
 import '../home.css';
import NavBar from '../NavBar'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';
import Footer from '../home/footer'


const chickensector =() =>
{
    const { t, i18n } = useTranslation();

    return(
        <div>
             <NavBar></NavBar>
        
        <div>
        <h2 className="title4">{t('ChickenSec.1')}</h2>
        
        <div className="caro1">
<Carousel >
<div >
                    <img src="/images/poultry/rwaby.jpg" 
                    
                    />
                    
                </div>
                <div>
                <img src="/images/poultry/byad.jpg"
                 />
                    
                </div>
                <div>
                <img src="/images/poultry/omhat.jpg"
                 />
                   
                </div>
            </Carousel>
            <br></br>
            </div>
            <div className="choose">
        <ul >
            <a href="/fchickensec">
        <li className='title' >{t('Fchicksec.1')}</li> 
        </a>
        <br></br>
        <a href="/schickensec">
        <li className='title' >{t('Schicksec.1')}</li> 
        </a>
        <br></br>
        <a href="/Tchickensec">
        <li className='title' >{t('Tchicksec.1')}</li> 
        </a>

  </ul>
  </div>
  </div>
  <div className="Footer"> 
     <Footer></Footer>
     </div>
  </div>
    );
}
export default chickensector;