import Image from "next/image"


type Props = {
    promise: Promise<Post[]>
}

export default async function CharacterPosts({ promise }: Props) {
   
    const  posta = await promise
     //render the posts Here
    const content = posta.map((post) => (
        <div className="card border m-5" key={post.id}>
            <h2 className="text-black">{post.dateOfBirth}</h2>
            <p>{post.house}</p>
            <Image src={post.image} alt={post.name} width={200} height={200} />
        </div>
    ))

    return content
}
