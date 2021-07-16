import React from 'react';
import {
	FooterContainer,
	FooterWrap,
	FooterLinksContainer,
	FooterLinkItem,
	FooterLinksWrapper,
	FooterLinkTitle,
	FooterLink,
	SocialMedia,
	SocialMediaWrap,
	SocialIcons,
	SocialIconLink,
	SocialLogo,
	WebsiteRights,
} from './FooterElements';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
	const toggleHome = () => {
		scroll.scrollToTop();
	};
	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItem>
							<FooterLinkTitle>About Us</FooterLinkTitle>
							<FooterLink to='signin'>How it works</FooterLink>
							<FooterLink to='signin'>Careers</FooterLink>
							<FooterLink to='signin'>Investors</FooterLink>
							<FooterLink to='signin'>Terms of Services</FooterLink>
						</FooterLinkItem>
						<FooterLinkItem>
							<FooterLinkTitle>Contact Us</FooterLinkTitle>
							<FooterLink to='signin'>Contact</FooterLink>
							<FooterLink to='signin'>Supports</FooterLink>
							<FooterLink to='signin'>Destinations</FooterLink>
							<FooterLink to='signin'>Sponsorships</FooterLink>
						</FooterLinkItem>
					</FooterLinksWrapper>
				</FooterLinksContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to='/' onClick={toggleHome}>
							Capital
						</SocialLogo>
						<WebsiteRights>
							Capital © {new Date().getFullYear()} All rights reserved.
						</WebsiteRights>
						<SocialIcons>
							<SocialIconLink href='/' target='_blank' aria-label='facebook'>
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink href='/' target='_blank' aria-label='instagram'>
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink href='/' target='_blank' aria-label='youtube'>
								<FaYoutube />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
