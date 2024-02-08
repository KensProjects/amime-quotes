export default async function fetchQuoteByAnime(anime_title: string) {
    try {
        const res = await fetch(`https://animechan.xyz/api/random/anime?title=${anime_title}`)
        if (!res.ok) {
            throw new Error("anime not found!")
        } else {
            const data = await res.json()
            return data
        }

    } catch (error) {
        console.error(error)
    }
}
