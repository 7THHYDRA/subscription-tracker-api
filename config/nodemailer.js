import nodemailer from 'nodemailer';
import {EMAIL_PASSWORD} from './env.js';

export const accountEmail = 'subscriptiontracker2026@gmail.com';

const transporter = nodemailer.createTransport(
    {service: 'gmail',
        auth: {
            user: 'subscriptiontracker2026@gmail.com',
            password: EMAIL_PASSWORD, 
        }
    }
);

export default transporter;