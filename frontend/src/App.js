import React, { useState } from 'react';

import Header from './Header';

function App() {
	const [counter, setCounter] = useState(0);
	/**
	 * Array [valor, funcaoDeAtualizacao]
	 * 
	 * let counter = 0;
	 */
	
	function increment() {
		setCounter(counter + 1);

		/**
		 * counter++;
		 * console.log(counter);
		 */
	}

	return (
		<div>
			<Header>Contador: {counter}</Header>
			<button onClick={increment}>Incrementar</button>
		</div>
	);
}

export default App;

/**
 * Exemplos passando props no Header => title="Semana OmniStack"
 * Ou como children => <Header>(Texto ou HTML aqui)</Header>
 * 
 */