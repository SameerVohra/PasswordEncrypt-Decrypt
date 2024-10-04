/**
 * Encrypts a password using a secret key and salt.
 * @param pass - The password to encrypt.
 * @param secret_key - The secret key for encryption.
 * @param salt - A numeric salt value (0-9).
 * @returns The base64 encoded encrypted password.
 * @throws Error if the salt is 10 or greater.
 */
export declare function encryptPass(pass: string, secret_key: string, salt: number): string;

/**
 * Decrypts an encrypted password using the secret key.
 * @param encryptedPass - The base64 encoded encrypted password.
 * @param secret_key - The secret key used for decryption.
 * @returns The original password.
 */
export declare function decryptPass(encryptedPass: string, secret_key: string): string;
