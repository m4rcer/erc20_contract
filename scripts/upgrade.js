const { ethers, upgrades } = require("hardhat");

async function main() {
  // const contractFactory =await ethers.getContractFactory(
  //   "ERC20Upgradeable"
  // );


  // await upgrades.forceImport(

  //   "0x000042CE27f2A2F45396F35622da3A8c2085944a",
  //   contractFactory,
  //   {
  //     kind: "transparent",
  //   },
  // );
  // return;
  const ERC20UpgradableV2 = await ethers.getContractFactory(
    "ERC20UpgradableV2"
  );
  console.log("Upgrading ERC20UpgradableV1...");
  await upgrades.upgradeProxy(
    "0x000042CE27f2A2F45396F35622da3A8c2085944a",
    ERC20UpgradableV2
  );
  console.log("Upgraded Successfully");
}

main();
