//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.16;

/**
 * A simple contract with a dummy function.
 */
contract Example {
    function getName() public pure returns(string memory) {
        return "Example";
    }
}
