# Little Computer NFT Contract

## Getting Started

Requirements
|----|
|node|
|npm|
|truffle|

Install `truffle` cli tool.
```bash
$ npm install -g truffle
```

Open [https://forum.openzeppelin.com/t/create-an-nft-and-deploy-to-a-public-testnet-using-truffle/2961](https://forum.openzeppelin.com/t/create-an-nft-and-deploy-to-a-public-testnet-using-truffle/2961) with your browser to reference.

Clone the repository to your local drive.
```bash
$ git clone https://github.com/johni1228/computer-nft
```

Update your truffle configuration file.

To verify your contract on the network and to make `Read Contract` and `Write contract` buttons visible on the explorer(etherscan.io), you need to update the api-key. You can find your api key from etherscan.io after signing up.

In truffle-config.js, you have to change api-keys with your api-key.
```js
...
  api_keys: {
    etherscan: '<place your api key here>'
  }
...
```

Edit `migrations/1_initial_migration.js` file to update `baseURI` to your own URL.
```js
const MyLittleComputer = artifacts.require('MyLittleComputer');
const baseURI = 'https://computer-nft.herokuapp.com/api/v0/nfts/'; // TODO: update to your heroku app url
...
```

Deploy and verify your contracts on the mainNet.

```bash
$ truffle deploy MyLittleComputer --network mainNet
$ truffle run verify MyLittleComputer --network mainNet
```
