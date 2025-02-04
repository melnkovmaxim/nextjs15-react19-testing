interface IPaste {
	id: string,
	text: string,
	tags: unknown[],
	createdAt: Date
}

export const fetchPastes = () => {
	return fetch('https://67a25181409de5ed52551064.mockapi.io/pastes')
		.then(r => r.json()) as Promise<IPaste[]>
}