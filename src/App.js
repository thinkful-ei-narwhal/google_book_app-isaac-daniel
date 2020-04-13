import React, { Component } from 'react';
import BookList from './components/BookList';
import Filter from './components/Filter';
import Search from './components/Search';

import './App.css';

export class App extends Component {
	state = {
		books: [],
		filter: null,
		printType: null,
		searchTerm: '',
	};

	updateTerm = (term) => {
		if (term) {
			this.setState({
				searchTerm: term,
			});
		}
	};

	updateBooks = (result) => {
		this.setState({
			books: result,
		});
	};

	render() {
		return (
			<div className='App'>
				<header className='header'>
					<h1>Google Book Search</h1>
				</header>
				<BookList />
				<Filter />
				<Search
					searchTerm={this.state.searchTerm}
					updateTerm={this.updateTerm}
					updateBooks={this.updateBooks}
				/>
			</div>
		);
	}
}

export default App;
