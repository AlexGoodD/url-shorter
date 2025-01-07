# URSH (URL Shortener)

URL Shortener es una aplicación web que permite acortar URLs largas y generar códigos QR para ellas. Está construida con Vue 3 y Vite.

## Enlace

http://ursh.vercel.app

## Características

- Acorta URLs largas.
- Genera códigos QR para las URLs acortadas.
- Interfaz de usuario moderna y responsiva.
- Integración con Firebase para almacenamiento de URLs.

## Configuración Recomendado del IDE

Se recomienda usar [VSCode](https://code.visualstudio.com/) con las siguientes extensiones:

- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (y desactivar Vetur).
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

## Soporte de Tipos para Importaciones de `.vue` en TS

TypeScript no puede manejar la información de tipos para importaciones de `.vue` por defecto, por lo que reemplazamos el CLI `tsc` con `vue-tsc` para la verificación de tipos. En los editores, necesitamos [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) para hacer que el servicio de lenguaje TypeScript sea consciente de los tipos `.vue`.

## Personalizar la Configuración

Consulta la [Referencia de Configuración de Vite](https://vite.dev/config/).

## Configuración del Proyecto

### Instalación

```sh
npm install
```

### Compilar y Recargar en Caliente para Desarrollo

```sh
npm run dev
```

### Verificación de Tipos, Compilación y Minificación para Producción

```sh
npm run build
```

### Ejecutar Pruebas Unitarias con [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint con [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Estructura del Proyecto

```plaintext
.editorconfig
.firebaserc
.gitignore
.prettierrc.json
.vercel/
.vscode/
env.d.ts
eslint.config.js
index.html
package.json
postcss.config.js
public/
README.md
src/
  App.vue
  assets/
  components/
  firebase.d.ts
  firebase.js
  main.ts
  router/
  services/
  views/
tailwind.config.js
tsconfig.app.json
tsconfig.json
tsconfig.node.json
```
