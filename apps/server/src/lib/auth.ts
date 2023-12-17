import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export async function hashPassword(plainPassword: string) {
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(plainPassword,  salt);
    return hashedPassword;
}