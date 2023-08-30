# Reactin alkeet

# Table of Contents

- [Vitejs](#Vitejs)
- [React-app](#React-app)
- [Component](#Component)
- [JSX](#JSX)
- [Many-components](#Many-components)
- [Errors](#Errors)
- [Note](#Note)
- [Don't-render-object](#Don't-render-object)

# Install [Vitejs](https://vitejs.dev/)

```
install:
npm create vite@latest part1 -- --template react
cd part1
npm install

run vite:
npm run dev

--
Console:
  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help

```

## Vite

Vite is a build tool and development server that aims to provide a faster and leaner development experience for modern web projects. It was created by Evan You, the same person who created the Vue.js framework. The name "Vite" comes from the French word for "quick" or "fast," which is a nod to the tool's main selling point: speed.

## Key Features:

### Fast Development

Extremely fast development startup and reload times thanks to its use of native ES modules in the browser.

### Hot Module Replacement (HMR)

Provides out-of-the-box support for HMR, which allows you to see changes without a full page reload.

### Rich Plugin Architecture

Built on top of Rollup plugins, Vite's plugin system allows you to extend its functionality easily.

### Optimized Builds

Uses Rollup for the final build, giving you a highly optimized and tree-shaken production output.

### Framework Agnostic

While it was initially tailored for Vue.js, Vite is framework-agnostic and has official templates and plugins for React, Svelte, and other popular frameworks.

### TypeScript Support

Provides first-class TypeScript support without requiring additional configuration.

### CSS Pre-Processing

Supports various CSS preprocessors like SCSS, Less, and Stylus.

### Static Asset Handling

Has a special handling mechanism for static assets like images, fonts, etc., allowing you to reference them easily in your code.

## How It Works:

### Development

During development, Vite serves files over native ES modules, allowing the browser to directly import them. This eliminates the need for a bundler during development, resulting in faster load times.

### Production

For production, Vite uses Rollup to bundle the files, benefiting from its advanced tree-shaking and code-splitting capabilities.

# React-app
