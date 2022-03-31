const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK('dbbb3bf5244425d0af1e', '75654e2b4095f15558b94f9a86336066c7f16480731d58085fe17245133a87ec');
const open = require('open');

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
    }
    
    let link = result.rows[2].ipfs_pin_hash;
    console.log("IPFS Hash: " + link);
    open(`http://ipfs.io/ipfs/${link}`);
}).catch((err) => {
    //handle error here
    console.log(err);
});
