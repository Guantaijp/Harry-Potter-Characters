//the function that fetches data of a single character from the API.

export default async function getCharacter(id: string) {
    const apiURL = `https://hp-api.onrender.com/api/character/${id}`;
    try {
        const res = await fetch(apiURL);
        if (!res.ok) {
            throw new Error('Failed to fetch character');
        }
        return await res.json();
    } catch (error) {
        throw new Error('Failed to fetch or parse data');
    }
}

// Path: app/lib/getAllCharacters.ts
