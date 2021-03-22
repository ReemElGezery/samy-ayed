import React from 'react';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css'
import NavBar from '../NavBar';
import { useTranslation } from 'react-i18next';
import Footer from '../home/footer'

export default props => {
  const { t, i18n } = useTranslation();
    return (
      <div >
        <NavBar></NavBar>
        <h1 className="headervid">{t('video.1')}</h1>
        <div  className="flex-container1">
        <div className="video1">
      <Player>
     
        <source src="/videos/2.mp4" />
      </Player>
      </div> 
      <br></br>
<div className="video1">
       <Player>
     
       <source src="/videos/home.mov" />
     </Player>
     </div>
     <div className="video1">
       <Player>
     
       <source src="/videos/equip.MP4" />
     </Player>
     </div>

     </div>
     <br></br>
     <div  className="flex-container1">
        <div className="video1">
      <Player>
     
        <source src="/videos/equip2.MP4" />
      </Player>
      </div> 
      <br></br>
<div className="video1">
       <Player>
     
       <source src="/videos/01.mp4" />
     </Player>
     </div>
     <div className="video">
       <Player>
     
       <source src="/videos/1.mp4" />
     </Player>
     </div>

     </div>
     <div className="Footer"> 
     <Footer></Footer>
     </div>


     
     </div> 
    );
  };