import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();


class validation {
    emailValidation(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            return true;
        } else {

            return false;
        }
    }


    passwordValidation(password: string): boolean {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        if (passwordRegex.test(password)) {
            return true;
        } else {
            return false;
        }
    }

    nameValidation(name: string): boolean {
        const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        if (nameRegex.test(name)) {
            return true;
        } else {
            return false;
        }
    }


    ageValidation(age: string): boolean {
        const ageRegex = /^(0?[1-9]|[1-9][0-9])$/;
        if (ageRegex.test(age)) {
            return true;
        } else {                                 // between 1 and 99
            return false;
        }
    }


    async useremailreg(email: string) {
        const responseuser = prisma.user.findMany({
            where: {
                email: email
            }

        })
        if (await responseuser) {
            return false
        } else {
            return true
        }
    }







}

export default new validation;