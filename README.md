<h2 align="center"> Todoist - React / Express / MySQL/ React Native </h2>

 For this project, I aim to create a complete working example of a production-ready application. To prioritize functionality of the app, I am replicating Todoist's user interface instead of creating my own custom design. 

 The monorepo includes the following apps and packages:

 - `apps/web/landing`: A 100% static website built with NextJS using its Static Site Generation feature. At build time all React components are rendered statically which makes the site faster and improves SEO. This would be the first site a new user would see, e.g deployed on todoist.com

 - `apps/web/webapp`: A React Single Page Application built with Vite. Since it's behind an auth screen, SEO is no longer necessary here. This is what logged in users see e.g deployed on app.todoist.com

 - `apps/mobile`: A React Native mobile app for Android and iOS devices.

 - `apps/server`: An Express server application for the backend API that serves the mobile app and websites, and connects them to a PostgreSQL database (Project was initially using MySQL. See this code in `mysql` git  branch.).

 - `packages/ui`: A React component library package shared by  the web and mobile apps.
 
 - `packages/config`: Configuration package to be shared among the different apps e.g the tailwind config for the web apps and UI library, and global brand colors.

 I am using `Yarn workspaces` and `Turborepo` for the monorepo. For the UI library package, I am using `esbuild` and `tsup` to bundle the React UI components into esm, cjs and dts types so that they can be reshared among the apps by importing and using them like we would use any other NPM package.

 ##### Demo credentials

 Email: `matt@test.com`

 Password: `tester123`

Note that the backend is deployed on a free serverless instance. As a result, it faces cold start if the app has spin down due to inactivity. 

 ##### Tech stack

`Web` : ReactJS, NextJS, Vite, TypeScript, TailwindCSS, Redux, RTK Query, Vitest

`Mobile`: React Native, Expo, TypeScript

`Backend` : NodeJS, ExpressJS, TypeScript, SuperTest, Vitest

`Database`:  PostgreSQL ( Previously MySQL)

##### Progress - app:web/landing

Desktop

![Desktop](./.github/docs/desktopProgress.jpg)

Tablet, Mobile

![Mobile](./.github/docs/ipadIphoneProgress.jpg) 

##### Progress - app:web/webapp

Desktop webapp auth

![Desktop](./.github/docs/desktop-login.jpg)

Tablet,mobile webapp home

![Mobile](./.github/docs/mobile-tablet-app.jpg)

Desktop webapp home

![Desktop](./.github/docs/desktop-app.jpg)

##### Progress - app:mobile

https://github.com/mathewbushuru/todoist-monorepo/assets/29956810/537df352-07f6-43f0-b492-3221007d1c5d
