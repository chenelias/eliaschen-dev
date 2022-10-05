import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { FaRegShareSquare } from 'react-icons/fa/index.js'
import { HiOutlineClipboardCopy } from 'react-icons/hi/index.js'
import { TiTick } from 'react-icons/ti/index.js'
import { BsFacebook, BsTwitter, BsLine } from 'react-icons/bs/index.js'
import React, { useEffect } from 'react'
export default function MediaShare() {
    let [isOpen, setIsOpen] = useState(false)
    const [copystate, setcopystate] = useState(false)
    const sharedetail = {
        title: '',
        text: '',
        url: '',
    }
    async function Shareapiuse() {
        try {
            await navigator.share(sharedetail)
        } catch (err) {
            alert(
                `${err}\nYour browser does not support navigator Share API , this function not support on Firefox、WebView-Android`
            )
        }
    }
    function openModal() {
        setIsOpen(true)
    }
    function closeModal() {
        setIsOpen(false)
    }

    async function CopyLink() {
        navigator.clipboard.writeText(window.location.href)
        setcopystate(true)
        setTimeout(function () {
            setcopystate(false)
        }, 3000)
    }
    function GetFacebookShareLink() {
        return window.open('https://www.facebook.com/sharer/sharer.php?u=' + window.location.href)
    }
    function GetTwitterShareLink() {
        return window.open('http://www.twitter.com/share?url=' + window.location.href)
    }
    function GetLineShareLink() {
        return window.open('http://social-plugins.line.me/lineit/share?url=' + window.location.href)
    }
    return (
        <div>
            <div title="Share This Page" className="inset-0 flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-md flex p-2 text-2xl font-medium text-black hover:bg-black dark:hover:bg-white dark:hover:bg-opacity-30 dark:text-white dark:active:bg-opacity-10 hover:bg-opacity-20 active:bg-opacity-5  focus:outline-none focus-visible:ring-2 duration-100 focus-visible:ring-white focus-visible:ring-opacity-75 items-center ml-1"
                >
                    <FaRegShareSquare />
                </button>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-20" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="duration-200 rounded-md dark:bg-[rgba(0,0,0,0.29)] bg-[rgba(255,255,255,0.30)] backdrop-blur-[5px]  flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="transform rounded-xl overflow-auto dark:bg-slate-800 bg-white p-5  align-middle transition-all mx-1 w-[300px]">
                                    <Dialog.Title as="h3" className="text-2xl font-bold font-mplus text-center mb-2">
                                        Share this page
                                    </Dialog.Title>
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border dark:bg-zinc-700 bg-orange-100 p-2 px-5 font-medium shadow-sm hover:bg-orange-50 dark:hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 
                                            w-full focus:ring-offset-gray-100 transition-all my-1"
                                        onClick={CopyLink}
                                    >
                                        {copystate ? (
                                            <span className=" w-fll text-2xl">
                                                <TiTick />
                                            </span>
                                        ) : (
                                            <span className="w-fll text-2xl">
                                                <HiOutlineClipboardCopy />
                                            </span>
                                        )}
                                        <p className="tetx-center w-fll ml-1">
                                            {copystate ? 'Copied Success' : 'Copy link'}&thinsp;
                                        </p>
                                    </button>
                                    <button
                                        onClick={Shareapiuse}
                                        className="items-center inline-flex justify-center rounded-md border dark:bg-zinc-700 bg-orange-100 p-2 px-5 font-medium shadow-sm hover:bg-orange-50 dark:hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 
                                            w-full focus:ring-offset-gray-100 transition-all my-1"
                                    >
                                        <p className="text-xl mr-1">
                                            <FaRegShareSquare />
                                        </p>
                                        <p className=" ">Share with borwser</p>
                                    </button>
                                    <button
                                        target="_blank"
                                        onClick={GetFacebookShareLink}
                                        className="justify-center rounded-md border bg-blue-500 p-2 px-5 font-medium shadow-sm dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 
                                            w-full focus:ring-offset-gray-100 transition-all my-1 flex items-center"
                                    >
                                        <p className="text-xl mr-1">
                                            <BsFacebook />
                                        </p>
                                        <p className=" ">Facebook</p>
                                    </button>
                                    <button
                                        target="_blank"
                                        onClick={GetTwitterShareLink}
                                        className="inline-flex justify-center rounded-md border bg-blue-300 p-2 px-5 font-medium shadow-sm dark:bg-blue-500 hover:bg-blue-400 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 
                                            w-full focus:ring-offset-gray-100 transition-all my-1 items-center"
                                    >
                                        <p className="text-xl mr-1">
                                            <BsTwitter />
                                        </p>
                                        <p>Twitter</p>
                                    </button>
                                    <button
                                        target="_blank"
                                        onClick={GetLineShareLink}
                                        className="inline-flex justify-center rounded-md border bg-green-400 p-2 px-5 font-medium shadow-sm dark:bg-green-600 hover:bg-green-300 dark:hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 
                                            w-full focus:ring-offset-gray-100 transition-all my-1 items-center"
                                    >
                                        <p className="text-xl mr-1">
                                            <BsLine />
                                        </p>
                                        <p>Line</p>
                                    </button>
                                    <button
                                        type="button"
                                        className="inline-flex text-lg justify-center rounded-md border bg-gray-300 p-2 px-5  shadow-sm dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 
                                            w-full focus:ring-offset-gray-100 transition-all my-1 font-bold"
                                        onClick={closeModal}
                                    >
                                        <p>Close</p>
                                    </button>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}
