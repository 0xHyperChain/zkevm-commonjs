require("@nomiclabs/hardhat-waffle");
DEFAULT_MNEMONIC = "test test test test test test test test test test test junk";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.7",
      },
      {
        version: "0.8.9",
      },
      {
        version: "0.6.11",
      }
    ]
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      accounts: {
        mnemonic: DEFAULT_MNEMONIC,
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20,
      },
    },
  }
};

