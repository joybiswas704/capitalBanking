import img1 from '../../assets/images/svg-1.svg';
import img2 from '../../assets/images/svg-2.svg';
import img3 from '../../assets/images/svg-6.svg';

export const homeObject1 = {
	id: 'about',
	lightBg: true,
	lightText: false,
	lightTextDesc: false,
	topLine: 'Premium Bank',
	headline: 'Unlimited transactions with zero fees',
	description:
		'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
	buttonLabel: 'Get started',
	imgStart: false,
	img: img1,
	alt: 'unlimited transaction',
	dark: false,
	primary: false,
	darkText: true,
};

export const homeObject2 = {
	id: 'discover',
	lightBg: false,
	lightText: true,
	lightTextDesc: true,
	topLine: 'Saving Account',
	headline: 'Open a saving account for free',
	description:
		'Enjoy $500 cash bonus when you open a new saving account and additional $200 if you refer a friend!',
	buttonLabel: 'Learn More',
	imgStart: true,
	img: img2,
	alt: 'save money',
	dark: false,
	primary: true,
};

export const homeObject3 = {
	id: 'signup',
	lightBg: false,
	lightText: true,
	lightTextDesc: true,
	topLine: 'Join our team',
	headline: 'Creating an account is extremely easy',
	description:
		'Get everything set up and ready in under 10 minutes. All you need to do is add your information and you are ready to go.',
	buttonLabel: 'Join Now',
	imgStart: false,
	img: img3,
	alt: 'join',
	dark: false,
	primary: true,
};
