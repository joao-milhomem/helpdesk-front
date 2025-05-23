'use client'

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
import { LogIn } from 'lucide-react'
import { NavLink } from 'react-router'

const signInformSchema = z.object({
	email: z.string().email(),
	password: z.string().min(4).max(20),
})

type SignInFormValues = z.infer<typeof signInformSchema>

export function SignIn() {
	const form = useForm<SignInFormValues>({
		resolver: zodResolver(signInformSchema),
	})

	async function handleSignIn(data: SignInFormValues) {
		await new Promise((resolve) => setTimeout(resolve, 2000))
		console.log(data)
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(handleSignIn)}
				className="min-w-[380px] space-y-8 rounded-lg border p-8 shadow-xl "
			>
				<fieldset>
					<div className="mb-8">
						<legend className="flex items-center gap-2 text-xl">
							<span>Faça login</span>
							<LogIn />
						</legend>
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
										<Input placeholder="DIgite seu email" {...field} />
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
											placeholder="DIgite sua senha"
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
					Entrar
				</Button>

				<p className="text-center text-xs">
					Não possui uma conta?
					<Button asChild variant={'link'} className="mx-2 p-0 text-xs">
						<NavLink to="/sign-up">Registre-se</NavLink>
					</Button>
				</p>
			</form>
		</Form>
	)
}
