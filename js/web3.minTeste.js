var Web3 = require('web3');
var web3Contract = require('web3-eth-contract');
	if (typeof web3 !== 'undefined') {
        var web3 = new Web3(web3.currentProvider);
            
	} else {
        var web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
             
    }
	//console.log(web3);
			   
	web3.eth.getAccounts(function(err, accounts){
    if (err != null) {
      console.log(err);
    }
    else if (accounts.length === 0) {
      console.log('MetaMask is locked');
	}
    else {
     web3.eth.defaultAccount = accounts[0];
	 $("#enderecoDaConta").html(web3.eth.defaultAccount);
	}
   });

   //webTeste = new 
   //console.log(web3Contract);
   var ABIContract = new web3.eth.Contract([
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "getNome",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_nome",
				"type": "string"
			}
		],
		"name": "setNome",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
	], "0xd9145CCE52D386f254917e481eB44e9943F39138");

    console.log(ABIContract);
    console.log('chegou aqui')