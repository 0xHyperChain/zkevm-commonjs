// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

contract Selfdestruct {

    address receiver;
    uint256 public value;

    function setReceiver(address _receiver) public {
        receiver = _receiver;
    }

    function setVal() public payable {
        value = msg.value;
    }

    function destruct() public {
        selfdestruct(payable(receiver));
    }
}