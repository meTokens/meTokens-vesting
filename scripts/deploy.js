const { artifacts } = require('hardhat');

const MeVesting = artifacts.require("MeVesting");

async function main() {
    // deploy vesting contract
    let meVesting = await MeVesting.new();
    console.log(meVesting.address);
}


main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
