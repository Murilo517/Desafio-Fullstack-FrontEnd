import {z} from 'zod'

export const schema = z.object({
    email: z.string().email("Insira um email válido"),
    password: z.string().nonempty("Coloque sua senha")
})

export type Tlogin = z.infer<typeof schema>