## My Project

TODO: Fill this README out!

Be sure to:

* Change the title in this README
* Edit your repository description on GitHub

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This project is licensed under the Apache-2.0 License.
# Welcome to `awscdk-jsii-template`

This repository template helps you generate JSII construct library for AWS CDK.


## Confiuguration

1. customize your `.projenrc.js`
1. run `npx projen` to generate the `package.json` and `.github/workflows` from `.projenrc.js`
2. `yarn install` to install all required npm packages


## Integration tests

1. run `yarn watch` in a seperate terminal
2. edit `test/integ.api.ts`
3. `cdk diff` and `cdk deploy`

```bash
cdk --app 'test/integ.api.js' diff
cdk --app 'test/integ.api.js' deploy
```

4. validate the stack

## Unit tests

1. edit `test/*.test.ts`
2. run `yarn test`


## Usage

| Command          | Description                                       |
|------------------|---------------------------------------------------|
|`yarn install`    |Install dependencies                               |
|`yarn compile`    |Compile to JavaScript                              |
|`yarn watch`      |Watch for changes and compile                      |
|`yarn test`       |Run tests                                          |
|`yarn run package`|Create `dist` with bundles for all languages       |
|`yarn build`      |Compile + test + package                           |
|`yarn bump`       |Bump a new version (based on conventional commits) |
|`yarn compat`     |Run API compatibility check against latest         |

## GitHub Workflows

- [Build](./.github/workflows/build.yml): when a PR is created/updated, runs `yarn build`
- [Release](./.github/workflows/release.yml): `yarn build` and publish to all package managers for every commit to `master` (ignore if current version is already released).

