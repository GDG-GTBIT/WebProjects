const fs = require("fs");
const path = require("path");
let contract_path = path.resolve(__dirname, "contract", "Prescription.sol");

let contract = fs.readFileSync(contract_path, "utf-8");

let solidity_compiler = require("solc");

let compiled_contract = solidity_compiler.compile(contract, 1);

module.exports = compiled_contract.contracts;

console.log(compiled_contract);
