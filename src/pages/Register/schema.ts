import {z} from 'zod'

export const registerUserSchema = z.object({
    name: z.string(),
    username: z.string(),
    email: z.string().email(),
    password: z.string(),
    telephone: z.string(),
})

export type TregisterUser = z.infer<typeof registerUserSchema>