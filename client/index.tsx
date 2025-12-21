import React, { useMemo } from "react";

/**
 * This should trigger a warning from eslint/func-style, but it doesn't
 * show up in the oxlint VS Code extension because the workspace root
 * is the Rails app, and the client/ directory is not detected as what
 * "should" be the root.
 * 
 * This is fixable by setting up the .vscode/settings.json to point
 * oxlint/tsgolint/oxfmt at the right place, but it'd be ideal if we
 * could detect `client/` as the root for oxc to use automatically
 * somehow, maybe by looking at where the `package.json` is located?
 * 
 * See https://github.com/oxc-project/oxc/issues/17227
 */
export function Component() {
  const foo = useMemo(
    () => (_unused: string, used: string) => {
      return used;
    },
    [],
  );

  const value = foo("ignore me", "use me");

  return <div>Hello, world! {value}</div>;
}
