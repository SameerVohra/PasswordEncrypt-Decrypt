const {encryptPass, decryptPass} = require("password-encrypt-decrypt");


const encPass = encryptPass("TestPassword", "thisisasecretkey", 9);
console.log("Encrypted Password: ", encPass);
const decPass = decryptPass(encPass, "thisisasecretkey");
console.log("Decrypted Password: ", decPass)

