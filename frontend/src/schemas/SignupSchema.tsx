import * as z from "zod";

export const SignupSchema = z
  .object({
    name: z
      .string()
      .min(3, "Nome deve ter pelo menos 3 caracteres")
      .max(100, "Nome deve ter no máximo 100 caracteres")
      .nonempty("Nome é obrigatório")
      .regex(/^[a-zA-ZÀ-ÿ '-]+$/, {
        message:
          "Nome deve conter apenas letras, espaços, apóstrofos ou hífens. Números não são permitidos.",
      }),

    surname: z
      .string()
      .min(3, "Sobrenome deve ter pelo menos 3 caracteres")
      .max(100, "Sobrenome deve ter no máximo 100 caracteres")
      .nonempty("Sobrenome é obrigatório"),

    email: z
      .string()
      .email("Digite um endereço de email válido")
      .nonempty("Email é obrigatório"),

    password: z
      .string()
      .min(6, "Senha deve conter pelo menos 6 caracteres")
      .nonempty("Senha é obrigatória"),

    confirmPassword: z
      .string()
      .nonempty("Confirmação de senha é obrigatória"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas devem ser iguais",
    path: ["confirmPassword"],
  });