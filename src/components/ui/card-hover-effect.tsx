'use client';
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import AnimatedCircularProgressBar from "@/components/ui/animated-circular-progress-bar";
import { useState } from "react";
import Image from "next/image";

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        percent: number;
        name: string;
        logo: string;
        color: string;
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  py-10",
                className
            )}
        >
            {items.map((item, idx) => (
                <div
                    key={item?.name}
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card className="flex flex-col justify-center items-center">
                        {/* <AnimatedCircularProgressBar
                            max={100}
                            min={0}
                            className="min-[500px]:size-24 size-20 text-sm block mx-auto"
                            value={item.percent}
                            gaugePrimaryColor={item.color}
                            gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
                        /> */}
                        <div className="flex flex-nowrap justify-center items-center mt-3">
                            <Image
                            height={32}
                            width={32}
                                src={item.logo}
                                alt={item.name}
                                className="w-6 h-6"
                            />
                            <p className="text-zinc-100 text-xs min-[450px]:text-sm font-bold tracking-wide ml-2">
                                {item.name}
                            </p>
                        </div>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
            {children}
        </h4>
    );
};
export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
                className
            )}
        >
            {children}
        </p>
    );
};
