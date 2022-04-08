## viqueen.org

built with [confluence-site-generator](https://github.com/viqueen/confluence-site-generator)

### configure it

define the following environment properties

- `CONFLUENCE_SITE` : the Confluence cloud instance you want to generate a site from
- `CONFLUENCE_USERNAME` : the username to use to consume Confluence APIs
- `CONFLUENCE_API_TOKEN` : the user personal access token to consume Confluence APIs
- `CONFLUENCE_SPACE` : the Confluence space you want to generate a site from
- `TARGET_SITE` : the domain name of where your generated site will be hosted

### run it

* extract and generate
```bash
npm run site:extract
npm run site:generate
```

* preview
```bash
npm run site:firebase:serve
npm run site:firebase:preview
```

* deploy
```bash
npm run site:firebase:deploy
```


---

### develop it

- setup git hooks

```bash
npx husky install
```
