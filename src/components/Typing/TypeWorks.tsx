import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

function TypeWorks() {
    return (
        <div className="inline-flex">
            <Typewriter
                words={['#Works']}
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

export default TypeWorks
