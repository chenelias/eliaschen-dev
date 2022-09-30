import React from 'react'
import { Menu, Transition } from '@headlessui/react'
import { IoMenu } from 'react-icons/io5/index.js'
import DropdownMenuItem from './DropdownMenuItem'

const DropdownMenu = () => {
    return (
        <Menu as="div" className="text-left inline-block relative mr-3">
            <div>
                <Menu.Button
                    className="inline-flex justify-center rounded-md border border-zinc-400 p-2 text-sm font-medium shadow-sm hover:bg-orange-200 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 transition-all"
                    aria-label="menu"
                >
                    <IoMenu className="h-5 w-5" />
                </Menu.Button>
            </div>
            <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md border border-zinc-400 dark:border-zinc-700 bg-orange-50 dark:bg-zinc-800 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none divide-zinc-400 dark:divide-zinc-700">
                    <div className="py-1">
                        <div className="px-3 py-2 uppercase font-bold text-xs">Navigation</div>
                    </div>
                    <DropdownMenuItem href="/posts">Posts</DropdownMenuItem>
                    <DropdownMenuItem href="/works">Works</DropdownMenuItem>
                    <DropdownMenuItem href="https://github.com/chenelias/eliaschen-dev">
                        <a href="https://github.com/chenelias/eliaschen-dev" target="_blank">
                            Source
                        </a>
                    </DropdownMenuItem>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default DropdownMenu
