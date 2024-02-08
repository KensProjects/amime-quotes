import { atom } from "jotai"

export const animeNameAtom = atom("")

export const fixedAnimeNameAtom = atom(get => (get(animeNameAtom).trim().toLowerCase()))

