import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .email("Digite um endereço de email válido")
    .nonempty("Email é obrigatório"),

  password: z
    .string()
    .nonempty("Senha é obrigatória")
});

export type LoginFormValues = z.infer<typeof LoginSchema>;