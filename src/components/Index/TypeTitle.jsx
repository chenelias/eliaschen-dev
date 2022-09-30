import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
const TypeTitle = () => {
    return (
        <div className="inline-flex">
            <h1>#</h1>
            <Typewriter
                words={['Develop Tips', 'Web Design', 'UI/UX', 'Info Security', 'Something New']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={80}
                delaySpeed={1500}
            />
        </div>
    )
}

export default TypeTitle
