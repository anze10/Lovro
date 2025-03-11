'use server'

import { db } from "~/server/db";


type PlainIzdelki = {
    IzdelkiID: number;
    Ime: string;
    Cena: number | null;
    Opis: string | null;
    Proizvajalec: string;
    Slika: string;
};

export async function getAllIzdelki(): Promise<PlainIzdelki[]> {
    try {
        // Get raw data from database
        const result = await db.izdelki.findMany();

        // Create empty array we'll fill
        const izdelkiArray: PlainIzdelki[] = [];

        // Loop through each database result
        for (const izdelek of result) {
            // Create plain object with exactly the properties we need
            const plainIzdelek: PlainIzdelki = {
                IzdelkiID: izdelek.IzdelkiID,
                Ime: izdelek.Ime,
                Cena: izdelek.Cena,
                Opis: izdelek.Opis,
                Proizvajalec: izdelek.Proizvajalec,
                Slika: izdelek.Slika
            };

            // Add to our array
            izdelkiArray.push(plainIzdelek);.
        }

        // Return the complete array
        return izdelkiArray;

    } catch (error) {
        console.error('Error fetching izdelki:', error);
        throw error;
    } finally {
        await db.$disconnect();
    }
}