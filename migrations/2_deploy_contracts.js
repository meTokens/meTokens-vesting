const TokenVesting = artifacts.require('TokenVesting.sol');
const MeVesting = artifacts.require('MeVesting.sol');

module.exports = async function(deployer) {

  // Deploy TokenVesting and Make Owner
    const TokenVesting = await deployer.deploy(
      TokenVesting,
      process.env.BENEFICIARY_ADDRESS,
      process.env.START_TIME,
      process.env.CLIFF_DURATION,
      process.env.DURATION,
      process.env.REVOCABLE
      );

  // Deploy MeVesting
  const MeVesting = await deployer.deploy(
    MeVesting//,
    // process.env.BENEFICIARY_ADDRESS,
    // process.env.DEPOSIT,
    // process.env.ME_TOKEN,
    // process.env.START_TIME,
    // process.env.UNLOCK_TIME,
    // process.env.STOP_TIME
    );
}
