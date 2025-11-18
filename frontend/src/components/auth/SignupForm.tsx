import { Controller, useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { SignupSchema, type SignupFormValues } from "@/schemas/SignupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Link } from "react-router-dom";
import { Label } from "../ui/label";

export default function SignupForm() {

    const form = useForm<SignupFormValues>({
        resolver: zodResolver(SignupSchema),
        defaultValues: {
            name: "",
            surname: "",
            cpf: "",
            phoneNumber: "",
            email: "",
            password: "",
            confirmPassword: "",
            terms: false,
        }
    });

    function onSubmit(data: SignupFormValues) {
        console.log(data)
    }

    return (
        <Card className="w-120 h-min border-fuchsia-pink-200 shadow-none">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-extrabold text-fuchsia-pink-900 tracking-wide">Crie sua conta</CardTitle>
                <CardDescription className="">Cadastre-se para acessar todos os recursos</CardDescription>
            </CardHeader>
            <CardContent>
                <form id="signup-form" onSubmit={form.handleSubmit(onSubmit)}>
                    <div className=" md:flex md:gap-5">
                        <Controller
                            name="name"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="signup-name">Nome</FieldLabel>
                                    <Input
                                        {...field}
                                        id="signup-name"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Digite seu nome"
                                        autoComplete="given-name"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="surname"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid} className="mt-5 md:mt-0">
                                    <FieldLabel htmlFor="signup-surname">Sobrenome</FieldLabel>
                                    <Input
                                        {...field}
                                        id="signup-surname"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Digite seu sobrenome"
                                        autoComplete="family-name"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                    </div>
                    <Controller
                        name="cpf"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid} className="mt-5">
                                <FieldLabel htmlFor="signup-cpf">CPF</FieldLabel>
                                <Input
                                    {...field}
                                    id="signup-cpf"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Digite seu CPF"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                    <Controller
                        name="phoneNumber"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid} className="mt-5">
                                <FieldLabel htmlFor="signup-phone-number">Telefone (opcional)</FieldLabel>
                                <Input
                                    {...field}
                                    id="signup-phone-number"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Digite seu número"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                    <Controller
                        name="email"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid} className="mt-5">
                                <FieldLabel htmlFor="signup-email">Email</FieldLabel>
                                <Input
                                    {...field}
                                    id="signup-email"
                                    type="email"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Digite seu email"
                                    autoComplete="email"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                    <Controller
                        name="password"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid} className="mt-5">
                                <FieldLabel htmlFor="signup-password">Senha</FieldLabel>
                                <Input
                                    {...field}
                                    id="signup-password"
                                    type="password"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Digite uma senha"
                                    autoComplete="new-password"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                    <Controller
                        name="confirmPassword"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid} className="mt-5">
                                <FieldLabel htmlFor="signup-confirm-password">Confirmar senha</FieldLabel>
                                <Input
                                    {...field}
                                    id="signup-confirm-password"
                                    type="password"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Digite novamente a senha"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                </form>
                <Controller
                    name="terms"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field
                            data-invalid={fieldState.invalid}
                            className="mt-5"
                        >
                            <div className="flex items-start gap-3">
                                <Checkbox
                                    id="checkbox-terms"
                                    checked={field.value}
                                    onCheckedChange={(checked) =>
                                        field.onChange(!!checked)
                                    }
                                    aria-invalid={fieldState.invalid}
                                />
                                <div className="flex flex-col">
                                    <div className="flex items-center">
                                        <Label htmlFor="checkbox-terms">
                                            <span>
                                                Eu concordo com os{" "}
                                                <Link
                                                    className="underline cursor-pointer hover:text-fuchsia-pink-500 transition-colors"
                                                    to="/terms-of-use"
                                                >
                                                    termos de uso
                                                </Link>
                                            </span>
                                        </Label>
                                    </div>
                                    {fieldState.invalid && (
                                        <FieldError className="mt-2" errors={[fieldState.error]} />
                                    )}
                                </div>
                            </div>
                        </Field>
                    )}
                />
                <Button className="mt-8 w-full bg-fuchsia-pink-700 hover:bg-fuchsia-pink-600 cursor-pointer" type="submit" form="signup-form">Criar uma conta</Button>
            </CardContent>
        </Card>
    )
}