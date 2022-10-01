import React from 'react';
import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';


const Header = () =>{
	return(
		<Container>
			<a>
				<img src="/images/logo.svg" alt="logo image"/>
			</a>

			<Menu>				
				<a href="#">Model S</a>
				
				<a href="#">Model Y</a>
				
				<a href="#">Model 3</a>
				
				<a href="#">Model X</a>
			</Menu>

			<RightMenu>
				<a href="#">Shop</a>

				<a href="#">Tesla Account</a>

				<CustomMenu/>
			</RightMenu>

			<BurgerNav>
				<li>
					<a href="!#">Existing Inventory</a>
				</li>
				<li>
					<a href="!#">Used Inventory</a>
				</li>
				<li>
					<a href="!#">Trade-in</a>
				</li>
				<li>
					<a href="!#">Cybertruck</a>
				</li>
				<li>
					<a href="!#">Roadaster</a>
				</li>
				<li>
					<a href="!#">Existing Inventory</a>
				</li>
				<li>
					<a href="!#">Existing Inventory</a>
				</li>
				<li>
					<a href="!#">Existing Inventory</a>
				</li>
			</BurgerNav>


		</Container>
	);
}


export default Header;


const Container = styled.div`
	min-height: 6rem;
	position: fixed; 
	display: flex;

	align-items: center;
	justify-content: space-between;
	padding: 0 2rem;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1;	
`

const Menu = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;

	a{
		font-weight: 600;
		padding: 0 1.1rem;
		flex-wrap: nowrap;
	}


	@media(max-width: 768px){
		display: none;
	}	
`

const RightMenu = styled.div`
	display: flex;
	align-items: center;

	a{
		font-weight: 600;
		margin-right: 1.1rem;
		flex-wrap: nowrap;
	}
`

const CustomMenu  = styled(MenuIcon)`
	cursor: pointer;	
`

const BurgerNav = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;

	background-color: var(--color-white);
	width: 28rem;
`



