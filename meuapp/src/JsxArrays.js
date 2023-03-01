import React from "react";

const JsxArrays = () => {
  const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight'];

  const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ];

  return (
    <React.Fragment>
    <hr/>

    <h3> JSX Arrays</h3>

    <ul>
      {filmes.map((filme) => (
        <li key={filme}>{filme}</li>
      ))}
    </ul>

    <hr/>

    <ul>
      {livros
        .filter((livro) => livro.ano >= 1998)
        .map((livro) => (
          <li key={livro.nome}>
            {livro.nome}, {livro.ano}
          </li>
        ))}
    </ul>

    </React.Fragment>
  );
};

export default JsxArrays;
