// Request breakdown:
// Create a object that cannot be acccessed directly, with two properties: name and SSN. Only name can accessed through a public function, SSN not accessible at all.

// Solution:
// - Create an outer function with private data.
// - Create object with name and SSN.
// - Create getName function to get the name info.
// - Return name using getName

function patientInfo(_name, _ssn) {
  let PII = {
    names: _name,
    ssn: _ssn,
  };

  return {
    getName: function () {
      return PII.names;
    },
  };
}

const patient1 = patientInfo("Elhadji", 345567678);
const patient2 = patientInfo("John", 704567678);

console.log(patient2.names);
console.log(patient2._ssn);
console.log(patient2.getName());
