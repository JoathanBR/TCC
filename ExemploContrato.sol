// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract MyContract {
    string nome;

    constructor() public {
        nome = "Joathan";
    }

    function setNome(string memory _nome) public{
        nome = _nome;
    }

    function getNome() public view returns(string memory){
        return nome;
    }
}