import React from 'react'
import HyperText from './ui/hyper-text'
import { skills as mySkills } from '@/data/index'
import { HoverEffect } from './ui/card-hover-effect'

export default function Skills() {
    return (
        <div id='skills' className='pt-16 w-full'>
            <h1 className='flex justify-center'>
                <HyperText
                    className="text-2xl sm:text-4xl md:text-5xl my-8 text-center font-bold text-black dark:text-white"
                    text="My Tech Stack"
                />
            </h1>

            <div className="max-w-6xl mx-auto sm:px-8">
                <HoverEffect items={mySkills} />
            </div>
        </div>
    )
}
