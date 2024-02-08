import fetchRandomQuote from "@/helpers/fetchRandomQuote"
import { useQuery } from "@tanstack/react-query"

export default function useGetRandomAnimeQuotes() {
  return useQuery({
    queryKey: ["quote"],
    queryFn: () => fetchRandomQuote(),
    enabled: false,
    refetchOnMount:false,
    refetchOnReconnect:false,
    refetchOnWindowFocus:false,
  })
}
