<h1 align="center"> API con ExpressJS </h1>
<h3 align="center"> Comandos para configurar lo básico </h3>

- Iniciar el proyecto de NPM

  - npm init -y
  - configurar los scripts del package.json --> "dev": "tsnd --clear ./src/index.ts"

- Instalar las dependencias de desarrollo y de producción

  - npm i -D -E typescript ts-node ts-node-dev
  - npm i -E express

- Crear el arbol del proyecto

  - mkdir src
  - touch ./src/index.ts
  - touch .gitignore
  - configurar el gitignore -->
    **/node_modules
    **/dist

- Inicializar el repo en GIT

  - git init

- Crear el archivo de configuración de TypeScript

  - npx tsc --init
  - configurar tsconfig.json
