import { use } from 'react'
import { fetchPastes } from '../../shared/api'

export default function Page() {
	const pastes = use(fetchPastes())
	const rows = pastes.map(p => <div className='overflow-hidden' key={p.id}>{p.text}</div>)

	return <div><p>fxzq</p>{rows}</div>
}
