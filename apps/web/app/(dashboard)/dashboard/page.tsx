import * as React from "react";

interface ProjectProps {
    imageUrl: string;
    title: string;
    description: string;
    views?: number;
    commits?: number;
    liveLink?: string;
    status?: "live" | "review" | "rejected";
}

const projects: ProjectProps[] = [
    {
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/2c724b1d333dd37441c8faad1fd8680a8ef3c342681a4edfe8261b61bede3437?apiKey=ae3a7180b6a943bbb4c5762597a6e143&",
        title: "Tiny Dancer",
        description: "Solana first light client.",
        views: 350,
        commits: 35,
        liveLink: "Link",
        status: "live",
    },
    {
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/2c724b1d333dd37441c8faad1fd8680a8ef3c342681a4edfe8261b61bede3437?apiKey=ae3a7180b6a943bbb4c5762597a6e143&",
        title: "Tiny Dancer",
        description: "Solana first light client.",
        status: "review",
    },
    {
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/2c724b1d333dd37441c8faad1fd8680a8ef3c342681a4edfe8261b61bede3437?apiKey=ae3a7180b6a943bbb4c5762597a6e143&",
        title: "Tiny Dancer",
        description: "Solana first light client.",
        status: "rejected",
    },
];

const ProjectCard: React.FC<ProjectProps> = ({
    imageUrl,
    title,
    description,
    views,
    commits,
    liveLink,
    status,
}) => {
    let statusText = "";
    let statusClass = "";

    switch (status) {
        case "live":
            statusText = `Live on "${liveLink}"`;
            statusClass = "text-purple-300";
            break;
        case "review":
            statusText =
                "Your project is under review, you will get notified when your project is live. Can take upto 72 hours.";
            statusClass = "text-purple-600";
            break;
        case "rejected":
            statusText = (
                <>
                    Rejected , for further help mail on{" "}
                    <span className="text-purple-300">solcanvas2024@gmail.com</span>
                </>
            );
            statusClass = "text-purple-300";
            break;
    }

    return (
        <div className="flex flex-col grow pt-4 w-full rounded-xl bg-neutral-900 max-md:mt-10 max-md:max-w-full">
            {status === "live" && (
                <div className="flex gap-5 w-full max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-1 gap-2">
                        <img
                            src={imageUrl}
                            alt={title}
                            className="shrink-0 aspect-[1.02] w-[99px]"
                        />
                        <div className="flex flex-col my-auto">
                            <div className="text-base font-medium text-white">{title}</div>
                            <div className="mt-1.5 text-xs text-white text-opacity-80">
                                {description}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-auto gap-5 my-auto whitespace-nowrap">
                        <div className="flex flex-col py-3 rounded-md bg-stone-950">
                            <div className="text-xs text-white">Views</div>
                            <div className="mt-6 text-xl font-bold text-purple-300">
                                {views}
                            </div>
                        </div>
                        <div className="flex flex-col py-3 rounded-md bg-stone-950">
                            <div className="text-xs text-white">Commits</div>
                            <div className="mt-6 text-xl font-bold text-purple-300">
                                {commits}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {status !== "live" && (
                <div className="flex gap-2 self-start ml-4 max-md:ml-2.5">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="shrink-0 aspect-[1.02] w-[99px]"
                    />
                    <div className="flex flex-col my-auto">
                        <div className="text-base font-medium text-white">{title}</div>
                        <div className="mt-1.5 text-xs text-white text-opacity-80">
                            {description}
                        </div>
                    </div>
                </div>
            )}
            <div
                className={`justify-center items-center px-16 py-4 text-xs tracking-wider rounded-none bg-black bg-opacity-90 max-md:px-5 max-md:max-w-full ${statusClass}`}
            >
                {statusText}
            </div>
        </div>
    );
};

const ProjectList: React.FC = () => {
    return (
        <div className="flex flex-col grow mt-5 max-md:mt-10 max-md:max-w-full">
            {projects.map((project, index) => (
                <div key={index} className={index > 0 ? "mt-5" : ""}>
                    <ProjectCard {...project} />
                </div>
            ))}
            <div className="self-center mt-5 text-xs text-white text-opacity-50">
                View More
            </div>
        </div>
    );
};

const StatCard: React.FC<{ label: string; value: string | number }> = ({
    label,
    value,
}) => {
    return (
        <div className="flex flex-col items-start py-4 pr-20 pl-3 w-full rounded-xl bg-neutral-900 max-md:pr-5 max-md:mt-10">
            <div className="text-sm text-white">{label}</div>
            <div
                className={`mt-11 text-4xl font-bold max-md:mt-10 ${label === "Your Rewards" ? "text-orange-600" : "text-purple-600"
                    }`}
            >
                {value}
            </div>
        </div>
    );
};

function MyComponent() {
    return (
        <div className="pr-16 bg-black max-md:pr-5">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div id="sidebar" className="sm:flex hidden flex-col w-[19%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow px-9 pt-14 pb-9 w-full text-base text-purple-600 whitespace-nowrap bg-neutral-950 max-md:px-5 max-md:mt-10">
                        <div className="text-xl font-bold">Solcavas</div>
                        <div className="mt-36 text-purple-300 max-md:mt-10">Home</div>
                        <div className="mt-12 text-white max-md:mt-10">Rewards</div>
                        <div className="self-center mt-[476px] max-md:mt-10">Exit</div>
                    </div>
                </div>
                <main className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
                    <section className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                        <h1 className="text-3xl text-purple-300 max-md:max-w-full">
                            Gm, "user name"
                        </h1>
                        <div className="mt-16 max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
                                    <div className="max-md:mt-10 max-md:max-w-full">
                                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                            <div className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
                                                <img
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5940064998f1b93f79311391f25d1c2a6a5a336d56a3ec134ba17ed8c9be448?apiKey=ae3a7180b6a943bbb4c5762597a6e143&"
                                                    alt="User avatar"
                                                    className="shrink-0 mx-auto rounded-full aspect-square bg-stone-950 blur-[1.5px] h-[104px] w-[104px] max-md:mt-4"
                                                />
                                            </div>
                                            <div className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
                                                <div className="flex gap-2.5 self-stretch p-3 my-auto w-full text-sm text-red-600 whitespace-nowrap rounded-md bg-stone-950 max-md:flex-wrap max-md:mt-10">
                                                    <div className="flex-auto max-md:max-w-full">
                                                        8bxPvX42URZKixUTFLywQEq6ZYef4nQfU3QvyMkmzuXs
                                                    </div>
                                                    <img
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8df2022b88aa22a2e1b88f7224de5994b966c55d76185c165ae45a2078ca981?apiKey=ae3a7180b6a943bbb4c5762597a6e143&"
                                                        alt="Copy icon"
                                                        className="shrink-0 w-3.5 aspect-square"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
                                    <StatCard label="Your Projects" value={13} />
                                </div>
                            </div>
                        </div>
                        <div className="mt-7 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
                                    <ProjectCard {...projects[0]} />
                                </div>
                                <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
                                    <StatCard label="Your Commits" value={35} />
                                </div>
                            </div>
                        </div>
                        <div className="max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
                                    <ProjectList />
                                </div>
                                <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
                                    <StatCard label="Your Rewards" value={35} />
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default MyComponent;