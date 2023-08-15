import React from "react";
import Image from "next/image";
import dummy from "../assets/252-2524695_dummy-profile-image-jpg-hd-png-download.png";

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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {character.map((character) => (
                <div
                    key={character.id}
                    className="flex p-2 bg-white rounded-md shadow-md overflow-hidden"
                >
                    <Image
                        src={character.image || dummy}
                        alt={character.name}
                        width={50}
                        height={50} 
                        className="rounded-full object-cover"
                        style={{ borderRadius: "8%" }}
                    />
                    <div className="p-4">
                        <h3 className="text-gray-900 font-bold text-xl">
                            {character.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          D.O.B:  {character.dateOfBirth || "Unknown"}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};


