import React from 'react'
import { Cover } from "@/components/ui/cover";
import { projects as allProjects } from "@/data/index";
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";
import Safari from "@/components/ui/safari";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { FaLocationArrow } from 'react-icons/fa6';
import MagicButton from './MagicButton';

export default function Project() {
    const projects = allProjects.filter(project => project.isFeatured);
    return (
        <div id='projects' className='w-full'>
            <h1 className="text-4xl md:text-4xl mb-8 lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                A small selection of <br /> <Cover className='text-purple'>Recent Projects</Cover>
            </h1>

            <div className='w-full flex flex-wrap justify-center'>
                {
                    projects.map((project, index) => (
                        <CardContainer className="inter-var" key={index}>
                            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] xl:w-[550px] h-auto rounded-xl px-3 py-6 min-[500px]:p-6 border">
                                <CardItem
                                    translateZ="50"
                                    className="flex flex-nowrap w-full justify-between items-center text-neutral-600 dark:text-white"
                                >
                                    <p className='text-xl font-bold'>
                                        {project.title}
                                    </p>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                                        className='rounded-full'>
                                        <FaGithub className='text-3xl' />
                                    </a>
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                >
                                    {project.des}
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4">
                                    <Safari url="magicui.design" src={project.img} className="size-full" />
                                    {/* <Image
                                        src={project.img}
                                        height="600"
                                        width="1000"
                                        className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    /> */}
                                </CardItem>
                                <div className="flex justify-between items-center mt-12">
                                    <CardItem>
                                        <div className="flex items-center">
                                            {project.iconLists.map((icon, index) => (
                                                <div
                                                    key={index}
                                                    className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                                    style={{
                                                        transform: `translateX(-${5 * index + 2}px)`,
                                                    }}
                                                >
                                                    <img src={icon} alt="icon5" className="p-2" />
                                                </div>
                                            ))}
                                        </div>
                                    </CardItem>
                                    <CardItem>
                                        <a className="flex justify-center items-center"
                                            href={project.link} target="_blank" rel="noopener noreferrer"
                                        >
                                            <p className="flex text-sm text-purple">
                                                Check Live Site
                                            </p>
                                            <FaLocationArrow className="ms-3" color="#CBACF9" />
                                        </a>
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                    ))
                }
            </div>

            <Link href="/projects" className='block w-[240px] mx-auto'>
                <MagicButton
                    title="Show all projects"
                    icon={<FaLocationArrow />}
                    position="right"
                />
            </Link>
        </div>
    )
}
