import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

import { HardhatUserConfig } from 'hardhat/types';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';

const INFURA_API_KEY = process.env.INFURA_API_KEY || "";
const mnemonic = process.env.MNEMONIC;

const accounts = {
  mnemonic,
};

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers:
  [
    { version: "0.5.12", settings: {} },
    { version: "0.6.8", settings: {} },
    { version: "0.7.1", settings: {} },
  ],
  },
  namedAccounts: {
    deployer: 0,
  },
  networks: {
    hardhat: {},
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
      accounts
    },
  },
};

export default config;