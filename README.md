# micro-fe-2022


###

In sub project, do not set `eager`, and use bootstrap.tsx, so sub project will try use `Àpp` 's  react and react-dom
```js
shared: {
  react: { singleton: true, requiredVersion: "^18.2.0",},
  "react-dom": { singleton: true,  requiredVersion: "^18.2.0",}
},
```

In app aslo need set share and use bootstrap
```js
shared: {
  react: { singleton: true, requiredVersion: "^18.2.0", eager: true},
  "react-dom": { singleton: true,  requiredVersion: "^18.2.0", eager: true}
},
```