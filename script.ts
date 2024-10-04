import { encryptPass, decryptPass } from 'password-encrypt-decrypt'; 

const secretKey = "yourSecretKey";
const salt = 5;
const password = "yourPassword";

// Encrypting the password
const encryptedPassword = encryptPass(password, secretKey, salt);
console.log("Encrypted Password:", encryptedPassword);

// Decrypting the password
const decryptedPassword = decryptPass(encryptedPassword, secretKey);
console.log("Decrypted Password:", decryptedPassword);
