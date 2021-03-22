import React from "react"; 
import { 
Box, 
Container, 
Row, 
Column, 
FooterLink, 
Heading, 
} from "./FooterStyles"; 
import { useTranslation } from 'react-i18next';

const Footer = () => { 
  const { t, i18n } = useTranslation();
return ( 
	<Box> 
	<span style={{ color: "#012637", 
        fontWeight:"bold",
        fontSize:"x-large",
        position:"relative",
        top:"-2em",
        fontfamily:'Franklin Gothic Medium' }}> 
	Samy Ayed
	</span> 
	<Container> 
		<Row> 
		<Column> 
			<Heading>{t('Aboutus.1')}</Heading> 
			<FooterLink href="/org">{t('Org.1')}</FooterLink> 
			<FooterLink href="/aboutus">{t('Aboutthegroup.1')}</FooterLink> 
			
		</Column> 
		<Column> 
			<Heading>{t('products.1')}</Heading> 
			<FooterLink href="/feedsector">{t('Feedsec.1')}</FooterLink> 
			<FooterLink href="/chickensector">{t('ChickenSec.1')}</FooterLink> 
			<FooterLink href="/equipmentsector">{t('EquipSec.1')}</FooterLink> 
			<FooterLink href="/pharmacsector">{t('Pharmasec.1')}</FooterLink> 
      <FooterLink href="/cropsector">{t('Cropsec.1')}</FooterLink> 
		</Column> 
		<Column> 
			<Heading>{t('Contactus.1')}</Heading> 
			<FooterLink href="/management">{t('Management.1')}</FooterLink> 
			<FooterLink href="/aboutfeed">{t('Aboutfeed.1')}</FooterLink> 
			<FooterLink href="/aboutchicken">{t('Aboutchicken.1')}</FooterLink> 
			<FooterLink href="/aboutequip">{t('Aboutequip.1')}</FooterLink> 
      <FooterLink href="/aboutpharma">{t('Aboutpharma.1')}</FooterLink> 
      <FooterLink href="/aboutcrop">{t('Aboutcrop.1')}</FooterLink> 
		</Column> 
		<Column> 
			<Heading>{t('social.1')}</Heading> 
			<FooterLink href="https://www.facebook.com"> 
			<i className="fab fa-facebook-f"> 
				<span style={{ marginLeft: "10px" }}> 
				Facebook 
				</span> 
			</i> 
			</FooterLink> 
		
			<FooterLink href="https://www.twitter.com"> 
			<i className="fab fa-twitter"> 
				<span style={{ marginLeft: "10px" }}> 
				Twitter 
				</span> 
			</i> 
			</FooterLink> 
			<FooterLink href="https://www.youtube.com"> 
			<i className="fab fa-youtube"> 
				<span style={{ marginLeft: "10px" }}> 
				Youtube 
				</span> 
			</i> 
			</FooterLink> 
		</Column> 
		</Row> 
	</Container> 
	</Box> 
); 
}; 
export default Footer; 
