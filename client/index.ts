// This will warn because of the no-debugger rule
// This will show up in the linter output AND VS Code extension/LSP output.
debugger;

// The below line should have an error because of the typescript/require-await rule.
// It shows up in the CLI, but NOT the VS Code extension/LSP output.
// This is because the VS Code extension/LSP output is unable to find the tsgolint binary
// in a nested repo like this.
async function returnNumber() {
  return 1;
}

const num = returnNumber();
