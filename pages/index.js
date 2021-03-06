import { useState } from 'react';
import { apiUrl } from '../utils/constants';
import SearchBar from '../components/SearchBar';
import CoinList from '../components/CoinList';
import Layout from '../components/Layout';

export default function Home({ filteredCoins }) {
    const [search, setSearch] = useState('');
    const allCoins = filteredCoins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value.toLowerCase());
    }

    return (
        <Layout>
            <div className="coin_app">
                <SearchBar type="text" placeholder="Search" onChange={handleChange} />
                <CoinList filteredCoins={allCoins} />
            </div>
        </Layout>
    )
}

export const getServerSideProps = async () => {
    const res = await fetch(apiUrl);
    const filteredCoins = await res.json();
    return { props: { filteredCoins } };
}