The package use lerna to manage multi packages.

### start example

``` bash
# preview example at http://localhost:8080
yarn start
```

### build packages

``` bash
yarn run build
```

### build es6 api docs

``` bash
yarn run docs:api

# open preview
cd docs/api
serve -p 6000
```

### build vue docs

``` bash
# build by watching and preview at http://localhost:6060
yarn run docs:vue
```
