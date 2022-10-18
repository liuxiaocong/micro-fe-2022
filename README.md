# micro-fe-2022


###

In sub project, do not set `eager`, and use bootstrap.tsx, so sub project will try use `Àpp` 's  react and react-dom
```js
shared: {
  react: { singleton: true, requiredVersion: "^18.2.0",},
  "react-dom": { singleton: true,  requiredVersion: "^18.2.0",}
},
```

In app do not need set share?