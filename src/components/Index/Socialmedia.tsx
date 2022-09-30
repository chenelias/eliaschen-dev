import React from 'react'
import { BsGithub, BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs/index.js'
const Socialmedia = () => {
    return (
        <div>
            <a target="_blank" className="flex" href="https://github.com/chenelias/">
                <li className="flex hover:underline hover:underline-offset-8 items-center text-purple-500 font-bold">
                    <BsGithub className="mr-[5px]" />
                    @chenelias
                </li>
            </a>
            <a target="_blank" className="flex" href="https://twitter.com/chenelias5/">
                <li className="flex hover:underline hover:underline-offset-8 items-center text-purple-500 font-bold">
                    <BsTwitter className="mr-[5px]" />
                    @chenelias5
                </li>
            </a>
            <a target="_blank" className="flex" href="https://www.facebook.com/people/Elias-Chen/100074943037854/">
                <li className="flex hover:underline hover:underline-offset-8 items-center text-purple-500 font-bold">
                    <BsFacebook className="mr-[5px]" />
                    @EliasChen
                </li>
            </a>
            <a target="_blank" className="flex" href="https://www.instagram.com/codechen9810/">
                <li className="flex hover:underline hover:underline-offset-8 items-center text-purple-500 font-bold">
                    <BsInstagram className="mr-[5px]" />
                    @codechen9810
                </li>
            </a>
        </div>
    )
}

export default Socialmedia
