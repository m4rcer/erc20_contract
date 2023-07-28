const { ethers, upgrades } = require("hardhat");

async function main() {
  const ERC20UpgradableV1 = await ethers.getContractFactory(
    "ERC20UpgradableV1"
  );
  console.log("Deploying ERC20UpgradableV1...");
  const contract = await upgrades.deployProxy(ERC20UpgradableV1, [], {
    initializer: "initialize",
    kind: "transparent",
  });

  await contract.waitForDeployment();

// await contract.mint('0x238881de1e1A5964C55249a9EDca99F8Da172631',ethers.parseEther("100.0"));


  console.log("ERC20UpgradableV1 deployed to:", await contract.getAddress());
}

main();