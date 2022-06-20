const Web3 = require("web3");
const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK('dbbb3bf5244425d0af1e', '75654e2b4095f15558b94f9a86336066c7f16480731d58085fe17245133a87ec');
let contaMetamesk = '';
var web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

const ethereumButton = document.querySelector('#button2');
const showAccount = document.querySelector('#resultado');

ethereumButton.addEventListener('click', () => {
  getAccount();
});

async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  showAccount.innerHTML = account;
  contaMetamesk = account;
  return contaMetamesk;
}
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
            },
            {
                "internalType": "string",
                "name": "_identificacao",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_dataNascimento",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_cpf",
                "type": "string"
            }
        ],
        "name": "setInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
	], "0x9d579CB48eCed73B5Ba4dE607D2D7B0B8FF581f4", {
    from: '0xcda3C0f33c6D92CEa47c2E912399272dc536b24D', // default from address
    gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
});
      
    
	$("#button1").click(function() {
    ABIContract.methods.setInfo($("#nome").val(), $("#identificacao").val(), $("#dataNascimento").val(), $("#cpf").val()).send();
	var nomeUser = $("#nome").val();
	var identificacaoUser = $("#identificacao").val();
	var dataNascimentoUser = $("#dataNascimento").val();
	var cpf = $("#cpf").val();

		const body = {
			nome: nomeUser,
			identificacao: identificacaoUser,
			dataNascimento: dataNascimentoUser,
			CPF: cpf
		};


		const options = {
			pinataMetadata: {
				name: identificacaoUser,
				keyvalues: {
					customKey: identificacaoUser,
					customKey2: identificacaoUser
				}
			},
			pinataOptions: {
				cidVersion: 0
			}
		};
		pinata.pinJSONToIPFS(body, options).then((result) => {
			//handle results here
			console.log('Deu certo essa porra!!');
			console.log(result);
		}).catch((err) => {
			//handle error here
			console.log('Deu errado essa porra!!');
			console.log(err);
		});
    });

	$("#button2").click(function() {
		ABIContract.methods.getNome();
    $("#resultado").html($("#nome").val() + " " + $("#identificacao").val() + " " + $("#dataNascimento").val() + " " + $("#cpf").val() +  ', SEJA BEM-VINDO(A)!');
    }); 

	$("#button3").click(function() {
		let link = $("#ipfsHash").val();
		console.log("Hash escolhido: " + link);
		open(`http://ipfs.io/ipfs/${link}`);
	});

	const filters = {
		status : 'pinned'
	};
	//userPinnedDataTotal
	pinata.pinList(filters).then((result) => {
		//handle results here
		var arrayResultados = result.rows;
		var arrayHash = [];
		for (var i = 0; i<arrayResultados.length; i++){
			arrayHash.push(result.rows[i].ipfs_pin_hash);
			document.querySelector('#list').innerHTML += '<li class="itens">' + arrayResultados[i].metadata['name'] + ' - ' + arrayHash[i] + '</li><br>';
		}
		console.log(arrayHash);
	}).catch((err) => {
		//handle error here
		console.log(err);
	});