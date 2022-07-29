import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import fetching from "../helpers/fetching";

const Home = () => {
	const dispatch = useDispatch();

	const postSelector = useSelector(({ posts }) => posts.posts);

	const [form, setForm] = useState({
		title: '',
		author: '',
	});

	useEffect(() => {
		fetchPosts();
	}, []);

	const fetchPosts = async () => {
		const getPosts = await fetching('GET', null, null);

		dispatch({
			type: 'SET_POSTS',
			payload: getPosts
		});

	};

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			const createData = await fetching('POST', form, {
				'Content-Type': 'application/json'
			});

			fetchPosts();
		} catch (error) {

		}

	};

	const onChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setForm({ ...form, [name]: value });
	};

	return (
		<div>

			<form onSubmit={ onSubmit }>
				<label htmlFor="">Title</label>
				<br />
				<input type="text" name="title" onChange={ onChange } /><br />

				<label htmlFor="">Author</label>
				<br />
				<input type="text" name="author" onChange={ onChange } /><br />

				<input type="submit" value="Submit" />


			</form>

			{ postSelector?.map(post => (
				<div
					key={ post.id }
				>
					<h1>{ post.title }</h1>
				</div>
			)) }
		</div>
	);
};

export default Home;
