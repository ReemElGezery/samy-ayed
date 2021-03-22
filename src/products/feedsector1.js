import React, { useState } from 'react';
import '../products.css';
import '../home.css';
import NavBar from '../NavBar'
import Footer from '../home/footer'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import SimpleImageSlider from "react-simple-image-slider";
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';




const feedsector1 = () => {

    const { t, i18n } = useTranslation();

    return (
        <div>
            <NavBar></NavBar>


            <h2 className="title4">{t('Feedsec.1')}</h2>

            <div className="caro1">
                <Carousel >
                    <div >
                        <img src="/images/feedsec/3alaf bat.jpg"

                        />

                    </div>
                    <div>
                        <img src="/images/feedsec/a3laf mwashy.jpg"
                        />

                    </div>
                    <div>
                        <img src="/images/feedsec/a3laf.jpg"
                        />

                    </div>
                </Carousel>

            </div>
            <div className="choose">
                <ul >
                    <a href="/ffeedsec">
                        <li className='title' >{t('Ffeedsec.1')}</li>
                    </a>
                    <br></br>
                    <a href="/sfeedsec">
                        <li className='title' >{t('Sfeedsec.1')}</li>
                    </a>
                    <br></br>
                    <a href="/Tfeedsec">
                        <li className='title' >{t('Tfeedsec.1')}</li>
                    </a>

                </ul>
            </div>

            <div className="Footer">
                <Footer></Footer>
            </div>

        </div>
    );
}
export default feedsector1;

