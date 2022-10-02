import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
const TypeTitle = () => {
    return (
        <div className="inline-flex">
            <h1>#</h1>
            <Typewriter
                words={['Develop Tips', 'Front-End Dev', 'Hacking', 'Something New', 'My Works']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={80}
                delaySpeed={1000}
            />
        </div>
    )
}

export default TypeTitle
