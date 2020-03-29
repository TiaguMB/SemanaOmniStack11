import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
	return (
		<div className="new-incident-container">
			<div className="content">
				<section>
					<img src={logoImg} alt="Be The Hero"/>

					<h1>Cadastrar novo caso</h1>
					<p>
						Descreva seu caso detalhadamente para encontrar um herói para resolver isso.
					</p>

					<Link className="back-link" to="/profile">
						<FiArrowLeft size={16} color="#e02041" />
						Voltar para casos
					</Link>
				</section>

				<form>
					<input placeholder="Título do caso" />
					<textarea placeholder="Descrição" />
					<input placeholder="Valor em R$" />

					<div className="input-group">
						<input placeholder="Cidade" />
						<input placeholder="UF" style={{ width: 80 }} />
					</div>

					<button className="button" type="submit">Cadastrar</button>
				</form>
			</div>
		</div>
	);
}