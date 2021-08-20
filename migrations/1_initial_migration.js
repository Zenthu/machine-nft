const Computer = artifacts.require('Computer');

module.exports = function(deployer) {
  deployer.deploy(Computer).then(() => {
    console.log('Computer is deployed.');
  });
};
