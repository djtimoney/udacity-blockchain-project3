const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "4fce3192cfa7412086d40598ee80751e";
//
// const fs = require('fs');
const mnemonic = "shuffle dad spin hen claim drastic north bachelor glare goose claw intact";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,       // rinkeby's id
        gas: 4600000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000
    } 
  }
};