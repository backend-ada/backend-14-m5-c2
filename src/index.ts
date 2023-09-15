import express from 'express';

const PORT = 45000;
const app = express();

app.get('/api', (req, res) => {
	res.json({
		characters: '/api/characters',
		episodes: '/api/episodes',
	});
});

app.get('/api/characters', async (req, res) => {
	const charactersData = await fetch(
		'https://rickandmortyapi.com/api/character'
	);
	const json = await charactersData.json();

	const processedData = json.results.map((character: any) => {
		const { id, name, status } = character;

		return { id, name, status };
	});

	console.log(processedData);

	res.json({
		characters: 'muchos personajes',
	});
});

app.get('/api/characters/:id', async (req, res) => {
	const { id } = req.params;

	const charactersData = await fetch(
		'https://rickandmortyapi.com/api/character'
	);
	const json = await charactersData.json();

	const characterFound = json.results.find(
		(character: any) => character.id == id
	);

	res.json(characterFound);
});

app.listen(PORT, () => {
	console.log('Server listening on port', PORT);
});
