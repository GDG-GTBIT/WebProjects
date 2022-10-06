pragma solidity ^0.4.17;

contract Prescription{
    address public Doctor_address;
    string public Patient_Name;
    string public Doctor_Name;
    string[] public medicines;

    function Prescription(string p_name,string d_name) public{
        Doctor_address=msg.sender;
        Patient_Name=p_name;
        Doctor_Name=d_name;
      

    //   We cannot transfer nested arrays so cannot bring the medicine list directly

    }


    function add_Medicines(string name) public {

        require(msg.sender==Doctor_address);

        medicines.push(name);
    }

    function num_medicines() public view returns(uint){
        return medicines.length;
    }

    function get_Medicines(uint index) public view returns(string){

        require(index < medicines.length);
        return medicines[index];

    }


}