"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const password_encrypt_decrypt_1 = require("password-encrypt-decrypt");
const secretKey = "yourSecretKey";
const salt = 5;
const password = "yourPassword";
// Encrypting the password
const encryptedPassword = (0, password_encrypt_decrypt_1.encryptPass)(password, secretKey, salt);
console.log("Encrypted Password:", encryptedPassword);
// Decrypting the password
const decryptedPassword = (0, password_encrypt_decrypt_1.decryptPass)(encryptedPassword, secretKey);
console.log("Decrypted Password:", decryptedPassword);
