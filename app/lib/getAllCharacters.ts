//The function getAllCharacters() is an async function that fetches the data from the API 
//and returns it as a JSON object. If the fetch fails, it throws an error.

export default async function getAllCharacter() {
    const apiURL = "https://hp-api.onrender.com/api/characters";
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

