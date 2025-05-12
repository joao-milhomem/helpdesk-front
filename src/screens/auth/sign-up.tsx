// 'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { UserPlus } from 'lucide-react'
import { NavLink } from 'react-router'

const signUpFormSchema = z.object({
	name: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres'),
	email: z.string().email('Digite um email válido'),
	password: z
		.string()
		.min(4, 'A senha deve ter pelo menos 4 caracteres')
		.max(20, 'A senha deve ter no máximo 20 caracteres'),
})

type SignUpFormValues = z.infer<typeof signUpFormSchema>

export function SignUp() {
	const form = useForm<SignUpFormValues>({
		resolver: zodResolver(signUpFormSchema),
	})

	async function handleSignUp(data: SignUpFormValues) {
		await new Promise((resolve) => setTimeout(resolve, 2000))
		console.log(data)
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(handleSignUp)}
				className="min-w-[380px] space-y-8 rounded-lg border p-8 shadow-xl "
			>
				<fieldset>
					<div className="mb-8">
						<legend className="flex items-center gap-2 text-xl">
							<span>Crie sua conta</span>
							<UserPlus />
						</legend>
					</div>

					{/* Name item */}
					<div className="mb-6">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nome</FormLabel>
									<FormControl>
										<Input placeholder="Digite seu nome" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					{/* Email item */}
					<div className="mb-6">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input placeholder="Digite seu email" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					{/* Password item */}
					<div>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Senha</FormLabel>
									<FormControl>
										<Input
											type="password"
											placeholder="Digite sua senha"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				</fieldset>

				<Button
					type="submit"
					disabled={form.formState.isSubmitting}
					className="w-full cursor-pointer font-semibold"
				>
					Registrar
				</Button>

				<p className="text-center text-xs">
					Já possui uma conta?
					<Button asChild variant={'link'} className="mx-2 p-0 text-xs">
						<NavLink to="/">Faça login</NavLink>
					</Button>
				</p>
			</form>
		</Form>
	)
}
