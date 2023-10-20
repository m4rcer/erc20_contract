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
npx hardhat run scripts/mint.js --network bsc

npx hardhat console --network goerli

const Contract = await ethers.getContractFactory('ERC20UpgradableV2');
const contract = await Contract.attach('0x000042CE27f2A2F45396F35622da3A8c2085944a');
await contract.setPrice('31000000000000');

const Contract = await ethers.getContractFactory('ERC20UpgradableV2');
const contract = await Contract.attach('0xEf90092CF9B435593e7c326c62Cf0bcB59E737ae');
await contract.setPrice('27000');
```

