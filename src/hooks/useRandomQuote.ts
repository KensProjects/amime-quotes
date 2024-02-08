import useGetRandomAnimeQuotes from "./useGetRandomAnimeQuotes";

export default function useRandomQuote() {

    const { data: randomQuoteData, refetch: getRandomQuote, isError, error, isFetching } = useGetRandomAnimeQuotes()

    return { getRandomQuote, isFetching, isError, error, randomQuoteData }
}
