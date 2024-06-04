import CarouseItem from "@/components/carousel/carousel-item";
import Collection from "@/components/collections";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
    return (<>
        <main className="h-min-full px-9">

            <div className="flex">
                <div className="flex flex-col flex-grow-0 basis-[60%] h-screen">
                    <Header></Header>
                    <div className="relative">
                        <div className="absolute opacity-20 -z-[1]">
                            <p className="text-[128px] font-[700] w-[361px] break-words leading-[118px]">
                                ASTRIX
                            </p><br /><br /><br /><br />
                            <p className="text-[128px] font-[700] w-[361px] break-words leading-[118px]">
                                COLLLECTIBLE
                            </p>
                        </div>
                    </div>
                    <div className="flex-grow-0 w-full relative">
                        <div className="absolute w-full overflow-x-auto no-scroll">
                            <div className="carousel flex w-full mt-10 space-x-4">
                                {[1, 2, 3, 4].map(i =>
                                    <CarouseItem key={i} i={i} />
                                )}
                            </div>

                        </div>
                    </div>
                </div>
                <div className="h-screen flex-none w-[91px] bg-[var(--tertiary)]" style={{ writingMode: "vertical-rl", transform: "rotate(0deg)" }}>
                    <marquee className="flex items-center justify-center" scrollamount="10" direction="up" >
                        <p className="text-2xl font-bold flex-wrap leading-8 krona-one-regular whitespace-nowrap text-[var(--primary)]">
                            Collection Live : Event : Oasis Bus tour , JLN Stadium , Delhi Meta Lives , live on astrix
                            *
                            Event : Oasis Bus tour , JLN Stadium , Delhi
                            *
                            Collection Live : Meta Lives , live on astrix
                            *
                            Collection Live : Meta Lives , live on astrix
                        </p>
                    </marquee>
                </div>
                <div className="h-screen flex-grow basis-[40%] pl-14 pt-14">
                    <p className="font-bold text-2xl">Explore Youre First <br /> Collectible</p>
                    <div className="mt-14">
                        <h6 className="font-extrabold text-6xl ">Meta <br />Lives</h6>
                        <h1 className="text-2xl font-bold mt-8">Live in Astrix</h1>
                        <p className="text-base font-semibold mt-6">
                            Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum.
                            Pellentesque mattis condimentum ut nulla.
                        </p>
                    </div>
                    <div className="flex justify-start items-center mt-8">
                        <img className="h-10" src="/interested_people.png" alt='interested people' />
                        <p className="text-xl font-medium ml-6">22k people interested</p>
                    </div>
                    <div className="mt-10">
                        <Collection />
                    </div>
                    <div className="flex justify-end mt-10">
                        <button className="px-6 py-3  text-black text-2xl font-bold rounded-[40px] bg-[var(--secondary)]">Join Waitlist</button>
                    </div>
                </div>
            </div>
        </main >
    </>
    );
}
