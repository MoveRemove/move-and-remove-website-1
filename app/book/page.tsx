import BookPageClient from "./BookPageClient"

export const metadata = {
  title: "Book Service | Move and Remove Solutions",
  description:
    "Book junk removal or moving help services online. Get an in-person quote from Move and Remove Solutions in Hanover, PA.",
  openGraph: {
    title: "Book Service | Move and Remove Solutions",
    description:
      "Book junk removal or moving help services online. Get an in-person quote from Move and Remove Solutions in Hanover, PA.",
    url: "https://moveandremovesolutions.com/book",
  },
}

export default function BookPage() {
  return <BookPageClient />
}
