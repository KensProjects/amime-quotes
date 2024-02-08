import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import useAnimeQuote from '@/hooks/useAnimeQuote'

export default function QuoteCard() {

    const { animeQuote,isFetching } = useAnimeQuote()

    if (!animeQuote || isFetching ) return null

    return (
        <Card className="w-80 h-72 border border-black overflow-auto">
            <CardHeader>
                <CardTitle>{animeQuote.anime}</CardTitle>
                <CardDescription className="text-md">{animeQuote.character}</CardDescription>
            </CardHeader>
            <CardContent>
                {animeQuote.quote}
            </CardContent>
        </Card>

    )
}
