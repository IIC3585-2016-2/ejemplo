import React, { Component } from 'react';

const selfCode = `class App extends Component {
  render() {
    return (
      <div>
        <h1>
          ¿Cómo montar una página web estática en Github?
        </h1>
        <div>
          <p>
            Fácil, genera la versión final y guardala en la branch <code>gh-pages</code>
            del repositorio con un archivo <code>index.html</code> principal de entrada.
          </p>
        </div>
        <div>
          <pre>
            // Code
          </pre>
        </div>
        <div>
          En este caso <code>gh-pages</code> está en:
          <br />
          <a href="https://github.com/IIC3585-2016-2/ejemplo/tree/gh-pages">
            github.com/IIC3585-2016-2/ejemplo/tree/gh-pages
          </a>
        </div>
      </div>
    );
  }
}`;

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          ¿Cómo montar una página web estática en Github?
        </h1>
        <div>
          <p>
            Fácil, genera la versión final y guardala en la branch <code>gh-pages</code>
            del repositorio con un archivo <code>index.html</code> principal de entrada.
          </p>
        </div>
        <div>
          <pre>
            {selfCode}
          </pre>
        </div>
        <div>
          En este caso <code>gh-pages</code> está en:
          <br />
          <a href="https://github.com/IIC3585-2016-2/ejemplo/tree/gh-pages">
            github.com/IIC3585-2016-2/ejemplo/tree/gh-pages
          </a>
        </div>
      </div>
    );
  }
}

export default App;
