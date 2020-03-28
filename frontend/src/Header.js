import React from 'react';

export default function Header({ children }) {
	return(
		<header>
			<h1>{children}</h1>
		</header>
	);
}

// export default Header;

/**
 * props -> Parametros da função
 * 
 * Sempre que for adicionar algo do JS no HTML, usar {} por volta
 *  {props.title}
 * 
 * Caso queira desestruturar para saber quais propriedades recebe ...(props)
 *  Apaga o Objeto de propriedades e coloca o que quer obter com {} por volta
 * 
 */