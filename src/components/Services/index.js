import React from 'react';
import Icon1 from '../../assets/images/svg-5.svg';
import Icon2 from '../../assets/images/svg-3.svg';
import Icon3 from '../../assets/images/svg-4.svg';
import {
	ServicesContainer,
	ServicesH1,
	ServicesH2,
	ServicesWrapper,
	ServicesIcon,
	ServicesCard,
	ServicesP,
} from './ServicesElements';

const Services = () => {
	return (
		<ServicesContainer id='services'>
			<ServicesH1>Our Services</ServicesH1>
			<ServicesWrapper>
				<ServicesCard>
					<ServicesIcon src={Icon1} />
					<ServicesH2>Reduce Expenses</ServicesH2>
					<ServicesP>
						We help reduce your fees and increase your overall revenue.
					</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon2} />
					<ServicesH2>Virtual Offices</ServicesH2>
					<ServicesP>
						You can access our platform online from anywhere.
					</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon3} />
					<ServicesH2>Premium Benifits</ServicesH2>
					<ServicesP>
						Unlock our special membership card and get 5% cash back.
					</ServicesP>
				</ServicesCard>
			</ServicesWrapper>
		</ServicesContainer>
	);
};

export default Services;
