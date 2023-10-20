require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("dotenv").config();

module.exports = {
  solidity: "0.8.7",
  networks: {
    goerli: {
      url: "https://rpc.goerli.eth.gateway.fm",
      accounts: [process.env.PRIVATE_KEY],
    },
    sepolia: {
      url: "https://eth-sepolia.public.blastapi.io",
      accounts: [process.env.PRIVATE_KEY],
    },
    bsc: {
      url: "https://bsc-dataseed1.binance.org",
      accounts: [process.env.PRIVATE_KEY],
    },
    eth: {
      url: "https://eth.llamarpc.com",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  xdeploy: {
    contract: "PELEcoinV1",
    salt: "WAGMI",
    signer: process.env.PRIVATE_KEY,
    networks: ["goerli", "sepolia"],
    rpcUrls: ["https://rpc.ankr.com/eth_goerli","https://eth-sepolia.public.blastapi.io"],
    gasLimit: 1.2 * 10 ** 6, // optional; default value is `1.5e6`
  },
};