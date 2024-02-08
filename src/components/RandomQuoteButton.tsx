import { Button } from "./ui/button"
import useRandomQuote from "@/hooks/useRandomQuote"
import { handleQuoteFetch } from "@/helpers/handleToastPromise"

export default function RandomQuoteButton() {
    const { getRandomQuote } = useRandomQuote()

    function handleRandomQuoteFetch() {
        handleQuoteFetch(getRandomQuote())
    }

    return (
        <Button onClick={() => handleRandomQuoteFetch()}>
            Get Random Quote
        </Button>
    )
}