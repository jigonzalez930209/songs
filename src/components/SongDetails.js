import React from 'react'
import {connect} from 'react-redux'

const SongDetails = (props) => {
	console.log(props)
	return (
		<div>
			<div>title: { props.song !== null ? props.song.title : " -- " }</div>
			<div>duration: {props.song !== null ? props.song.duration : " -- " }</div>
		</div>
	)
}

const mapStateToProps = (state) => {
    return { song:state.selectedSong }
}

export default connect(mapStateToProps)(SongDetails)
