# Darysa - Next.js Project

![Next.js](https://img.shields.io/badge/Next.js-13.5.0-black?style=for-the-badge&logo=next.js)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0.0-blue?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Prettier](https://img.shields.io/badge/Prettier-3.6.2-fuchsia?style=for-the-badge&logo=prettier)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 📖 Descripción

Darysa es un proyecto web moderno construido con **Next.js**, **TailwindCSS** y **TypeScript**, utilizando herramientas como **Prettier**, **ESLint** y **shadcn/ui** para mantener un código limpio y consistente.

El proyecto está pensado para entornos de desarrollo colaborativos y multiplataforma (Windows/Linux/macOS).

---

## 🛠 Tecnologías

- [Next.js 13](https://nextjs.org/)
- [TailwindCSS 4](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Husky](https://typicode.github.io/husky/#/) (opcional, para hooks pre-commit)
- [shadcn/ui](https://ui.shadcn.com/)
- Gestores de paquetes: **pnpm** (recomendado), npm o yarn

---

## ⚡ Scripts

> Se recomienda usar `pnpm`, pero si prefieres `npm` o `yarn`, los comandos equivalentes funcionan igual (`npm run <script>` o `yarn <script>`).

| Comando        | Descripción                                      |
| -------------- | ------------------------------------------------ |
| `pnpm install` | Instala todas las dependencias                   |
| `pnpm dev`     | Levanta el servidor de desarrollo                |
| `pnpm build`   | Genera el build de producción                    |
| `pnpm start`   | Inicia la app en modo producción                 |
| `pnpm lint`    | Ejecuta ESLint para revisar errores de código    |
| `pnpm format`  | Formatea el proyecto usando Prettier (`--write`) |

**Equivalentes en npm/yarn:**

- `npm install` / `yarn install`
- `npm run dev` / `yarn dev`
- `npm run build` / `yarn build`
- `npm run start` / `yarn start`
- `npm run lint` / `yarn lint`
- `npm run format` / `yarn format`

> **Recomendación:** `pnpm` es más rápido y maneja dependencias de forma más eficiente, evitando duplicados en proyectos monorepo.

---

## 🚀 Levantar en Local

1. **Clonar el repositorio:**

```bash
git clone git@github.com:alexanderplaygroup/darysa.git
cd darysa

pnpm install
# npm install
# yarn install

cp .env.example .env.local
# Luego edita .env.local con tus valores

pnpm dev
# npm run dev
# yarn dev

http://localhost:3000
```
