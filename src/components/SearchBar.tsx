import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
// import useGetRandomQuote from "@/hooks/useRandomQuote"
import { animeNameAtom } from "@/atoms/animeNameAtom"
import { useAtom } from "jotai"
// import useGetQuoteByAnime from "@/hooks/useGetQuoteByAnime"
import useAnimeQuote from "@/hooks/useAnimeQuote"
import { handleQuoteFetch } from "@/helpers/handleToastPromise"
// import useRandomQuote from "@/hooks/useRandomQuote"

export default function SearchBar() {

    const [animeName,setAnimeName] = useAtom(animeNameAtom)

    // const { getRandomQuote } = useRandomQuote()
    const {getAnimeQuote} = useAnimeQuote()

    const formSchema = z.object({
        anime: z.string()
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            anime: animeName,
        },
    })

    function onSubmit() {
        handleQuoteFetch(getAnimeQuote())
    }

    return (

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex border border-gray-600 w-80 h-40 rounded-lg justify-center items-center bg-slate-100 text-left">
                <FormField
                    control={form.control}
                    name="anime"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Search Animes for Random Quotes</FormLabel>
                            <FormControl>
                                <Input placeholder="Naruto" {...field} onChangeCapture={e => setAnimeName(e.currentTarget.value)} value={animeName}/>
                            </FormControl>
                            <FormDescription>
                                Enter anime name here.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">
                    <MagnifyingGlassIcon />
                </Button>
            </form>
        </Form>
    )
}
