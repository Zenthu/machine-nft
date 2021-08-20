const MyLittleComputer = artifacts.require('MyLittleComputer');
const baseURI = 'http://54.146.118.202/computer-api/v0/nfts/';

module.exports = function(deployer) {
  deployer.deploy(MyLittleComputer, baseURI).then(() => {
    console.log('MyLittleComputer is deployed.');
  });
};
