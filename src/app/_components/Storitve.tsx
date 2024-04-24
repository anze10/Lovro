

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

