'use client'
import Acme from '@/asserts/logo-acme.png'
import Celestial from '@/asserts/logo-celestial.png'
import Echo from '@/asserts/logo-echo.png'
import Pulse from '@/asserts/logo-pulse.png'
import Quantum from '@/asserts/logo-quantum.png'

import { motion } from "framer-motion";
import Image from "next/image";


export default function LogoTicker() {
    return (
        <section className="py-20 md:py-24">
             <div className="container mx-auto">
                <div className="flex justify-center items-center gap-5">
                    <div className='flex-1 md:flex-none mx-20'>
                        <h2>
                            Trusted by top innovative teams
                        </h2>
                    </div>
                    <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                        <motion.div
                            initial={{ x: "50" }}
                            animate={{ x: "-50%" }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="flex flex-none gap-18 pr-14"
                        >
                            {
                                [Acme, Celestial, Echo, Pulse, Quantum, Acme, Celestial, Echo, Pulse, Quantum].map((logo, index) => (
                                    <Image key={index} src={logo} alt="Logo" className="h-6 w-auto flex-none"/>
                                ))
                            }
                        </motion.div>
                    </div>
                </div>
             </div>
        </section>
    );
}