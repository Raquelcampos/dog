import styled from "styled-components";

export const Container = styled.section`
	width: fit-content;
	display: flex;
	justify-content: center;
	align-content: center;
	flex-direction: column;
	text-align: center;
	gap: 3rem;
`;

export const Image = styled.img`
	width: 30rem;
	height: 30rem;
	margin: 0 auto;
	object-fit: contain;
	filter: drop-shadow(3px 3px 6px #000);
`;

export const Btn = styled.button`
	width: 20rem;
	padding: 1rem;
	margin: auto;
	font-size: 1.5rem;
	background: #8e92a8;
	color: white;
	border: none;
`;
