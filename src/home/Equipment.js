import React from 'react';
// import '../products1.css';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';

const Feed = () => {
  const { t, i18n } = useTranslation();
  return (

    <div>
      <h1 className="header5">{t('equipment.1')}</h1>

      <CardActions>
        <a href="./">
          <Button className="button">
            &#8920;{t('Back.1')}
        </Button>
        </a>
      </CardActions>

      <div classname="products">
        <div className="flex-container">

          <div classname="box">
            <img
              src="/images/equipments/mo3dat 1.jpg"
              width="230em"
              height="230em"
              className="img "


            />

            <p className="price">{t('equipment.1')} </p>
          </div>


          <div classname="box">

            <img
              src="/images/equipments/mo3dat 3.jpg"
              width="230em"
              height="230em"
              className="img"

            />

            <p className="price ">{t('equipment.1')} </p>

          </div>

          <div classname="box">
            <img
              src="/images/equipments/mo3dat 4.jpg"
              width="230em"
              height="230em"
              className="img"

            />

            <p className="price">{t('equipment.1')} </p>

          </div>
          <div classname="box">
            <img
              src="/images/equipments/mo3dat 7.jpg"
              width="230em"
              height="230em"
              className="img"

            />

            <p className="price">{t('equipment.1')} </p>

          </div>
          <div classname="box">

            <img
              src="/images/equipments/mo3dat 8.jpg"
              width="230em"
              height="230em"
              className="img"

            />


            <p className="price">{t('equipment.1')} </p>
          </div>





        </div>

        <br></br>
        <div className="flex-container">

          <div classname="box">
            <img
              src="/images/equipments/mo3dat 9.jpg"
              width="230em"
              height="230em"
              className="img "


            />

            <p className="price">{t('equipment.1')} </p>
          </div>


          <div classname="box">

            <img
              src="/images/equipments/mo3dat 10.jpg"
              width="230em"
              height="230em"
              className="img"

            />

            <p className="price ">{t('equipment.1')}</p>

          </div>

         



        </div>




</div>


      </div>

  );
}

export default Feed;