import Link from "next/link";
import Heading from "../components/Heading";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
    return (
        <div className="bg-hero h-screen w-screen">
            <Head>
                <title>Home Is Where The Heart Is</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <div>
                <main>
                    <Heading
                        title="Home is where the heart is"
                        description="Det sägs att hemmet är där hjärtat finns. En liten tröst för den som förlorat all trygghet som ett hem innebär. I vår interaktiva upplevelse ställs du inför vissa av de frågor och val som många personer kämpar med varje dag. Har du det som krävs för att klara dig?"
                        page="/about"
                        text="Mer om projektet"
                    />
                    <div className="flex justify-center items-center">
                        <Link href="/game">
                            <div className="mt-5 inline-flex justify-center relative h-auto items-center cursor-pointer transition duration-500 ease-in-out transform hover:translate-y-4">
                                <Image
                                    priority
                                    src="/heart.svg"
                                    height={174}
                                    width={174}
                                    alt="Heart"
                                />
                                <p className="absolute text-green-50 text-2xl">
                                    Starta
                                    <br /> Spelet
                                </p>
                            </div>
                        </Link>
                    </div>
                </main>
            </div>
        </div>
    );
}
