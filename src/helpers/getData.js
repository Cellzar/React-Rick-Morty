export const getData = async (category) => {
    const url = `https://rickandmortyapi.com/api/character/?name=${category}`;
    const resp = await fetch(url);

    const { results } = await resp.json();

    const data = results.map((result) => {
        return {
            id: result.id,
            name: result.name,
            img: result.image,
            gender: result.gender,
            species: result.species
        }
    })

    return data;
}