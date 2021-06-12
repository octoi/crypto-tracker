import Head from 'next/head'
import SearchBar from '../components/SearchBar'
import Coins from '../components/Coins'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Crypto Tracker</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SearchBar type="text" placeholder="Search" />
            <Coins />
        </div>
    )
}
