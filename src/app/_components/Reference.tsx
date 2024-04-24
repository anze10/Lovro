/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AMWuEjhMRPF
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */


export default function Component() {
    return (
        <div className="flex flex-col ">
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container grid items-start gap-4 px-4 md:px-6 lg:grid-cols-2 lg:gap-10 lg:items-center">
                    <div className="flex flex-col items-start space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Naše Reference</h2>
                        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Naše reference vključujejo projekte v različnih stanovanjskih hišah po Sloveniji, več pravosodnih ustanovah, kot so okrožna in okrajna sodišča v Novem mestu, Ljubljani, Grosupljem in Kočevju, državna tožilstva, Ministrstvo za obrambo, Terme Čatež in različna podjetja, vključno z Mega d.o.o. in Mirografijo d.o.o. Opravili smo delo na več kot 150 enodružinskih hišah in stanovanjih.
                        </p>
                    </div>
                    <div className="grid w-full grid-cols-2 items-stretch justify-center gap-4 md:gap-8">
                        <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                            <img
                                alt="Logo"
                                className="aspect-[1/1] overflow-hidden rounded-lg object-contain object-center"
                                height="1000"
                                src="/A1_LOGOTIP RAVBAR_pokoncen no 01.png"
                                width="20000"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}