import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions'

const SongList = (props) => {
	return (
					
		<div className="col-8">
			{props.songs.map((song)=>{
				return (
					<div className="flex items-center justify-between bg-gray-100" key={song.title}>
						<div className="h-full col-end-1 p-3 ">
							{song.title}
						</div>
						<div 
						className="px-3 py-2 text-xs font-bold tracking-wider text-gray-700 uppercase bg-blue-400 rounded-full cursor-pointer hover:shadow-md hover:"
						onClick={()=>{props.selectSong(song)}}
						> 
							Select
						</div>
					</div>
				);
			})}
		</div>
	)
}

const mapStateToProps = (state)=>{
	return {songs: state.songs};
}

export default connect(mapStateToProps, {selectSong})(SongList)