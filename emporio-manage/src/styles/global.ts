import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	:root{
		--bg-color-input:  #ccc;
		--bg-color-content: #ffffff;
		--font-color: #2b2e33;
		--border-color: #ffa935;
	}

  * {
		margin: 0px; 
		padding: 0px; 
		box-sizing: border-box;
		font-family: 'Ubuntu', sans-serif;
		color: var(--font-color);
	}
	
`;
