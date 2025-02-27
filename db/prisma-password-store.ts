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

export async function update(p : Passwords){
    try{
        const updatedPassword = await prisma.passwords.update({
            where : {
                id : p.id
            },
            data : {
                emailOrUsername : p.emailOrPassword,
                password : p.password,
                website : p.website,
            }
        })
        console.log("password updated : " , updatedPassword)
        return updatedPassword
    } catch (error){
        console.log("error on update password : " , error)
    }
}

export async function deletePassword(id: number){
    try{
        const deletedPassword = await prisma.passwords.delete({
            where : {
                id : id
            }
        })
        console.log("password deleted : " , deletedPassword)
        return deletedPassword
    } catch (error){
        console.log("error on delete password : " , error)
    }
}