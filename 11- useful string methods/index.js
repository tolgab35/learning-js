// useful string properties & methods


let userName = "Tolga Boz";
let phoneNumber = "123-456-7890";

// console.log(userName.length); // 9
// console.log(userName.charAt(0)); // T
// console.log(userName.charAt(2)); // l
// console.log(userName.indexOf("o")); // 1
// console.log(userName.lastIndexOf("o")); // 7

// userName = userName.trim(); // gets rid of any empty spaces
                            // before and after userName

// userName = userName.toUpperCase(); // TOLGA BOZ
// userName = userName.toLowerCase(); // tolga boz

phoneNumber = phoneNumber.replaceAll("-", "/"); // 123/456/7890

console.log(phoneNumber);