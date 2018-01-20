module.exports = [ { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string", "value": "PGKT" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint8", "value": "2" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "standard", "outputs": [ { "name": "", "type": "string", "value": "Token 0.1" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalPgkt", "outputs": [ { "name": "", "type": "uint256", "value": "100000" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalPgktInCirculation", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string", "value": "PGKT" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "recipientAcc", "type": "address" }, { "name": "amount", "type": "uint256" } ], "name": "pay", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "accountList", "outputs": [ { "name": "telephoneNumber", "type": "uint256", "value": "0" }, { "name": "isTelephoneAccount", "type": "bool", "value": false }, { "name": "live", "type": "bool", "value": false }, { "name": "authenticationToken", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "amount", "type": "uint256" } ], "name": "buyKT", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" }, { "name": "", "type": "address" } ], "name": "allowance", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "amount", "type": "uint256" } ], "name": "sellKT", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_telNumber", "type": "uint256" } ], "name": "requestAccount", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "treasurer", "outputs": [ { "name": "", "type": "address", "value": "0xd8ae010ef21083258986bfef3eb3655630df6122" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [ { "name": "initialSupply", "type": "uint256", "index": 0, "typeShort": "uint", "bits": "256", "displayName": "initial Supply", "template": "elements_input_uint", "value": "100000" }, { "name": "coinTokenName", "type": "string", "index": 1, "typeShort": "string", "bits": "", "displayName": "coin Token Name", "template": "elements_input_string", "value": "PGKT" }, { "name": "decimalUnits", "type": "uint8", "index": 2, "typeShort": "uint", "bits": "8", "displayName": "decimal Units", "template": "elements_input_uint", "value": "2" }, { "name": "coinTokenSymbol", "type": "string", "index": 3, "typeShort": "string", "bits": "", "displayName": "coin Token Symbol", "template": "elements_input_string", "value": "PGKT" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "payable": false, "stateMutability": "nonpayable", "type": "fallback" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "accountNumber", "type": "address" }, { "indexed": false, "name": "accountTelephoneNumber", "type": "uint256" } ], "name": "AccountCreated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "senderAccount", "type": "address" }, { "indexed": false, "name": "senderTel", "type": "uint256" }, { "indexed": false, "name": "recipientAddress", "type": "address" }, { "indexed": false, "name": "recipientTel", "type": "uint256" }, { "indexed": false, "name": "valueCents", "type": "uint256" } ], "name": "FundsSent", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "recipientAddress", "type": "address" }, { "indexed": false, "name": "recipientTel", "type": "uint256" }, { "indexed": false, "name": "valueCents", "type": "uint256" } ], "name": "FundsBought", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "senderAccount", "type": "address" }, { "indexed": false, "name": "senderTel", "type": "uint256" }, { "indexed": false, "name": "valueCents", "type": "uint256" } ], "name": "FundsBurnt", "type": "event" } ]