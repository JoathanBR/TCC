// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract MyContract {
    string nome;
    string identificacao;
    string dataNascimento;
    string cpf;

    constructor() public {
        nome = "Joathan";
        identificacao = "0011222";
        dataNascimento = "29/12/1999";
        cpf = "000.111.333-44";
    }

    function setInfo(string memory _nome, string memory _identificacao, string memory _dataNascimento, string memory _cpf) public{
        nome = _nome;
        identificacao = _identificacao;
        dataNascimento = _dataNascimento;
        cpf = _cpf;
    }

    function getNome() public view returns(string memory){
        return nome;
    }
}