'use client';
import { motion } from 'framer-motion';

interface WordsPullUpProps {
    text: string;
    className?: string;
}

export function WordsPullUp({
    text, className = '',
}: WordsPullUpProps) {
    const splittedText = text.split(' ');
    const pullupVariant = {
        initial: { y: 20, opacity: 0 },
        animate: (i: number) => ({ y: 0, opacity: 1, transition: { delay: i * 0.05 }, }),
    };

    return (
        <div className="flex justify-center flex-wrap">
            {splittedText.map((currentWord: string, i: number) => (
                <motion.div
                    key={`${currentWord}-${i}-${text}`} variants={pullupVariant} initial="initial" animate="animate"
                    custom={i} className={`
                        text-xl text-center sm:text-sm md:text-md xl:text-xl
                        font-semibold tracking-tighter pr-2 inline-block ${className}
                    `}
                >
                    {currentWord === '' ? <span>&nbsp;</span> : currentWord}
                </motion.div>
            ))}
        </div>
    );
} 