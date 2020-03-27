import React from 'react';

import Header from './Header';

function App() {
	return (
		<Header title="Semana OmniStack" />
	);
}

export default App;

/**
 * Exemplos passando props no Header => title="Semana OmniStack"
 * Ou como children => <Header>(Texto ou HTML aqui)</Header>
 * 
 */