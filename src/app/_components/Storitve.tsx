

export default function Component() {
    return (
        <div>

            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center space-y-4 mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Naše storitve</h2>
                        <p className="text-gray-500 max-w-md mx-auto">
                            Tu lahko izveste več o storitva, ki jih nudimo našim strankam.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center mb-4">
                                {/* <GaugeIcon className="w-10 h-10 text-primary mr-4" /> */}
                                <h3 className="text-xl font-bold">polaganje parketa</h3>
                            </div>
                            <p className="text-gray-500">
                                Parketarna ravbar polaga parkete hitro in kakovostno na več načinov
                            </p>
                            <div className="mt-4">
                                <img
                                    alt="Measurement"
                                    className="rounded-lg object-cover w-full"
                                    height={200}
                                    src="/polaganje.jpg"
                                    style={{
                                        aspectRatio: "300/200",
                                        objectFit: "cover",
                                    }}
                                    width={300}
                                />
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center mb-4">
                                {/* <DownloadIcon className="w-10 h-10 text-primary mr-4" /> */}
                                <h3 className="text-xl font-bold">Brušenje parketa</h3>
                            </div>
                            <p className="text-gray-500">
                                Povrnite barvo in siajanje vašemu parketu z brušenjem.
                            </p>
                            <div className="mt-4">
                                <img
                                    alt="Installation"
                                    className="rounded-lg object-cover w-full"
                                    height={200}
                                    src="/brusenje.jpg"
                                    style={{
                                        aspectRatio: "300/200",
                                        objectFit: "cover",
                                    }}
                                    width={300}
                                />
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center mb-4">
                                {/* <ActivityIcon className="w-10 h-10 text-primary mr-4" /> */}
                                <h3 className="text-xl font-bold">Oljenje parketa</h3>
                            </div>
                            <p className="text-gray-500">
                                Privoščite svojemu parketu dobro zaščito z oljenjem.
                            </p>
                            <div className="mt-4">
                                <img
                                    alt="Maintenance"
                                    className="rounded-lg object-cover w-full"
                                    height={200}
                                    src="/oljenje.jpg"
                                    style={{
                                        aspectRatio: "300/200",
                                        objectFit: "cover",
                                    }}
                                    width={300}
                                />
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center mb-4">
                                {/* <WrenchIcon className="w-10 h-10 text-primary mr-4" /> */}
                                <h3 className="text-xl font-bold">Vlaženje parketa</h3>
                            </div>
                            <p className="text-gray-500">
                                To nevem če sm čist prou izpisou
                            </p>
                            <div className="mt-4">
                                <img
                                    alt="Warranty"
                                    className="rounded-lg object-cover w-full"
                                    height={200}
                                    src="vlaga1.jpg"
                                    style={{
                                        aspectRatio: "300/200",
                                        objectFit: "cover",
                                    }}
                                    width={300}
                                />
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center mb-4">
                                {/* <ViewIcon className="w-10 h-10 text-primary mr-4" /> */}
                                <h3 className="text-xl font-bold">Lakiranje parketa</h3>
                            </div>
                            <p className="text-gray-500">
                                Lakiranje parketa je ena izmed naših storitev
                            </p>
                            <div className="mt-4">
                                <img
                                    alt="Consultation"
                                    className="rounded-lg object-cover w-full"
                                    height={200}
                                    src="/lakiranje.jpg"
                                    style={{
                                        aspectRatio: "300/200",
                                        objectFit: "cover",
                                    }}
                                    width={300}
                                />
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center mb-4">
                                {/* <CreditCardIcon className="w-10 h-10 text-primary mr-4" /> */}
                                <h3 className="text-xl font-bold">Izsuševanje estrihov</h3>
                            </div>
                            <p className="text-gray-500">
                                Nudimo tudi izsuševanje estrihov
                            </p>
                            <div className="mt-4">
                                <img
                                    alt="Financing"
                                    className="rounded-lg object-cover w-full"
                                    height={200}
                                    src="/estrihi.jpg"
                                    style={{
                                        aspectRatio: "300/200",
                                        objectFit: "cover",
                                    }}
                                    width={300}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

function ActivityIcon(props: any) {
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
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
    )
}





function CreditCardIcon(props: any) {
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
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" x2="22" y1="10" y2="10" />
        </svg>
    )
}


function DownloadIcon(props: any) {
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
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
    )
}


function GaugeIcon(props: any) {
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
            <path d="m12 14 4-4" />
            <path d="M3.34 19a10 10 0 1 1 17.32 0" />
        </svg>
    )
}





function ViewIcon(props: any) {
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
            <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
            <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
            <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
        </svg>
    )
}


function WrenchIcon(props: any) {
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
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
    )
}