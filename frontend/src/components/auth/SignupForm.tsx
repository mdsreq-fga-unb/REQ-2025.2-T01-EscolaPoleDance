import { Controller, useForm } from "react-hook-form";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "../ui/card";
import { SignupSchema, type SignupFormValues } from "@/schemas/SignupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Link } from "react-router-dom";
import { Label } from "../ui/label";
import { authService } from "@/services/authService";
import { useNavigate } from "react-router-dom";
import React from "react";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { FormInput } from "../ui/FormInput";

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
		},
	});

	const navigate = useNavigate();
	const { isSubmitting } = form.formState;
	const [confirmOpen, setConfirmOpen] = React.useState(false);

	async function onSubmit(data: SignupFormValues) {
		const payload = {
			firstName: data.name,
			lastName: data.surname,
			email: data.email,
			password: data.password,
			phoneNumber: data.phoneNumber || undefined,
			cpf: data.cpf,
		};

		try {
			const registerResult = await authService.register(payload);

			if (registerResult?.token) setConfirmOpen(true);
		} catch (e) {
			toast.error((e as Error).message);
		}
	}

	return (
		<>
			<Card className="w-120 h-min border-fuchsia-pink-200 shadow-none m-5">
				<CardHeader>
					<CardTitle className="text-2xl md:text-3xl font-extrabold text-fuchsia-pink-900 tracking-wide">
						Crie sua conta
					</CardTitle>
					<CardDescription className="">
						Cadastre-se para acessar todos os recursos
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form
						id="signup-form"
						onSubmit={form.handleSubmit(onSubmit)}
					>
						<div className=" md:flex md:gap-5">
							<FormInput
								control={form.control}
								name="name"
								label="Nome"
								placeholder="Digite seu nome"
								autoComplete="given-name"
							/>

							<FormInput
								control={form.control}
								name="surname"
								label="Sobrenome"
								placeholder="Digite seu sobrenome"
								autoComplete="family-name"
								className="mt-5 md:mt-0"
							/>
						</div>
						<FormInput
							control={form.control}
							name="cpf"
							label="CPF"
							placeholder="Digite seu CPF"
							className="mt-5"
						/>

						<FormInput
							control={form.control}
							name="phoneNumber"
							label="Telefone (opcional)"
							placeholder="Digite seu número"
							className="mt-5"
						/>

						<FormInput
							control={form.control}
							name="email"
							type="email"
							label="Email"
							placeholder="Digite seu email"
							autoComplete="email"
							className="mt-5"
						/>

						<FormInput
							control={form.control}
							name="password"
							type="password"
							label="Senha"
							placeholder="Digite uma senha"
							autoComplete="new-password"
							className="mt-5"
						/>

						<FormInput
							control={form.control}
							name="confirmPassword"
							type="password"
							label="Confirmar senha"
							placeholder="Digite novamente a senha"
							className="mt-5"
						/>

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
											{fieldState.invalid && (
												<FieldError
													className="mt-2"
													errors={[fieldState.error]}
												/>
											)}
										</div>
									</div>
								</Field>
							)}
						/>
						<Button
							className="mt-8 w-full bg-fuchsia-pink-700 hover:bg-fuchsia-pink-600 cursor-pointer"
							type="submit"
							form="signup-form"
							disabled={isSubmitting}
						>
							{isSubmitting ? (
								<>
									<Loader2 className="size-4 animate-spin" />
									Criando...
								</>
							) : (
								"Criar uma conta"
							)}
						</Button>
					</form>

					<AlertDialog
						open={confirmOpen}
						onOpenChange={setConfirmOpen}
					>
						<AlertDialogContent>
							<AlertDialogHeader>
								<AlertDialogTitle>
									Conta criada com sucesso 🎉
								</AlertDialogTitle>
								<AlertDialogDescription>
									Sua conta foi registrada. Clique abaixo para
									acessar a página de login.
								</AlertDialogDescription>
							</AlertDialogHeader>
							<AlertDialogFooter>
								<AlertDialogCancel>Fechar</AlertDialogCancel>
								<AlertDialogAction asChild>
									<Button
										onClick={() => navigate("/login")}
										className="bg-fuchsia-pink-700 hover:bg-fuchsia-pink-600 cursor-pointer"
									>
										Ir para login
									</Button>
								</AlertDialogAction>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialog>
				</CardContent>
			</Card>
			<Toaster />
		</>
	);
}
