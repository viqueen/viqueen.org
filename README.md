## viqueen.org

built with [confluence-static-site](https://github.com/viqueen/confluence-static-site)

### install it

```bash
nvm install
npm install

npx npm-force-resolutions
```

### run it

- extract content

```bash
npm run site:extract
npm run site:extract:emojis
```

- build site

```bash
npm run site:build
npm run site:build -- --serve # preview with webpack-dev-server
```

- firebase preview

```bash
npm run site:firebase:local
npm run site:firebase:preview
```

- firebase deploy

```bash
npm run site:firebase:deploy
```
