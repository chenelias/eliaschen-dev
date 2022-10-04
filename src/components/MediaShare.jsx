import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { FaRegShareSquare } from 'react-icons/fa'
import { HiOutlineClipboardCopy } from 'react-icons/hi'
import { TiTick } from 'react-icons/ti'
import { HOMEPAGE_URL } from '../config'
export default function MediaShare() {
    let [isOpen, setIsOpen] = useState(false)
    const [copystate, setcopystate] = useState(false)
    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    async function CopyLink() {
        navigator.clipboard.writeText(window.location.href)
        setcopystate(true)
        setTimeout(function () {
            setcopystate(false)
        }, 3000)
    }
    return (
        <>
            <div title="Share This Page" className="inset-0 flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-md flex p-2 text-2xl font-medium text-black hover:bg-black dark:hover:bg-white dark:hover:bg-opacity-30 dark:text-white dark:active:bg-opacity-10 hover:bg-opacity-20 active:bg-opacity-5  focus:outline-none focus-visible:ring-2 duration-100 focus-visible:ring-white focus-visible:ring-opacity-75 items-center"
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
                                            w-full focus:ring-offset-gray-100 transition-all my-2"
                                        onClick={CopyLink}
                                    >
                                        <p className="tetx-center w-fll">
                                            {copystate ? 'Copied Success' : 'Copy link'}&thinsp;
                                        </p>
                                        {copystate ? (
                                            <span className=" w-fll text-2xl">
                                                <TiTick />
                                            </span>
                                        ) : (
                                            <span className="w-fll text-2xl">
                                                <HiOutlineClipboardCopy />
                                            </span>
                                        )}
                                    </button>
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border bg-red-400 p-2 px-5 font-medium shadow-sm dark:bg-red-600 hover:bg-red-500 dark:hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 
                                            w-full focus:ring-offset-gray-100 transition-all my-2"
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
        </>
    )
}
