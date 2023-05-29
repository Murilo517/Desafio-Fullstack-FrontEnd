import {z} from 'zod'

export const schema = z.object({
    username: z.string().nonempty("*O username é obrigatório"),
    password: z.string().nonempty("*Coloque sua senha")
})

export type Tlogin = z.infer<typeof schema>