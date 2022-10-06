const Web3 = require("web3");
const assert = require("assert");
const ganache = require("ganache-cli");
const web3 = new Web3(ganache.provider());

// ES6 Arrow functions are used

let sample_medicine_list = ["Crocin", "Vicks", "Paracetaemol"];

let {
  [":Prescription"]: { bytecode, interface },
} = require("../contracts/compiler.js");

let accounts, info_contract;
beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  info_contract = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ["Patient", "Doctor"],
    })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Testing Prescription Contract", () => {
  it("Checking Deployment of contract", () => {
    console.log("Contract Address : ", info_contract.options.address);
    assert.ok(info_contract);
  });

  it("Checking Patient's and Doctor's Name", async () => {
    let doctor_name = await info_contract.methods.Doctor_Name().call();
    let patient_name = await info_contract.methods.Patient_Name().call();

    assert.equal(doctor_name, "Doctor");
    assert.equal(patient_name, "Patient");
  });

  it("Adding Medicines and extracting Medicine list", async () => {
    await Promise.all(
      sample_medicine_list.map((mov) =>
        info_contract.methods
          .add_Medicines(mov)
          .send({ from: accounts[0], gas: "1000000" })
      )
    );

    let num_medicines = await info_contract.methods.num_medicines().call();
    let medicines = [];

    for (let i = 0; i < num_medicines; i++) {
      // IFFE
      (async () => {
        medicines.push(info_contract.methods.get_Medicines(i).call());
      })();
    }

    medicines = await Promise.all(medicines);

    assert.equal(sample_medicine_list.join(" "), medicines.join(" "));
  });
});
