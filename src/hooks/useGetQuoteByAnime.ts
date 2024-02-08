import { fixedAnimeNameAtom } from "@/atoms/animeNameAtom"
import fetchQuoteByAnime from "@/helpers/fetchAnimeQuote"
import { useQuery } from "@tanstack/react-query"
import { useAtom } from "jotai"

export default function useGetQuoteByAnime() {

    const [fixedAnimeName] = useAtom(fixedAnimeNameAtom)

    return useQuery({
        queryKey: ['quote'],
        queryFn: () => fetchQuoteByAnime(fixedAnimeName),
        enabled:false,
        refetchOnMount:false,
        refetchOnReconnect:false,
        refetchOnWindowFocus:false
    })
}
