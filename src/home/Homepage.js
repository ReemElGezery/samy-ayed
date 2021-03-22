import React  from 'react';
import '../home.css';
import '../about.css';
import "../styles.css";
import NavBar from '../NavBar'
import Footer from './footer'
import ReactDOM from "react-dom";
import TextScroller from "../TextScroller";
import SimpleImageSlider from "react-simple-image-slider";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css'

const images = [
    { url: "/images/DSC00182.jpg" },
    { url: "/images/2E1A2951.jpg" },
    
  ]; 
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  
const Homepage = () => {
  const { t, i18n } = useTranslation();
  const classes = useStyles();
    return (
      <div>
        <div>
      <NavBar className='xx' ></NavBar>
   
      </div>
      
      
    
      <div className="slide">
       <Carousel >
         
                <div>
                    <img src="/images/cover-Recovered.jpg" />
                    
                </div>
                <div>
                    <img src="/images/cover3.jpg" />
                    
                </div>
                <div>
                    <img src="/images/cover2.jpg" />
                   
                </div>
                
            </Carousel>
            </div>
            <div className="x">
              <text className="groupstock">{t('groupstock.1')}</text>
              <div className="move"> <TextScroller  text= {t('s26.1')}/> </div>
     
    </div>
    <br></br>
    <br></br>
    <br></br>
    <div className='col-sm-3'></div>
    
  <div classname="products" style={{height:"30em"}}>
      <div  > 
     <h1 className="title4">{t('Groupproducts.1')}</h1>

     <div classname="products" className="homepic">
        <div className="flex-container">

          <div classname="box">
          <a href="/Equipment" >
            <img
              src="/images/mo3dat 1.jpg"
              width="190em"
              height="190em"
              className="img "


            />
</a>
            <p className="link">{t('equipment.1')}</p>
          </div>


          <div classname="box">
          <a href="/feed" >
            <img
              src="/images/feedsec/3lf bat.jpg"
              width="190em"
              height="190em"
              className="img "


            />
</a>
            <p className="link">{t('feed.1')}</p>
          </div>

          <div classname="box">
          <a href="/chicks" >
            <img
              src="/images/katkoot.jpg"
              width="190em"
              height="190em"
              className="img "


            />
</a>
            <p className="link">{t('chicks.1')}</p>
          </div>


          <div classname="box">
          <a href="/livestock" >
            <img
              src="/images/mwashy2.jpg"
              width="190em"
              height="190em"
              className="img "


            />
</a>
            <p className="link">{t('livestock.1')}</p>
          </div>

          <div classname="box">
          <a href="/poultry" >
            <img
              src="/images/poultry.jpg"
              width="190em"
              height="190em"
              className="img "


            />
</a>
            <p className="link">{t('poultry.1')}</p>
          </div>
          </div>
          </div>
    
</div>
</div>
<br></br>
<br></br>
<br></br>
<br></br>
<div style={{height:"45em"}} className="abouthome">
<h1 className="orgheader">{t('Aboutthegroup.1')}</h1>
    
     <Card className={classes.root} style={{ maxWidth: '90%' , marginLeft:'4em'}} classname="adjust" className="img"  >
       <CardActionArea >  
        
         <CardMedia
        
           className={classes.media}
           
          className="aboutus1"
           image="/images/co.jpg"
           
         />
        
         <CardContent>
           <Typography gutterBottom variant="h5" component="h2" style={{color:"#012637 " ,fontWeight:"bold"}}>
             
               {t('Message2.1')} 
    
           </Typography>
           <CardActions>
    <a href="./Aboutus
    ">
        <Button className="button">
        {t('More.1')}  &#8921;
        </Button>
        </a>
      </CardActions>
           
         </CardContent>
       </CardActionArea>
      
     </Card>
     
    
    </div>
<br></br>
<br></br>
<div  style={{height:"34em"}} className="aboutvideos">
<h1 className="orgheader">{t('video.1')}</h1>
<div className="vid">
<div  className="flex-container2">
  
        <div className="video2">
      <Player >
     
        <source src="/videos/home.mov" />
      </Player>
      </div> 
      <br></br>
<div className="video2">
       <Player>
     
       <source src="/videos/2.mp4" />
     </Player>
     </div>
     </div>

     </div>
     </div>
     <div className="Footer"> 
     <Footer></Footer>
     </div>
       </div>
    
    );
}
    
export default Homepage;