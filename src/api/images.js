import axios from 'axios';
import { API_URL } from '../constants/config';
import { db } from './firebase';
import {collection, doc, setDoc} from 'firebase/firestore';

const BASE_URL = `${API_URL}/images`;

export const getImages = async ({ query } = {}) => {
	const url = new URL(BASE_URL);
	if (query) {
		url.searchParams.append('search', query);
	}

	const response = await axios.get(url.toString());

	return response.data;
};

export const setImage = async ({ data }) => {
	return new Promise((resolve) => {
		const reader = new FileReader();

		reader.readAsDataURL(data.file);

		reader.onload = async () => {
			const collectionRaf = doc(db, 'images');
			const docRef = await setDoc(collectionRaf, { 
				...data,
				file: reader.result,
				filename: data?.file?.name,
				createdAT: new Date.now() / 1000,
				nanoseconds: 0,
				data: new Date(),
				Strings: {
					Date: new Date().toLocaleDateString(),
					time: new Date().toDateString(),
				},
			});

			console.log('Document written with ID' , docRef);
			resolve(docRef);

		};
	});
};