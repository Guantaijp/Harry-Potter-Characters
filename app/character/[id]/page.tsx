import type { Metadata } from 'next'
import { Suspense } from "react"
import CharacterPosts from "./character/CharacterPosts";
import getCharacter from "@/app/lib/getCharacter";


type Params = {
    params: {
        id: string
    }
}

//metadata for the page
export async function generateMetadata({ params: { id } }: Params): Promise<Metadata> {
    const UserData = await getCharacter(id)
    const user = UserData[0]
    return {
        title: `${user.name} | Harry Potter`,
        description: `Happy Coding!`, 
    }
}

//main component
export default function CharacterPage({
    params,
}: {
    params: { id: string };
}) {
    // Fetch the data
    const characterPostData: Promise<Post[]> = getCharacter(params.id);

    return (
        //render the component
        <Suspense fallback={<div>Loading...</div>}>
            <CharacterPosts promise={characterPostData} />
        </Suspense>
    )
}
