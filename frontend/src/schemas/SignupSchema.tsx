import * as z from "zod";

export const SignupSchema = z
  .object({
    name: z
      .string()
      .min(2, "Nome deve ter pelo menos 2 caracteres")
      .max(150, "Nome deve ter no máximo 150 caracteres")
      .nonempty("Nome é obrigatório")
      .regex(/^[a-zA-ZÀ-ÿ '-]+$/, {
        message:
          "Nome deve conter apenas letras, espaços, apóstrofos ou hífens. Números não são permitidos.",
      }),

    surname: z
      .string()
      .min(2, "Sobrenome deve ter pelo menos 2 caracteres")
      .max(100, "Sobrenome deve ter no máximo 150 caracteres")
      .nonempty("Sobrenome é obrigatório"),

    cpf: z
      .string()
      .nonempty("CPF é obrigatório")
      .regex(/^\d{11}$/, "CPF deve conter 11 dígitos"),

    email: z
      .email("Digite um endereço de email válido")
      .nonempty("Email é obrigatório"),

    phoneNumber: z
      .string(),

    password: z
      .string()
      .min(6, "Senha deve conter pelo menos 6 caracteres")
      .nonempty("Senha é obrigatória"),

    confirmPassword: z
      .string()
      .nonempty("Confirmação de senha é obrigatória"),

    terms: z
      .boolean()
      .refine((val) => val === true, "Você deve aceitar os termos de uso"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas devem ser iguais",
    path: ["confirmPassword"],
  });

export type SignupFormValues = z.infer<typeof SignupSchema>;