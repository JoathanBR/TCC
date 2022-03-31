const Web3 = require("web3");

var web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

web3.eth.getAccounts(function(err, accounts){
    if (err != null) {
      console.log(err);
    }
    else if (accounts.length === 0) {
      console.log('MetaMask is locked');
	}
    else {
     web3.eth.defaultAccount = accounts[3];
     //document.querySelector('#enderecoDaConta').innerHTML = web3.eth.defaultAccount;
	 $("#enderecoDaConta").html(web3.eth.defaultAccount);
	}
   });

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
	], "0xB15aA63B540d81DaF96a58CC6E225aeC3edF24dB", {
    from: '0x0618eb3594b760B32374Fb2Ec74CCd91415eb7d8', // default from address
    gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
});
      
    
	$("#button1").click(function() {
    ABIContract.methods.setNome($("#nome").val()).send();
    });

	$("#button2").click(function() {
		ABIContract.methods.getNome();
    $("#resultado").html($("#nome").val() + ', SEJA BEM-VINDO(A)!');
    }); 

	$("#button3").click(function() {
		let link = $("#ipfsHash").val();
		console.log("Hash escolhido: " + link);
		open(`http://ipfs.io/ipfs/${link}`);
	});