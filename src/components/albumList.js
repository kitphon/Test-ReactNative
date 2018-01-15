import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import AlbumDetail from './albumDetail';

class AlbumList extends Component {
	state = { albums: [] };

	componentWillMount() {
		fetch('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => response.json())
			.then(response => this.setState({ albums: response }));
	}

	renderAlbums() {
		return this.state.albums.map(album =>
			<AlbumDetail key={album.title} data={album}></AlbumDetail>
		);
	}

	render() {
		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
}

export default AlbumList;
