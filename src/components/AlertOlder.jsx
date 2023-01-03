import React from 'react'

const AlertOlder = () => {
    return (
        <div className="m-2">
            <div className="bg-red-600 w-full text-lg max-w-2xl p-2 mx-auto text-white font-bold rounded-md mb-10 flex">
                <p> This site is an older website.</p>
                <div className="flex-1"></div>
                <p className="">
                    &thinsp;{' '}
                    <a href="https://www.eliaschen.dev" className=" underline underline-offset-4 ">
                        Visit new site
                    </a>
                </p>
            </div>
        </div>
    )
}

export default AlertOlder
