# @scaleds/react-wrapper

(TODO)

## To get it working now

- Run `yarn build` inside `packages/react-wrapper`, this compiles TS inside src/ (which is the output from `@stencil/react-output-target`)
- Run `yarn link` inside `packages/react-wrapper`
- Run `yarn link "@scaleds/react-wrapper"` inside `examples/` to use the local `react-wrapper` package.
- Start the app in `examples/boilerplate-react`

## Notes

Current tsconfig.json values are copy-pasted from https://github.com/ionic-team/stencil-ds-plugins-demo/blob/master/packages/component-library-react/tsconfig.json
