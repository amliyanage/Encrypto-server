import { PrismaClient } from "@prisma/client";
import { User } from "../module/User";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient()

export async function addUser(u : User) {
    try {
        const hashedPassword = await bcrypt.hash(u.password, 10)
        const hashedMasterPassword = await bcrypt.hash(u.masterPassword, 10)
        const savedUser = await prisma.user.create({
            data : {
                email : u.email,
                password : hashedPassword,
                masterPassword : hashedMasterPassword
            }
        })
        console.log("user saved : " , savedUser)
        return savedUser
    } catch (error){
        console.log("error on save user : " , error)
    }
}