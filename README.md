# express-project-template

This is an express project template containing the following

- Typescript
- Eslint
- Prettier
- Mocha
- Chai
- Gitub Actions

The src folder should contain all the logic code including routes, authentication, database connection, database mapping, services etc.

My file structure

Root

- src
  - routes
  - services
  - interfaces
  - middlewares
- test

to start the project please run

```bash
npm install
npm run start:dev
```

incase you want to fix issues with eslint, run the following

```bash
npm run eslint
```

to enable prettier on autosave please add the following inside settings.json

```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

To run the test

```bash
npm run test
```

This project has also github actions for the one who wants it

To use the project for yourself remember to delete the git folder and push the project to your own github repo

Everyone are welcome to fork and use the project.
