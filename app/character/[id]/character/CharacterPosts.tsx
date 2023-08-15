import Image from "next/image";
import dummy from "@/app/assets/252-2524695_dummy-profile-image-jpg-hd-png-download.png";

type Props = {
    promise: Promise<Post[]>;
};

export default async function CharacterPosts({ promise }: Props) {
    const posta = await promise;

    const content = posta.map((post) => (
        <div className="text-[#DEDCDC] rounded-sm m-5 p-5 md:m-10 md:p-10 lg:m-16 lg:p-16 items-center justify-center" key={post.id}>
            <div className="text-center">
                <h2 className="text-4xl font-bold">{post.name}</h2>
            </div>
            <div>
                <div className="flex flex-col md:flex-row bg-[#7B919C] my-5 md:my-10 mx-auto rounded-md w-1/2">
                    <div className="mx-auto md:mx-2">
                        <Image src={post.image || dummy} alt={post.name} width={300} height={300} className="rounded-md mx-auto my-2" />
                    </div>
                    <div className="mx-auto md:mx-2 my-2">
                        <ul>
                            
                            <li><strong>Date of Birth:</strong> {post.dateOfBirth}</li>
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
    ));

    return content;
}
