const { ethers, upgrades } = require("hardhat");

async function main() {
  const ERC20UpgradableV2 = await ethers.getContractFactory(
    "ERC20UpgradableV2"
  );
  console.log("Upgrading ERC20UpgradableV1...");
  await upgrades.upgradeProxy(
    "0x08c45189c51E6E01dbf2902E07dE5cC1FB5e660A",
    ERC20UpgradableV2
  );
  console.log("Upgraded Successfully");
}

main();