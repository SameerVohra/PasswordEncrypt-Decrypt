function encryptPass(pass, secret_key, salt) {
  if (salt > 9) {
    throw new Error("Salt should be less than 10");
  }
  let newPass = "";

  while (secret_key.length < pass.length) {
    secret_key += secret_key;
  }

  let newKey = "";

  for (let i = 0; i < secret_key.length; i++) {
    let charCode = secret_key.charCodeAt(i);
    newKey += String.fromCharCode(charCode ^ (salt + (secret_key.length ^ i)));
  }

  secret_key = secret_key.substring(0, pass.length);

  for (let i = 0; i < pass.length; i++) {
    const encChar = String.fromCharCode(pass.charCodeAt(i) ^ secret_key.charCodeAt(i));
    newPass += encChar;
  }

  newPass += salt.toString();

  const base64Encoded = Buffer.from(newPass).toString('base64');

  return base64Encoded;
}

function decryptPass(encryptedPass, secret_key) {
  const decoded = Buffer.from(encryptedPass, 'base64').toString();
  const salt = parseInt(decoded[decoded.length - 1]);
  let originalPass = "";
  const actualEncryptedPass = decoded.substring(0, decoded.length - 1);

  let newKey = "";

  while (secret_key.length < actualEncryptedPass.length) {
    secret_key += secret_key;
  }

  for (let i = 0; i < secret_key.length; i++) {
    let charCode = secret_key.charCodeAt(i);
    newKey += String.fromCharCode(charCode ^ (salt + (secret_key.length ^ i)));
  }

  secret_key = secret_key.substring(0, actualEncryptedPass.length);

  for (let i = 0; i < actualEncryptedPass.length; i++) {
    const decChar = String.fromCharCode(actualEncryptedPass.charCodeAt(i) ^ secret_key.charCodeAt(i));
    originalPass += decChar;
  }

  return originalPass;
}

module.exports = { encryptPass, decryptPass };
