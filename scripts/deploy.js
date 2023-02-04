// ethers.js comes built in to HardHat
// ether.js is a library to work with ethereum

// import ethers
const { ethers } = require("hardhat");

async function main() {
  // 1. Tell the script we want to deploy the 'NFT.sol' contract
  const contract = await ethers.getContractFactory("NFT");

  // 2. Deploy it
  const deployedContract = await contract.deploy();
  // 2.1 Wait for deployment to finish
  await deployedContract.deployed();

  // 3. Print the address of the deployed contract
  console.log(`NFT Contract deployed to: ${deployedContract.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
