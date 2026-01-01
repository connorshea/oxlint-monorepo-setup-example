# Monorepo example with `client/` directory for frontend code

This is a Ruby on Rails 8.1 API-only application with a React frontend in the `client/` directory.

For testing with oxlint/oxfmt/tsgolint to ensure we can get it working correctly for a client/ dir, preferably with minimal extra setup.

To install dependencies, run:

```bash
bundle install # can skip this probably, you don't really need to care about the Rails app.
cd client
npm install
npm run lint # run oxlint (with type-aware rules)
npm run fmt # (run oxfmt)
npm run tsc # typecheck with ts5.9
npm run tsgo # typecheck with ts7
```

NOTE: Ensure that you have the typeAware flag enabled when running oxlint and in the LSP/VS Code config, otherwise the typescript/require-await rule will not work correctly. Also ensure that disableNestedConfig is *not* enabled in VS Code/the LSP.

You should see a warning for the `no-debugger` rule and an error for the `typescript/require-await` rule if everything is fixed. As of Dec 31, 2025, you will only see the error in the CLI output, not in the VS Code extension/LSP output, due to limitations with finding the tsgolint binary in nested repos.
