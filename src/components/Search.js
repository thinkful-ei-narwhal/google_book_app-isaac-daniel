import React, { Component } from 'react';

export class Search extends Component {
	render() {
		const { searchTerm, updateBooks } = this.props;

		const handleSubmit = (e) => {
			e.preventDefault();
			let term = searchTerm;

			const baseURL = 'https://www.googleapis.com/books/v1/volumes';

			fetch(`${baseURL}?q=${term}`)
				.then((res) => {
					if (res.ok) {
						return res.json();
					}
				})
				.then((data) => updateBooks(data.items));
		};

		return (
			<section className='search'>
				<form action='#' id='search-bar' onSubmit={handleSubmit}>
					<label htmlFor='search-input'>Search</label>
					<input
						type='text'
						name='searchInput'
						id='search-input'
						placeholder='Search Term'
						value={searchTerm}
						onChange={(e) => {
							this.props.updateTerm(e.target.value);
						}}
					/>
					<button type='submit'>Submit</button>
				</form>
			</section>
		);
	}
}

export default Search;
