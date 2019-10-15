/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

// Import custom login page
import '../../Styles/Login-page.min.css';
import '../../Styles/Global.min.css';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import Toast from 'react-bootstrap/Toast';
import Spinner from 'react-bootstrap/Spinner';


const AppWrapper = styled.div``;



export default function App() {
  return (
    <AppWrapper>
		<Container className="loginmainwrapper">
			<Form className="loginform">

				<div className="logoform">
					<Image src="https://bridgeprotocol.io/wp-content/uploads/2018/09/bridge-logo.png" className="img-fluid"/>
				</div>

				<Form.Group controlId="formBasicEmail">
					<Form.Label>User Name</Form.Label>
					<Form.Control type="email" placeholder="Ex : Jhon cone"/>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>

				<Form.Group controlId="formBasicCheckbox" className="checkboxwrap">

					<Form.Check type="checkbox" label="Remember Me" />
					<span className="checkmark"></span>
				</Form.Group>
				<Button variant="primary" type="submit" className="fullwidth">
					Login
				</Button>

				<Button variant="primary" disabled  className="fullwidth">
					<Spinner
						as="span"
						animation="border"
						size="sm"
						role="status"
						aria-hidden="true"
					/>
					Loading...
				</Button>

				<div className="haventacc">
					Don't have an account <a href={'http://mxstbr.com/'}> Sing up </a>
				</div>
			</Form>
		</Container>

		<Toast>
			<Toast.Header>
				<img src="https://dummyimage.com/20x20/ddd" className="rounded mr-2" alt="" />
				<strong className="mr-auto">Bootstrap</strong>
				<small>11 mins ago</small>
			</Toast.Header>
			<Toast.Body>Hello, world! This is a toast message.</Toast.Body>
		</Toast>

    </AppWrapper>
  );
}
