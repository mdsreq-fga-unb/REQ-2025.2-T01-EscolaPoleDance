import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .email("Digite um endereço de email válido")
    .nonempty("Email é obrigatório"),

  password: z
    .string()
    .nonempty("Senha é obrigatória")
    .min(6, "Senha deve conter pelo menos 6 caracteres"),
});

export type LoginFormValues = z.infer<typeof LoginSchema>;