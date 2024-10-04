import { io } from "socket.io-client";
import PropTypes from 'prop-types';

import { Input } from 'antd';

import { useSearchValue } from '../../contexts/SearchValueContext';
import { useEffect } from "react";

const { Search } = Input;

const socket = io('http://localhost:3000',);

export default function Searchbar({ className }) {
	const {setValue} = useSearchValue();

	const onImputChange = (e) => {
		socket.emit('inputChange', e.target.value);
	};

	useEffect(() => {
		
		socket.on('AutoCompleteOptions', (data) => {
			console.log(data);
			
		});
	}, []);

	return (
			<Search 
			    className = {className}
				placeholder="Encuentra todas las imagenes"
				allowClear
				enterButton = "Buscar"
				size='large'
				onSearch={setValue}
				onChange={onImputChange}
			/>
		
	);
};

Searchbar.propTypes = {
	className: PropTypes.string,
};