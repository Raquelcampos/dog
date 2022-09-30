import React from "react";
import Card from "./Card/Card";
import Title from "./Title";
import styled from "styled-components";

const Main = styled.main`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 4rem;
`;

export default function Home() {
	return (
		<Main>
			<Title />
			<Card />
		</Main>
	);
}
