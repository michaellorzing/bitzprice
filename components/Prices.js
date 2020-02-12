import React, { useState } from 'react';

const Prices = bpi => {
	const [currency, setCurrency] = useState('USD');

	let list = '';

	if (currency === 'USD') {
		list = (
			<li className='list-group-item'>
				Bitcoin prices for {bpi.bpi.USD.description}:{' '}
				<span className='badge badge-primary'>{bpi.bpi.USD.code}</span>{' '}
				<strong>{bpi.bpi.USD.rate}</strong>
			</li>
		);
	} else if (currency === 'GBP') {
		list = (
			<li className='list-group-item'>
				Bitcoin prices for {bpi.bpi.GBP.description}:{' '}
				<span className='badge badge-primary'>{bpi.bpi.GBP.code}</span>{' '}
				<strong>{bpi.bpi.GBP.rate}</strong>
			</li>
		);
	} else if (currency === 'EUR') {
		list = (
			<li className='list-group-item'>
				Bitcoin prices for {bpi.bpi.EUR.description}:{' '}
				<span className='badge badge-primary'>{bpi.bpi.EUR.code}</span>{' '}
				<strong>{bpi.bpi.EUR.rate}</strong>
			</li>
		);
	}
	return (
		<div>
			<ul className='list-group'></ul>
			{list}
			<hr />
			<button
				className='button button-primary'
				onClick={() => setCurrency('USD')}
			>
				USD
			</button>
			<button
				className='button button-primary'
				onClick={() => setCurrency('GBP')}
			>
				GBP
			</button>
			<button
				className='button button-primary'
				onClick={() => setCurrency('EUR')}
			>
				EUR
			</button>
		</div>
	);
};

export default Prices;
