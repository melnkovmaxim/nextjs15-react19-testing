'use client'

import { Button } from '@radix-ui/themes'
import { useFormStatus } from 'react-dom'

export default function Page() {
	const { pending } = useFormStatus()

	const submitForm = async _ => {
    await new Promise((res) => setTimeout(res, 1000));
	}

	return (
		<div>
			<form action={submitForm}>
				<Button type='submit' disabled={pending}>
					Submit
				</Button>
			</form>
		</div>
	)
}
