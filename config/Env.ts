import dotenv from 'dotenv'

if (dotenv.config().error !== undefined) throw new Error("there is no .env file")

export default class Env
{
    static PORT: number = Number(process.env.PORT)
}