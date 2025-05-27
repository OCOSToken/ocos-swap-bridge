// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IERC20 {
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
}

contract OCOSSwapBridge {
    address public admin;
    IERC20 public ocosToken;
    address public btcVaultAddress = 0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c; // BTCB on BSC

    constructor(address _ocosToken) {
        admin = msg.sender;
        ocosToken = IERC20(_ocosToken);
    }

    function swapToBTC(uint256 ocosAmount) external {
        require(ocosToken.transferFrom(msg.sender, admin, ocosAmount), "Transfer failed");
    }

    function getVaultBTCAddress() public pure returns (string memory) {
        return "bc1ql49ydapnjafl5t2cp9zqpjwe6pdgmxy98859v2";
    }
}
