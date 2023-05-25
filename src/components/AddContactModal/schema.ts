import {z} from 'zod'

export const addNewContactSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    telephone: z.string()
})

export type TaddNewContactSchema = z.infer<typeof addNewContactSchema>