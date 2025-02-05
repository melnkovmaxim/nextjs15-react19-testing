'use client'
import { useActionState } from 'react'

interface ICreateActionState {
	error?: string;
	email: string;
}

const users: unknown[] = []
const createUserAction = ({ refetchUsers }: { refetchUsers: () => void }) => 
	async(
		prevState: ICreateActionState,
		formData: FormData
	): Promise<ICreateActionState> => {
		const email = formData.get('email') as string;

		if (email === 'admin@gmail.com') {
			return {
				error: 'Admin account is not allowed',
				email: email
			}
		}

		try {
			users.push(email)

			await refetchUsers()

			return { email: '' }
		}
		catch {
			return {
				email: email,
				error: 'Error while creating user'
			}
		}
	}

const refreshUsers = () => { }

export default function Page() {
	const [state, dispatch, isPending] = useActionState(createUserAction({ refetchUsers: refreshUsers}), {});
	
	return (
		<div>
			<p>
				есть баг email сбрасывается всегда
				{JSON.stringify(users)}
			</p>

			<form action={dispatch}>
				<input className='bg-green-400' name='email' type='email' disabled={isPending}></input>
				<button className='bg-red-300' type='submit' disabled={isPending}>Add</button>
				{state.error && <div>{state.error}</div>}
			</form>
		</div>
	)
}
