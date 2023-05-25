import {z} from 'zod'

export const updateContactSchema = z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    telephone: z.string().optional(),
}).partial()

export type TupdateContact = z.infer<typeof updateContactSchema>