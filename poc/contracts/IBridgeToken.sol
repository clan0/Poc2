// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IBRidgeToken{

     function initialize() external;
      function mint(address _to, uint256 _amnt) external;
      function burn(address _from, uint256 _amnt) external;
      function balanceOf(address _account) external view returns (uint256);
      


    
}

// ganache-cli --fork https://speedy-nodes-nyc.moralis.io/403a67d18c5cd7be0531953c/eth/mainnet  --unlock 0x70aF29f754988473fcAbA6E01AbfbafF871046d1 --networkId 1
