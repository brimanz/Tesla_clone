import React from 'react';
import styled from '@emotion/styled';
import Section from '../section/Section';


const Home = () =>{
	return(
		<Container>
			<Section 
				title="Model S"
				subtitle="Order Online for Touchless Delivery"
				backgroundImg="model-s.jpg"
				leftBtnText="Custom order"
				rightBtnText="Existing inventory"
			/>
			<Section 
				title="Model Y"
				subtitle="Order Online for Touchless Delivery"
				backgroundImg="model-y.jpg"
				leftBtnText="Custom order"
				rightBtnText="Existing inventory"
			/>
			<Section
				title="Model 3"
				subtitle="Order Online for Touchless Delivery"
				backgroundImg="model-3.jpg"
				leftBtnText="Custom order"
				rightBtnText="Existing inventory"
			/>
			<Section 
				title="Model X"
				subtitle="Order Online for Touchless Delivery"
				backgroundImg="model-x.jpg"
				leftBtnText="Custom order"
				rightBtnText="Existing inventory"
			/>

			<Section 
				title="Lowest Cost Solar Panels in America"
				subtitle="Money-back guarantee"
				backgroundImg="solar-panel.jpg"
				leftBtnText="Order now"
				rightBtnText="Learn more"
			/>
			<Section 
				title="Solar for New Roofs"
				subtitle="Solar Roof Cost LEss Than a New Roof Plus Solar Panels"
				backgroundImg="solar-roof.jpg"
				leftBtnText="Order now"
				rightBtnText="Learn more"
			/>
			<Section 
				title="Accesories"
				subtitle=""
				backgroundImg="accessories.jpg"
				leftBtnText="Shop now"
			/>
		</Container>
	);
}


export default Home;


const Container = styled.div`
	height: 100vh;
`

