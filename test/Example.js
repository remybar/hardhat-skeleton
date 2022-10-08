const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Example", () => {
    let factory, contract;

    before(async() => {
        factory = await ethers.getContractFactory("Example");
    });

    beforeEach(async () => {
        contract = await factory.deploy();
        await contract.deployed();
    });

    describe("Get Name", () => {
        it ("Should return the name of the smart contract", async () => {
            expect(await contract.getName()).to.equal("Example");
        });
    });
});
