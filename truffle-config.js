require('babel-register');
require('babel-polyfill');
var HDWalletProvider=require('@truffle/hdwallet-provider')
const mnemonic= require("fs").readFileSync('.secret').toString().trim();

module.exports = {
  networks: {
    // development: {
    //   host: "127.0.0.1",
    //   port: 7545,
    //   network_id: "*" // Match any network id
    // },
    goerli:{
      provider: ()=>new HDWalletProvider(mnemonic, "https://goerli.infura.io/v3/"),
      network_id: "*",
      production: true,
      timeoutBlocks: 50000,
      project_id: 1004,
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
