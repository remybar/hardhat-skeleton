This is a basic skeleton to start a new hardhat/solidity project, with:
* some scripts configured in `package.json`
  * `lint`: run `solhint` using rules configured in `.solhint.json`
  * `test`: run all smart contract tests
  * `test-json`: run all smart contracts tests and export results in JSON format (used in Github actions)
  * `coverage`: instrument and run all smart contracts tests to export code coverage
  * `node`: run a local node to be able to deploy your smart contracts locally
  * `local`: deploy your smart contracts locally, using the `scripts/deploy-local.js` script
* CI with Github actions
  * run after each commit/PR on the `master` branch
  * run unit tests and generate a report directly in your Github repository, using the [dorny/test-reporter](https://github.com/dorny/test-reporter) action.
  * run and generate a code coverage report in [codecov](codecov.io) using the [codecov/codecov-action](https://github.com/codecov/codecov-action) action.
  * run static analysis with [slither](https://github.com/crytic/slither) and export a report directly in the `Security` tab of your Github repository. 
    This is done with the [crytic/slither-action](https://github.com/crytic/slither) action which generates a standard SARIF file and then with the [github/codeql-action/upload-sarif](https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github) action to
    load this SARIF file your Github repository.
  * run linting

_This skeleton will evolved regularly, each time I'll find a new interesting thing to add ;-)_
