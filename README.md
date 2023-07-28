# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js

npx hardhat run scripts/deploy.js --network goerli
npx hardhat run scripts/upgrade.js --network goerli

npx hardhat console --network goerli

const Contract = await ethers.getContractFactory('ERC20UpgradableV1');
const contract = await Contract.attach('0x08c45189c51E6E01dbf2902E07dE5cC1FB5e660A');

```

