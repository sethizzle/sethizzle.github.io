const SmartContract = artifacts.require("OpexBots");

module.exports = function (deployer) {
  deployer.deploy(SmartContract, "Name", "Symbol", "https://");
};
