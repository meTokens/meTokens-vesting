# meVesting Contract

## Rinkeby

- [MeVesting.sol](https://rinkeby.etherscan.io/address/#code): 

## Mainnet
- [MeVesting.sol](https://etherscan.io/address/0x01#code): 0x01

# Deployment Notes
In order to setup a stream, first deploy using compiler version ^5.12.0 in remix, paste the flat file. Compile meVesting.sol, then tab over to deploy and switch the environment to Injected Web3. Update the "Contract" field to `meVesting - meVesting.sol` and simply hit deploy and the resultant file may need verification, so do so using the file in the field, where instructed. Be sure to select the proper pragma version  `5.12.0` and match optimization (if used, which is not required). This will result in a verified contract, like [so](https://rinkeby.etherscan.io/address/0xa5042cee3da233f0f39f190368c49d92d96b637a#code).

## Creating a New Stream
- `createSteam` function inputs:
    - (1) `recipient` address: aka your investor's address.
    - (2) `deposit` amount: how much to deposit to the stream, aka how many tokens the investor purchased.
    - `tokenAddress` address: meTokens address.
    - `startTime` and `endTime` (UNIX timrestamp): (use [this as a reference](https://www.unixtimestamp.com/index.php) for the UNIX timestamp for the `startTime` of the stream accumulation and the `endTime` of the stream period. 
- **note**: withdrawal is not accessible until after you decide to transact `turnOnWithdrawals`.

## How to Read the Contract (for Investors)
- (More details coming soon)