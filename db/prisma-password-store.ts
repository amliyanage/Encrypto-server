import { PrismaClient } from "@prisma/client";
import { Passwords } from "../module/Password";

const prisma = new PrismaClient()

export async function add(p : Passwords){
    try{
        const savedPassword = await prisma.passwords.create({
            data : {
                emailOrUsername : p.emailOrPassword,
                password : p.password,
                website : p.website,
                userId : p.userId
            }
        })
        console.log("password saved : " , savedPassword)
        return savedPassword
    } catch (error){
        console.log("error on save password : " , error)
    }
}