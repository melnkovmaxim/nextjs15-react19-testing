'use client'

import { useFormStatus } from 'react-dom'

export default function Page() {
	const { pending } = useFormStatus()
	return (
		<button type='submit' disabled={pending}>
			Submit
		</button>
	)
}
