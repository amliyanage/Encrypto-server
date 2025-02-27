import { PrismaClient } from "@prisma/client";
import { User } from "../module/User";

const prisma = new PrismaClient()

export async function addUser(u : User) {
    try {
        const savedUser = await prisma.user.create({
            data : {
                email : u.email,
                password : u.password,
                masterPassword : u.masterPassword
            }
        })
        console.log("user saved : " , savedUser)
        return savedUser
    } catch (error){
        console.log("error on save user : " , error)
    }
}