import { LoginSchema, type LoginFormValues } from "@/schemas/LoginSchema";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "../ui/card";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { authService } from "@/services/authService";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export default function LoginForm() {
	const navigate = useNavigate();

	const form = useForm<LoginFormValues>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	async function onSubmit(data: LoginFormValues) {
		const payload = {
			email: data.email,
			password: data.password,
		};

		try {
			const loginResult = await authService.login(payload);
			if (loginResult?.token) {
				localStorage.setItem("token", loginResult.token);
			} else {
				console.error("No token provided");
				return;
			}
			navigate("/dashboard");
		} catch (e) {
			toast.error(e.message);
		}
	}

	return (
		<>
			<Card className="w-90 sm:w-100 h-min border-fuchsia-pink-200 shadow-none">
				<CardHeader>
					<CardTitle className="text-3xl font-extrabold text-fuchsia-pink-900 tracking-wide">
						Entre na conta
					</CardTitle>
					<CardDescription className="">
						Acesse seu painel e continue de onde parou
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form
						id="login-form"
						onSubmit={form.handleSubmit(onSubmit)}
					>
						<Controller
							name="email"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor="login-email">
										Email
									</FieldLabel>
									<Input
										{...field}
										id="login-email"
										type="email"
										aria-invalid={fieldState.invalid}
										placeholder="Digite seu email"
										autoComplete="email"
									/>
									{fieldState.invalid && (
										<FieldError
											errors={[fieldState.error]}
										/>
									)}
								</Field>
							)}
						/>

						<Controller
							name="password"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field
									data-invalid={fieldState.invalid}
									className="mt-3"
								>
									<FieldLabel htmlFor="login-password">
										Senha
									</FieldLabel>
									<Input
										{...field}
										id="login-password"
										type="password"
										aria-invalid={fieldState.invalid}
										placeholder="Digite sua senha"
										autoComplete="current-password"
									/>
									{fieldState.invalid && (
										<FieldError
											errors={[fieldState.error]}
										/>
									)}
								</Field>
							)}
						/>
					</form>
					<Button
						className="mt-8 w-full bg-fuchsia-pink-700 hover:bg-fuchsia-pink-600 cursor-pointer"
						type="submit"
						form="login-form"
					>
						Entrar
					</Button>
				</CardContent>
			</Card>
			<Toaster />
		</>
	);
}
