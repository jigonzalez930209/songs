import { combineReducers } from 'redux'


const songReducers = () => {
    return [
        { title: 'macarena', duration: '4:50' },
        { title: 'Dame', duration: '3:50' },
        { title: 'La Tempestad', duration: '2:50' },
        { title: 'Dragons', duration: '1:50' },
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songReducers,
    selectedSong: selectedSongReducer
})