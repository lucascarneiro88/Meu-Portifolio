import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div>
      <h1>404 - Página não encontrada</h1>
      <p>A página que você está tentando acessar não existe.</p>
      <Link to="/">Voltar para a página inicial</Link>
    </div>
  );
}

export default Error;
