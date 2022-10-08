require("@nomicfoundation/hardhat-chai-matchers");
require("solidity-coverage");

/**
 * A simple task provided by Hardhat as an example.
 * To learn how to create your own, go to https://hardhat.org/guides/create-task.html
 */
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * You need to export an object to set up your config
 * Go to https://hardhat.org/config/ to learn more
 */

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.16",

  /**
   * Allow to configure the way mocha will export test results.
   * @value "spec" for standard export
   * @value "json" for JSON export (used by Github actions to generate a nice report directly on your Github project repository)
   */ 
  mocha: {
    reporter: process.env.MOCHA_REPORTER ?? "spec"
  },

  /**
   * Uncomment this to export specific ABI files to a dedicated folder,
   * for your front-end for example.
   */
  /*
  abiExporter: {
    path: '<DESTINATION_PATH>',
    runOnCompile: true,
    clear: true,
    flat: true,
    only: [':Example$'],
    spacing: 2,
  },
  */
};
