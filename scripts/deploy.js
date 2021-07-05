const { network: { provider }, expect, artifacts } = require('hardhat');
const fs = require('fs')

require('dotenv').config();

const MeVesting = artifacts.require("MeVesting");

async function main() {

    // deploy vesting contract
    let meVesting = await MeVesting.new();
    console.log(meVesting.address);  //  0x70e0bA845a1A0F2DA3359C97E0285013525FFC49

}


main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });