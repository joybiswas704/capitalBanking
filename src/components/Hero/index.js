import React, { useState } from 'react';
import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
	ArrowForward,
	ArrowRight,
} from './HeroElements';
import { Button } from '../utility/ButtonElement';
import Video from '../../assets/videos/video.mp4';

const Hero = () => {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};
	return (
		<HeroContainer id='home'>
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type='video/mp4' />
			</HeroBg>
			<HeroContent>
				<HeroH1>Virtual Banking Make Easy</HeroH1>
				<HeroP>
					Sign up for a new account and receive $250 in credit towards your next
					payment.
				</HeroP>
				<HeroBtnWrapper>
					<Button
						to='signup'
						onMouseEnter={onHover}
						onMouseLeave={onHover}
						primary='true'
						dark='true'
					>
						Get Started {hover ? <ArrowForward /> : <ArrowRight />}
					</Button>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	);
};

export default Hero;
