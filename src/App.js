import React, { Component } from 'react';

const selfCode = `class App extends Component {
  render() {
    return (
      <div className="App">
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
      </div>
    );
  }
}`;

class App extends Component {
  render() {
    return (
      <div className="App">
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
        </div>
      </div>
    );
  }
}

export default App;
