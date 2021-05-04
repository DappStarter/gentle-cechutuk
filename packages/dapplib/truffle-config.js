require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan random night home install photo food ghost'; 
let testAccounts = [
"0xcde5e768d71d170cd07ac9fee5c76fc40ee1815d811f46618bbc6cc603afba14",
"0x95856da8d08a43a2c67a64f4a629020f471884f3d508b4ad433dc7cdaec6e467",
"0xcfe6bfb009ef8d939b39dacdf6dab2ae3b2e658400a8dc7edc5bc6bb433e54b3",
"0x710e1697cd59cb7fe9be38f1bb5c08b6b6b8c91c86128280671778e4454f5a07",
"0xcee6874a13e7bf511b81353eb1d60733a3bcb844634a7b65985b0532836bf57d",
"0x79f34568c31739bb89d1b911a5902c57acbae29a8f4217f160a3a08ae95ca903",
"0xc4cd07a6b9906803bf68e89ed2fe2b28cba1eb83cb29f4f577b53c2ccfbdd8c4",
"0x0a3d4c3626dd3cb4d5a45d7d912327f0a8beba8ffeae91b6d9f2a4190ed78039",
"0x855c2f8c06ada9e5dbb368de69d4bb843a10ba7f5122ac266136a3bf909ce1e8",
"0x53327f94bdedcd39db779b64bf48966b3f17283bfa18f7ea00f4278f61a7b572"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
