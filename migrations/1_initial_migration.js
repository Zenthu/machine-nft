const MyLittleComputer = artifacts.require('MyLittleComputer');

module.exports = function(deployer) {
  deployer.deploy(MyLittleComputer).then(() => {
    console.log('MyLittleComputer is deployed.');
  });
};
