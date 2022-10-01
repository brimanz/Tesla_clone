import React from 'react';
import styled from '@emotion/styled';
import Fade from 'react-reveal/Fade';



const Section = ({title, subtitle, backgroundImg, leftBtnText, rightBtnText}) =>{
	return(
		<Wrap bgImage={backgroundImg}>

			<Fade bottom>
				<ItemText>

					<h1>{title}</h1>

					<p>{subtitle}</p>
				</ItemText>
			</Fade>

			<Buttons>
				<Fade bottom>
					<ButtonGroup>
						<LeftButton>{leftBtnText}</LeftButton>

						{rightBtnText && 
							<RightButton>
								{rightBtnText}
							</RightButton>
						}
						
					</ButtonGroup>
				</Fade>
				<DownArrow src="/images/down-arrow.svg"/>
			</Buttons>
			
		</Wrap>
	);
}


export default Section;


const Wrap = styled.div`
	width: 100vw;
	height: 100vh;
	
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	background-image: ${props => `url("/images/${props.bgImage}")`};

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	color: var(--color-grey);
`

const ItemText = styled.div`
	padding-top: 15vh;
	text-align: center;
`

const ButtonGroup = styled.div`
	display: flex;	
	margin-bottom: 3.5rem;

	@media(max-width: 768px){
		flex-direction: column;
	}
`

const LeftButton = styled.div`
	width: 25.6rem;
	height: 4rem;
	
	background-color: var(--color-grey);		
	color: var(--color-white);
	
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10rem;
	opacity: .8;
	text-transform: uppercase;
	font-size: 1.1rem;	
	cursor: pointer;
	margin: .8rem;

	:hover{
		background-color: var(--color-white);		
		color: var(--color-grey);	
	}

`

const RightButton = styled(LeftButton)`
	background-color: var(--color-white);
	opacity: .65;
	color: var(--color-grey);

	:hover{
		background-color: var(--color-grey);		
		color: var(--color-white);	
	}
	
`

const DownArrow = styled.img`
	height: 4rem;
	animation: animationDown infinite 1.3s;
	overflow-x: hidden;
`

const Buttons = styled.div`
	display: flex;
	flex-direction: column;	
`





