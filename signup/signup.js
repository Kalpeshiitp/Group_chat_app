function postUserData(event) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phone-number").value;
  const password = document.getElementById("Password").value;
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Phone Number:", phoneNumber);
  console.log("Password:", password);
  const userDetailsObj = {
    name: name,
    email: email,
    phoneNumber: phoneNumber,
    password: password,
  };
  console.log("userDetailsObj>>>>", userDetailsObj);
}
