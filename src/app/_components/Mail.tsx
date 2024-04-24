import { MantineProvider, Input, Textarea, Button, TextInput, Textarea as MantineTextarea } from '@mantine/core';

export default function Component() {
    return (
        <MantineProvider theme={{
            components: {
                TextInput: {
                    defaultProps: {
                        styles: {
                            input: {
                                border: '1px solid rgba(0, 0, 0, 0.4)',
                                borderRadius: '4px'
                            }
                        }
                    }
                },
                Textarea: {
                    defaultProps: {
                        styles: {
                            input: {
                                border: '1px solid rgba(0, 0, 0, 0.4)',
                                borderRadius: '4px'
                            }
                        }
                    }
                }
            }
        }}>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container grid items-center gap-4 px-4 text-center sm:px-6 md:gap-10">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Zaupajte nam svoje želje
                        </h2>
                    </div>
                    <div className="mx-auto w-full max-w-[400px] space-y-2">
                        <form className="grid gap-4">
                            <TextInput
                                label="Ime"
                                id="name"
                                placeholder="Vpišite svoje ime"
                                required
                            />
                            <TextInput
                                label="Email"
                                id="email"
                                placeholder="Vpišite svoj e-naslov"
                                type="email"
                                required
                            />
                            <MantineTextarea
                                label="Želja"
                                id="message"
                                placeholder="Zaupajte nam svojo željo"
                                required
                            />
                            <Button type="submit">Pošlji</Button>
                        </form>
                    </div>
                </div>
            </section>
        </MantineProvider>
    )
}
