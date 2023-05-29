import {z} from 'zod'

export const updateUserSchema = z.object({
    username: z.string().optional(),
    name: z.string().optional(),
    email: z.string().email().optional(),
    telephone: z.string().optional(),
}).partial()

export type TupdateUser = z.infer<typeof updateUserSchema>