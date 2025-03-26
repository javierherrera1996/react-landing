# Portfolio Personal - React Landing Page

Una landing page moderna y responsive construida con React, Next.js, TypeScript y Tailwind CSS.

## Características

- 🌐 Internacionalización (i18n) con soporte para múltiples idiomas
- 🎨 Diseño moderno y responsive con Tailwind CSS
- ✨ Animaciones suaves con Framer Motion
- 🌙 Fondo interactivo con Particles.js
- 📱 Totalmente adaptable a dispositivos móviles
- 🚀 Optimizado para SEO
- 🔧 TypeScript para un código más robusto
- 📦 Next.js para un rendimiento óptimo

## Requisitos Previos

- Node.js 14.0.0 o superior
- npm o yarn

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/react-landing.git
cd react-landing
```

2. Instalar dependencias:
```bash
npm install
# o
yarn install
```

3. Iniciar el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```

4. Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Crea una versión optimizada para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter
- `npm run deploy` - Despliega en GitHub Pages

## Estructura del Proyecto

```
react-landing/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── i18n/
│   ├── pages/
│   └── styles/
├── .gitignore
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
```

## Personalización

1. Editar el contenido en `src/data/data.tsx`
2. Modificar los estilos en `src/styles/globals.css`
3. Actualizar las traducciones en `src/i18n/locales/`

## Despliegue

El proyecto está configurado para desplegarse en GitHub Pages:

1. Actualizar el campo `homepage` en `package.json` con tu URL de GitHub Pages
2. Ejecutar `npm run deploy` o `yarn deploy`

También puedes desplegarlo en Vercel con un solo clic:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tu-usuario/react-landing)

## Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

# React JS Resume Website Template

![ReactJS Resume Website Template](resume-screenshot.jpg?raw=true 'ReactJS Resume Website Template')

<div align="center">

<img alt="GitHub release (latest by date including pre-releases" src="https://img.shields.io/github/v/release/tbakerx/react-resume-template?include_prereleases">

<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/tbakerx/react-resume-template?style=flat">

<img alt="GitHub Repo forks" src="https://img.shields.io/github/forks/tbakerx/react-resume-template?style=flat&color=success">

<img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/tbakerx/react-resume-template?style=flat&color=yellow">

<img alt="GitHub package.json dependency version (prod)" src="https://img.shields.io/github/package-json/dependency-version/tbakerx/react-resume-template/react?style=flat">

<img alt="Github Repo Sponsors" src="https://img.shields.io/github/sponsors/tbakerx?style=flat&color=blueviolet">

## React based template for software developer-focused resume websites

</div>

### View a [live demo here.](https://reactresume.com)

#### If this template has helped you and you'd like to support my work, feel free to [♥️ Sponsor](https://github.com/sponsors/tbakerx) the project

### 🎉 Version 2 is here! New features:
1. Completely rebuilt with React and full typescript support
2. Built on the [Next.js](https://nextjs.org/) framework for easy server side rendering/static generation, image optimization, api routes, and deployment
3. Styled entirely with [TailwindCss](https://tailwindcss.com/)
4. Re-organized data population file for customizing site.
5. Significant improvement/modernization of all site sections
 
**Looking for the old version? You can find it [here.](https://github.com/tbakerx/react-resume-template/releases/tag/v1.0.0)**

## Description

This is a React based personal resume website template. Built with typescript on the Next.js framework, styled with Tailwind css, and populated with data from a single file, you can easily create, customize and host your own personal website in minutes. Even better, the site is fully mobile-optimized and server-side rendered to ensure fast loading and a clean UI on any device. Read on to learn how to make it your own.

## Make it Your Own!

### 1. Make sure you have what you need

To build this website, you will need to have the latest stable versions of Node and Yarn downloaded and installed on your machine. If you don't already have them, you can get Node [here,](https://nodejs.org/en/download/) and Yarn [here.](https://yarnpkg.com/getting-started/install)

### 2. Fork and download this repo (and star if you like!)

Next, find the `Fork` button in the top right of this page. This will allow you to make your own copy, for more info on forking repo's see [here.](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository) After this, download to your development machine using the green `Code` button at the top of the repo page.

### 3. Install dependencies and run

Once you have your own copy of this repo forked and downloaded, open the folder in your favorite terminal and run `yarn install` to install dependencies. Following this, run `yarn dev` to run the project. In your terminal you should be given the url of the running instance (usually http://localhost:3000 unless you have something else running).

### 4. Customize the data to make it your own

All of the data for the site is driven via a file at `/src/data/data.tsx`. This is where you'll find the existing content, and updating the values here will be reflected on the site. If you have the site running as described above, you should see these changes reflected on save. The data types for all of these items are given in the same folder in the `dataDef.ts` file. Example images can be found at `src/images/` and are imported in the data file. To change, simply update these images using the same name and location, or add new images and update the imports. 

### 5. Hook up contact form
Due to the variety of options available for contact form providers, I've hooked up the contact form only so far as handling inputs and state. Form submission and the actual sending of the email is open to your own implementation. My personal recommendation for email provider is [Sendgrid.](https://sendgrid.com/)

### 6. Make any other changes you like

Of course, all of the code is there and nothing is hidden from you so if you would like to make any other styling/data changes, feel free!

### 7. Deploy to Vercel and enjoy your new Resume Website

Deploying your new site to Vercel is simple, and can be done by following their guide [here.](https://vercel.com/guides/deploying-nextjs-with-vercel) When you're all done and the build succeeds, you should be given a url for your live site, go there and you'll see your new personal resume website! Congratulations!

## Project Created & Maintained By

### Tim Baker

<a href="https://twitter.com/timbakerx"><img src="https://github.com/aritraroy/social-icons/blob/master/twitter-icon.png?raw=true" width="60"></a><a href="https://instagram.com/tbakerx"><img src="https://github.com/aritraroy/social-icons/blob/master/instagram-icon.png?raw=true" width="60"></a>

[![GitHub followers](https://img.shields.io/github/followers/tbakerx.svg?style=social&label=Follow)](https://github.com/tbakerx/)

## Stargazers

[![Stargazers repo roster for @tbakerx/react-resume-template](https://reporoster.com/stars/dark/tbakerx/react-resume-template)](https://github.com/tbakerx/react-resume-template/stargazers)

## Forkers

[![Forkers repo roster for @tbakerx/react-resume-template](https://reporoster.com/forks/dark/tbakerx/react-resume-template)](https://github.com/tbakerx/react-resume-template/network/members)

