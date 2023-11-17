<h2 align="center"> Todoist - React / Express / MySQL/ React Native </h2>

 For this project, I aim to create a complete working example of a production-ready application. To prioritize functionality of the app, I am replicating Todoist's user interface instead of creating my own custom design. 

 The monorepo includes the following apps and packages:

 - `apps/web/landing`: An app for the landing page built with React.
 - `apps/web/webclient`: An app for the todo application built with React (only authenticated users);
 - `apps/mobile`: An app built with React Native for iOS and android devices
 - `apps/server`: An app built with Express for the backend server / API that serves the mobile and web apps
 - `apps/database`: A MySQL database used by the server application.
 - `packages/ui`: A React component library package shared by  the web and mobile apps.

 I am using `Yarn workspaces` and `Turborepo` for monorepo support, task/scripts caching and package management.

 ##### Tech stack

`Web` : React + Vite, TypeScript, TailwindCSS, Redux, RTK Query, Vitest

`Mobile`: React Native, Expo, TypeScript

`Backend` : NodeJS, ExpressJS, TypeScript Jest, SuperTest

`Database`: MySQL, PlanetScale

Note that the backend is deployed on serverless architecture so it faces cold start if the app has spin down due to inactivity.