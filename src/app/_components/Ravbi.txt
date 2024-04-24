"use client"
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ljlyKeEats3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
//import { Label } from "@/components/ui/label"
import { MantineProvider } from '@mantine/core';
import { InputLabel } from '@mantine/core';
import { Input } from '@mantine/core';
import { Textarea } from '@mantine/core';
import { Button } from '@mantine/core';

export default function Component() {
    return (
        <MantineProvider>
            {
                <div className="flex flex-col min-h-[100dvh]">
                    <header className="h-14 flex items-center px-4 lg:px-6">
                        <Link className="flex items-center justify-center" href="#">
                            <MountainIcon className="h-6 w-6" />
                            <span className="sr-only">Acme Inc</span>
                        </Link>
                        <nav className="ml-auto flex gap-4 sm:gap-6">
                            <Link className="text-sm font-medium" href="#">
                                Plank Flooring
                            </Link>
                            <Link className="text-sm font-medium" href="#">
                                Parquet Flooring
                            </Link>
                            <Link className="text-sm font-medium" href="#">
                                Contact
                            </Link>
                        </nav>
                    </header>
                    <main className="flex-1 flex flex-col">
                        <section className="h-[500px] sm:h-[600px] relative">
                            <img alt="Hero" className="absolute inset-0 object-cover w-full h-full z-0" src="/placeholder.svg" />
                            <div className="container flex flex-col items-center justify-center gap-4 z-10 px-4 md:px-6">
                                <div className="space-y-2 text-center">
                                    <h1 className="text-4xl font-semibold tracking-tighter sm:text-6xl lg:text-7xl">Wide Plank Flooring</h1>
                                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                        The perfect flooring for your home. Beautiful. Durable. Timeless.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Link
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                        href="test_slika_1.jpg"
                                    >
                                        View Gallery
                                    </Link>
                                    <Link
                                        className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                        href="public/test_slika_1.jpg"
                                    >
                                        Contact Sales
                                    </Link>
                                </div>
                            </div>
                        </section>
                        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
                            <div className="container grid items-start gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
                                <div className="flex flex-col items-start space-y-4">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                        Beautiful. Timeless. Durable.
                                    </h2>
                                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                        The perfect flooring for your home. Wide plank flooring adds warmth and character to any space. And with
                                        our durable finishes, it can stand up to the demands of modern life.
                                    </p>
                                </div>
                                <div className="grid gap-4">
                                    <h3 className="text-2xl font-bold tracking-tighter">Wide Plank Flooring</h3>
                                    <p className="font-semibold">Price: $10.99/sq ft</p>
                                    <p className="text-sm md:text-base">
                                        Our wide plank flooring is crafted from the finest hardwoods and finished to perfection. Each board is
                                        carefully milled to highlight the natural beauty of the wood, with distinctive grain patterns and rich
                                        color variations. The result is a floor that adds warmth and character to any space, with a timeless
                                        appeal that will last for generations.
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section className="w-full py-12 md:py-24 lg:py-32">
                            <div className="container grid items-center gap-10 px-4 md:px-6">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
                                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                        Have a question about our flooring options? Ready to start your next project? Contact us today.
                                    </p>
                                </div>
                                <div className="mx-auto w-full max-w-[400px] space-y-2">
                                    <form className="grid gap-4">
                                        <div className="grid gap-2">
                                            <InputLabel htmlFor="name">Name</InputLabel>
                                            <Input id="name" placeholder="Enter your name" required />
                                        </div>
                                        <div className="grid gap-2">
                                            <InputLabel htmlFor="email">Email</InputLabel>
                                            <Input id="email" placeholder="Enter your email" required type="email" />
                                        </div>
                                        <div className="grid gap-2">
                                            <InputLabel htmlFor="message">Message</InputLabel>
                                            <Textarea id="message" placeholder="Enter your message" required />
                                        </div>
                                        <Button type="submit">Submit</Button>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </main>
                    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Wide Plank Flooring. All rights reserved.</p>
                        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                            <Link className="text-xs hover:underline underline-offset-4" href="#">
                                Terms of Service
                            </Link>
                            <Link className="text-xs hover:underline underline-offset-4" href="#">
                                Privacy
                            </Link>
                        </nav>
                    </footer>
                </div>
            }
        </MantineProvider>
    )
}

function MountainIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}

