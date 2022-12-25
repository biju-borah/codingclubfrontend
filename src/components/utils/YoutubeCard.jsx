import React from 'react'
import './style.css'

function YoutubeCard() {
    return (
        <div className='youtube_card'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/WHyOHQ_GkNo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default YoutubeCard