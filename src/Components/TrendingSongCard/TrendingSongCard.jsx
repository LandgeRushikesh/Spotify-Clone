import React from 'react'

function TrendingSongCard({song}) {
  return (
    <div className="h-[500px] border-2 border-green-700">
      <div>
        <img src={song.url} alt={song.songName} />
      </div>
      <p>{song.songName}</p>
      <p>{song.artist}</p>
    </div>
  )
}

export default TrendingSongCard;