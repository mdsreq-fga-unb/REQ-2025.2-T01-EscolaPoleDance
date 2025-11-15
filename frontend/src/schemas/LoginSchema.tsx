import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .nonempty("Email é obrigatório")
    .email("Digite um endereço de email válido"),

  password: z
    .string()
    .nonempty("Senha é obrigatória")
    .min(6, "Senha deve conter pelo menos 6 caracteres"),
});