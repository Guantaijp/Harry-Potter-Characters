import React from "react";
import Image from "next/image";
import dummy from "../assets/252-2524695_dummy-profile-image-jpg-hd-png-download.png";
import Link from "next/link";

interface Character {
    id: string;
    image: string;
    name: string;
    dateOfBirth: string;
}

interface Props {
    character: Character[];
}

export default function Character({ character }: Props) {

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {character.map((character) => (
                <Link className="" key={character.id} href={`/character/${character.id}`}>
                    <div
                        className="flex p-2   bg-white rounded-md shadow-md overflow-hidden"
                    >
                        <div className=" flex  w-12 h-12 ">
                            <Image
                                src={character.image || dummy}
                                alt={character.name}
                                width="50"
                                height="10"
                                className="w-full h-full rounded-full"
                            />
                        </div>
                        <div className="my-auto mx-2">
                            <h3 className="text-gray-900 font-bold text-xl">
                                {character.name}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                D.O.B:  {character.dateOfBirth || "Unknown"}
                            </p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};


