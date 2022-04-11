const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK('dbbb3bf5244425d0af1e', '75654e2b4095f15558b94f9a86336066c7f16480731d58085fe17245133a87ec');

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