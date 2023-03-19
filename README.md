## viqueen.org

built with [confluence-static-site](https://github.com/viqueen/confluence-static-site)

### install it

```bash
nvm install
yarn
```

### run it

- setup site

```bash
yarn site:login
yarn site:env
yarn site:init
```

- extract content

```bash
yarn site:extract
yarn site:extract:emojis
```

- build site

```bash
yarn site:build
yarn site:build --serve # preview with webpack-dev-server
```

- firebase preview

```bash
yarn site:firebase:local
yarn site:firebase:preview
```

- firebase deploy

```bash
yarn site:firebase:deploy
```
