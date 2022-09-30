import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

function TypePosts() {
    return (
        <div className="inline-flex">
            <Typewriter
                words={['#Posts']}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={80}
                delaySpeed={1500}
            />
        </div>
    )
}

export default TypePosts
