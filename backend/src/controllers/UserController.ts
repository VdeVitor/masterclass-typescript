import {Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    { name: 'Vitor', email: 'contatovitorvasconcelos@gmail.com' }
];

export default {
    async index(req: Request, res: Response){
        return res.json(users);
    },

    async create(req: Request, res: Response){
        const emailService = new EmailService();

        emailService.sendMail({
            to: { 
                name: 'Vitor Oliveira', 
                email: 'contatovitorvasconcelos@gmail.com'
            },
            message: { 
                subject: 'Bem-vindo ao Sistema', 
                body: 'Seja bem-vindo'
            }
        });

        return res.send();
    }
}