import { LoginSchema, type LoginFormValues } from "@/schemas/LoginSchema";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "../ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { authService } from "@/services/authService";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Loader2 } from "lucide-react";
import { FormInput } from "../ui/FormInput";

export default function LoginForm() {
	const form = useForm<LoginFormValues>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const navigate = useNavigate();
	const { isSubmitting } = form.formState;

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
			toast.error((e as Error).message);
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
						<FormInput
							control={form.control}
							name="email"
							type="email"
							label="Email"
							placeholder="Digite seu email"
							autoComplete="email"
						/>

						<FormInput
							control={form.control}
							name="password"
							type="password"
							label="Senha"
							placeholder="Digite sua senha"
							autoComplete="current-password"
							className="mt-3"
						/>
					</form>
					<Button
						className="mt-8 w-full bg-fuchsia-pink-700 hover:bg-fuchsia-pink-600 cursor-pointer"
						type="submit"
						form="login-form"
						disabled={isSubmitting}
					>
						{isSubmitting ? (
							<>
								<Loader2 className="size-4 animate-spin" />
								Entrando...
							</>
						) : (
							"Entrar"
						)}
					</Button>
				</CardContent>
			</Card>
			<Toaster />
		</>
	);
}
