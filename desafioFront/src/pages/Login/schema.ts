import {z} from 'zod'

export const schema = z.object({
    username: z.string(),
    password: z.string().nonempty("Coloque sua senha")
})

export type Tlogin = z.infer<typeof schema>