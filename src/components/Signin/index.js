import React from 'react';
import {
	Container,
	FormWrap,
	Icon,
	FormContent,
	Form,
	FormH1,
	FormLabel,
	FormInput,
	FormButton,
	Text,
} from './SigninElements';

const Signin = () => {
	return (
		<>
			<Container>
				<FormWrap>
					<Icon to='/'>Capital</Icon>
					<FormContent>
						<Form>
							<FormH1>Sign In</FormH1>
							<FormLabel htmlFor='for'>Email</FormLabel>
							<FormInput type='email' required />
							<FormLabel htmlFor='for'>Password</FormLabel>
							<FormInput type='password' required />
							<FormButton type='submit'>Continue</FormButton>
							<Text>Forgot password</Text>
						</Form>
					</FormContent>
				</FormWrap>
			</Container>
		</>
	);
};

export default Signin;
