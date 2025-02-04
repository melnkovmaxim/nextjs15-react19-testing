import { use } from 'react'
import { fetchPastes } from '../shared/api'

export function UseHookComponent() {
	const pastes = use(fetchPastes())
	const rows = pastes.map(p => <div className='overflow-hidden' key={p.id}>{p.text}</div>)

	return <div><p>fxzq</p>{rows}</div>
}
