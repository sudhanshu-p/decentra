const MintContract=artifacts.require("CertficateMaker");
module.exports= function (deployer){
    deployer.deploy(MintContract);
    
}