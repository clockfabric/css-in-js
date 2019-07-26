import React from "react";
import styled from "styled-components";
import "./App.css";

const Text = styled.div`
	display: inline-block;
	border-radius: 20px;
	padding: 50px;
	margin: 40vh auto;
	background: pink;
	font-size: 20px;
	color: white;
	font-weight: bolder;
	border: ${props =>
		props.isActive ? "1px solid black" : "3px dotted green"};
`;

function App() {
	return (
		<div className='App'>
			<Text isActive={false}>Hello css in js</Text>
		</div>
	);
}

export default App;
