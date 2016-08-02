# Ejemplo

Aplicación de ejemplo con un `README.md` mínimo aceptable.

[Slides](./slides.pdf) | [Demo](http://IIC3585-2016-2.github.io/ejemplo)

## Development

Asegurarse de tener [Node.js 6](https://nodejs.org) o superior.

Clonar el repositorio:

```sh
https://github.com/IIC3585-2016-2/ejemplo.git
cd ejemplo
```

Instalar dependencias:

```sh
npm install
```

Iniciar el proyecto en el puerto `3000`:

```sh
npm start
```

Ahora es posible ver la aplicación andando en [`http://localhost:3000`](http://localhost:3000).

## Production

Para "compilar" el Javascript del proyecto:

```sh
npm run build
```

Luego copiar los archivos `index.html`, `favicon.ico` y la carpeta `static` a la raíz de la branch [`gh-pages`](https://github.com/IIC3585-2016-2/ejemplo/tree/gh-pages).
