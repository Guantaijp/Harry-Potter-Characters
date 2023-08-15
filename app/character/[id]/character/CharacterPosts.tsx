import Image from "next/image"
import dummy from "@/app/assets/252-2524695_dummy-profile-image-jpg-hd-png-download.png"


type Props = {
    promise: Promise<Post[]>
}

export default async function CharacterPosts({ promise }: Props) {

    const posta = await promise
    //render the posts Here
    const content = posta.map((post) => (

         <div className="bg-[#7B919C] text-[#DEDCDC] rounded-sm m-5" key={post.id}>
            <div className="text-center">
                <h2 className="text-4xl font-bold">{post.name}</h2>
            </div>
            <div >
                <div className="flex">
                    <div className=" mx-2">
                        <Image src={post.image || dummy} alt={post.name} width={300} height={300} className="rounded-md my-2"/>
                    </div>
                    <div className="mx-2 mt-2">
                        <ul>
                            <li><strong>Alternate Names:</strong> {post.alternate_names.join(', ')}</li>
                            <li><strong>Species:</strong> {post.species}</li>
                            <li><strong>Gender:</strong> {post.gender}</li>
                            <li><strong>Ancestry:</strong> {post.ancestry}</li>
                            <li><strong>Eye Colour:</strong> {post.eyeColour}</li>
                            <li><strong>Hair Colour:</strong> {post.hairColour}</li>
                            <li><strong>Patronus:</strong> {post.patronus}</li>
                            <li><strong>Alive:</strong> {post.alive ? 'Yes' : 'No'}</li>
                            <li><strong>House:</strong> {post.house}</li>
                            <li><strong>Actor:</strong> {post.actor}</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    ))

    return content
}
