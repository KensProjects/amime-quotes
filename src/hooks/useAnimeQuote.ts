import useGetQuoteByAnime from "./useGetQuoteByAnime"

export default function useAnimeQuote() {

  const { data: animeQuote, refetch: getAnimeQuote, isFetching } = useGetQuoteByAnime()

  return { animeQuote, getAnimeQuote, isFetching }

}
