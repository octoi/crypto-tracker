import SearchBar from '../components/SearchBar';
import CoinList from '../components/CoinList';
import Layout from '../components/Layout';
import { apiUrl } from '../utils/constants';

export default function Home({ filteredCoins }) {
    return (
        <Layout>
            <div className="coin_app">
                <SearchBar type="text" placeholder="Search" />
                <CoinList filteredCoins={filteredCoins} />
            </div>
        </Layout>
    )
}

export const getServerSideProps = async () => {
    const res = await fetch(apiUrl);
    const filteredCoins = await res.json();
    return { props: { filteredCoins } };
}