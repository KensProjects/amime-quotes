export default async function fetchRandomQuote() {
    try {
        const res = await fetch("https://animechan.xyz/api/random")
        if (!res.ok) {
            throw new Error("Anime not found!")
        }
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error)
    }
}