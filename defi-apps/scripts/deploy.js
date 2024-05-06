const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    const tokenContractFactory = await ethers.getContractFactory("SimpleDeFiToken");
    const token = await tokenContractFactory.deploy();
    console.log("SimpleDefiToken Contract Address:", (await token.getAddress()));
    console.log("Deployer Address:", deployer.address);
    console.log("Deployer Balance:", (await deployer.provider.getBalance(deployer.address)).toString());
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});