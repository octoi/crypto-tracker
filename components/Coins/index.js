import React from 'react';
import styles from './coins.module.css';

const Coins = ({ id, name, price, symbol, marketcap, volume, image, priceChange }) => {
	return (
		<div className={styles.coin_container}>
			<div className={styles.coin_row}>
				<div className={styles.coin}>
					<img className={styles.coin_img} src={image} alt={id} />
					<h1 className={styles.coin_h1}>{name}</h1>
					<p className={styles.coin_symbol}>{symbol}</p>
				</div>
				<div className={styles.coin_data}>
					<p className={styles.coin_price}>₹{price}</p>
					<p className={styles.coin_volume}>₹{volume.toLocaleString()}</p>
					{priceChange < 0 ? (
						<p className={styles.coin_percent, styles.red}>{priceChange.toFixed(2)}%</p>
					) : (
						<p className={styles.coin_percent, styles.green}>{priceChange.toFixed(2)}%</p>
					)}
					<p className={styles.coin_market_cap}>
						Mkt Cap: ₹{marketcap.toLocaleString()}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Coins;
