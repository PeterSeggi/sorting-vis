import Link from "next/link";

export default function Home(){
    return(
        <main>
            <h1>We're here!</h1>
            <Link href="/">
                <h2>Go back?</h2>
            </Link>
    
        </main>
    )
}