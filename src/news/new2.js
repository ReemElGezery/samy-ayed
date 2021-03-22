import React  from 'react';
import '../home.css';
import NavBar from '../NavBar'
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';

const news = () => {
  const { t, i18n } = useTranslation();
    return ( 
        <div>
             <NavBar></NavBar>
            {/* <h1 className="header1"> {t('new2.1')} </h1>      */}
            <div>
            
       <img
         src="/images/new2.jpg"
        width="400em"
        height="300em"
        className="img"  
    
      />
     
     <p className="link"> {t('new2.1')}</p>
    
            </div>
            <p> {t('new23.1')}</p>
    <a href=" www.dailynewsegypt.com/2016/04/20/el-gouna-squash-international-interview-with-egyptian-squash-champion-omar-mosaad/">
      <span>source:</span>
   <span> www.dailynewsegypt.com/2016/04/20/el-gouna-squash-international-interview-with-egyptian-squash-champion-omar-mosaad/

</span>
    </a>
    <CardActions>
         <a href="./news">
             <Button className="button">
             &#8920;  {t('Back.1')}
 </Button>
         </a>
     </CardActions> 
           
            
        </div>
     );
}
 
export default news;