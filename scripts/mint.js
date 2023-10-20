const { ethers, upgrades } = require("hardhat");

async function main() {
  const Contract = await ethers.getContractFactory("ERC20UpgradableV2");
  const contract = await Contract.attach(
    "0x000042CE27f2A2F45396F35622da3A8c2085944a"
  );

  let addresses = ['0x570fDbAA803bd18156498D672dFA1c3567D8fd84',
  '0xA464708e4A5ffa63843D7F302fBe08e6b4439e48',
  '0xF67e63aF69786F7417F85559FAD7bab5452d4c03',
  '0x832Ea61445ED5C5E3E756DC93287701AC7DF77B9',
  '0xbEF4C21583C026dA4B4E54ffa0e1BCB572a4e2C1',
  '0x28Ab6640E1a64896D8FD36d8f91BD319807dC6E0',
  '0x6B64Ad57Ac29Eb61EB5c10d4dd13A738E5F3f497',
  '0xD1D1b359C1161c331958D6C079A1E38Cb60DFa2f',
  '0x46E38c8f85BDD08648175496e5B108d4f71f8B8e',
  '0x125cEC8011915FDA158C2ea7ADeaF640099fC366',
  '0xAEd3A2fB5fa54169333967E5D9813b9f0f63145e'
  ];

  let object = {
    success: 0,
    failure: 0,
    successList: [],
    failureList: [],
  };

  for (let index = 0; index < addresses.length; index++) {
    const add = addresses[index];

    try {
      await contract.mint(add, ethers.parseEther("1000.0"));
      object.successList.push(add);
      object.success += 1;

      console.log(`Success mint ${add}`);
    } catch (e) {
      console.log(e);
      object.failureList.push(add);
      object.failure += 1;
      console.log(`Error while mint to ${add}`);
    }
  }

  console.log(object);

  // console.log("ERC20UpgradableV1 deployed to:", await contract.getAddress());
}

main();
