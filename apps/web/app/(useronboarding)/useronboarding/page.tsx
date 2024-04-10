'use client'

import { useState } from "react";
import { ChangeEvent } from "react";
import required from "../../../public/images/required.png";
import next from "../../../public/images/next.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function UserOnBoarding() {
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const router = useRouter();
    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        if (inputValue.length <= 45) setName(inputValue);
    };

    const handleBioChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        if (inputValue.length <= 80) setBio(inputValue);
    };

    const customStyle = {
        isOpen: "bg-blue-600",
        isClose: "bg-zinc-400"
    }

    const nameCharacterCount = name.length;
    const bioCharacterCount = bio.length;
    return (
        <form className="flex flex-col self- sm:mt-24 max-w-full mt-10 " action={"/addproject/"}>
            <div className="flex gap-2.5 self-start">
                <div className="shrink-0 rounded-2xl bg-zinc-400 h-[17px] w-[38px]" />
                <div className="shrink-0 w-14 bg-blue-600 rounded-2xl h-[17px]" />
                <div className="shrink-0 rounded-2xl bg-zinc-400 h-[17px] w-[38px]" />
            </div>
            <div className="mt-11 sm:text-5xl font-semibold tracking-wide leading-8 text-white max-w-full text-4xl">
                Onboarding
            </div>
            <div className="mt-5 text-2xl font-medium tracking-wide leading-8 text-white text-opacity-50 max-w-full">
                Lets get started by telling the word your <br />
                name and about your self.
            </div>
            <div className="flex gap-5 justify-between sm:mt-20 w-full text-2xl tracking-wide leading-8 whitespace-nowrap sm:flex-none flex-wrap mt-10 max-w-full">
                <div className="flex gap-2.5 self-start text-white text-opacity-80">
                    <div>Name</div>
                    <Image
                        alt=""
                        width={100}
                        height={100}
                        loading="lazy"
                        src={required}
                        className="shrink-0 self-start w-3.5 aspect-square"
                    />
                </div>
                <div className="font-medium text-white text-opacity-30">{nameCharacterCount}/45</div>
            </div>
            <input
                className="justify-center items-start p-5 mt-8 sm:text-xl font-medium tracking-wide leading-8 bg-black rounded-xl border border-solid border-white border-opacity-20 placeholder:opacity-20 text-white text-opacity-50 "
                placeholder="Enter your name"
                value={name}
                onChange={handleNameChange}
                required
            />
            <div className="flex gap-5 sm:mt-20 w-full text-2xl tracking-wide leading-8 whitespace-nowrap flex-wrap mt-10 max-w-full">
                <div className="flex flex-1 gap-1.5 self-start text-white text-opacity-80">
                    <div>Bio</div>
                    <Image
                        alt=""
                        width={100}
                        height={100}
                        loading="lazy"
                        src={required}
                        className="shrink-0 self-start w-3.5 aspect-square"
                    />
                </div>
                <div className="font-medium text-white text-opacity-30">{bioCharacterCount}/80</div>
            </div>
            <input
                className="justify-center items-start p-5 mt-8 sm:text-xl font-medium tracking-wide leading-8 bg-black rounded-xl border border-solid border-white border-opacity-20 text-white text-opacity-50 placeholder:opacity-20 px-5 max-w-full"
                placeholder="Give intro about yourself"
                value={bio}
                onChange={handleBioChange}
                required
            />
            <div className="flex gap-5 justify-between sm:mt-40 w-full text-2xl font-medium tracking-wide leading-7 whitespace-nowrap flex-wrap mt-10 max-w-full">
                <div className="justify-center sm:px-8 py-5 text-white rounded-2xl bg-neutral-900 px-5">
                    Cancel
                </div>
                <button type="submit"  className="flex gap-5 justify-between sm:px-7 py-5 text-black bg-white rounded-2xl px-5">
                    <div>Next</div>
                    <Image
                        alt=""
                        width={100}
                        height={100}
                        loading="lazy"
                        src={next}
                        className="shrink-0 w-4  aspect-[0.76] stroke-[2px] stroke-black"
                    />
                </button>
            </div>
        </form>
    )
}