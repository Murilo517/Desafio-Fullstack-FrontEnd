import {z} from 'zod'

export const registerUserSchema = z.object({
    name: z.string().nonempty("*Coloque um nome"),
    username: z.string().nonempty("*Coloque um apelido/username"),
    email: z.string().email("*Forneça um Email válido").nonempty("*Digite um Email válido"),
    password: z.string().regex(/(?=.*?[a-z])/, '*Necessário ter ao menos uma letra')
    .regex(/(?=.*?[0-9])/, '*Necessário ter ao menos um número')
    .regex(/(?=.*?[#?!@$%^&*-])/, '*Necessário ter ao menos um símbolo'),
    telephone: z.string().nonempty("*Forneça um número"),
})

export type TregisterUser = z.infer<typeof registerUserSchema>