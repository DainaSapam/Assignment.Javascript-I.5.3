var employee = {
	name: "Emp1", 
	age: 30,
	salary: 50000,
	address: {
		city: "Bangalore",
		state: "Karnataka",
		pincode: "560047"
	}
};

console.log("Name: "+employee.name);
console.log("Age: "+employee.age);
console.log("Salary: "+employee.salary);
console.log("Address: "+employee.address.city+","+employee.address.state+","+employee.address.pincode);