import Link from 'next/link'

export default function Home() {
	return <div>
		<div className='flex flex-col'>
			<Link href="/use-hook-component">UseHookComponent</Link>
			<Link href="/use-action-state-component">UseActionStateComponent</Link>
			<Link href="/use-form-status-component">UseFormStatusComponent</Link>
		</div>
	</div>
}
