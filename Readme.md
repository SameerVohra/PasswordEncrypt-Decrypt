```markdown
# Password Encrypt/Decrypt

A simple Node.js module for encrypting and decrypting passwords using a secret key and salt. This module uses XOR operations and Base64 encoding to ensure the security of your passwords.

## Installation

To install the package, run the following command:

```bash
npm install password-encrypt-decrypt
```

## Usage

You can use this module by requiring it in your JavaScript file:

```javascript
const { encryptPass, decryptPass } = require('password-encrypt-decrypt');
```

### Encrypting a Password

To encrypt a password, use the `encryptPass` function:

```javascript
const secret_key = "your_secret_key"; // Your secret key
const salt = 9; // Salt value for added security
const password = "YourPassword"; // Password to be encrypted

const encryptedPassword = encryptPass(password, secret_key, salt);
console.log("Encrypted Password:", encryptedPassword);
```

### Decrypting a Password

To decrypt an encrypted password, use the `decryptPass` function:

```javascript
const decryptedPassword = decryptPass(encryptedPassword, secret_key);
console.log("Decrypted Password:", decryptedPassword);
```

## Functions

### `encryptPass(pass, secret_key, salt)`

- **Parameters:**
  - `pass`: The password to encrypt (string).
  - `secret_key`: The secret key used for encryption (string).
  - `salt`: A numerical value used for added security (number).

- **Returns:** A Base64 encoded string representing the encrypted password.

### `decryptPass(encryptedPass, secret_key)`

- **Parameters:**
  - `encryptedPass`: The Base64 encoded encrypted password (string).
  - `secret_key`: The secret key used for decryption (string).

- **Returns:** The original password (string).

## Example

Here’s a complete example demonstrating both encryption and decryption:

```javascript
const { encryptPass, decryptPass } = require('password-encrypt-decrypt');

const secret_key = "thisisasecretkey"; // Your secret key
const salt = 9; // Salt value
const password = "TestPass"; // Password to encrypt

const encryptedPassword = encryptPass(password, secret_key, salt);
console.log("Encrypted Password:", encryptedPassword);

const decryptedPassword = decryptPass(encryptedPassword, secret_key);
console.log("Decrypted Password:", decryptedPassword);
```
## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.
```
