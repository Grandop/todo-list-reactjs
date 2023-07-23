import { styled } from "styled-components";

export const Container = styled.div`
`;

export const Text = styled.h1`
	font-weight: 900;
	font-family: "Roboto", sans-serif;
	color: #7d83b9;
	text-align: center;
`;

export const Form = styled.form`
	display: flex;
	width: 600px;
	height: 60px;
	margin: auto;
	justify-content: center;
	margin-bottom: 60px;

	@media (max-width: 900px) {
		width: 100%;
	}
`;

export const InputText = styled.input`
	display: flex;
	width: 100%;
	height: 60px;
	background-color: #2d3046;
	border: none;
	padding-left: 30px;
	font-size: 16px;
	border-bottom-left-radius: 10px;
	border-top-left-radius: 10px;
	color: white;
	&:focus {
		outline: none;
	}
`;

export const SubmitButton = styled.button`
	background-color: #363b65;
	border: none;
	color: white;
	cursor: pointer;
	padding: 10px 25px;
	height: 62px;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
	&:hover{
		color: white;
		background-color: #363f88;
	}
`;