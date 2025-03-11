'use server'

import { db } from "~/server/db";
import type { Izdelki } from "@prisma/client";

export async function getAllIzdelki() {
    try {
        const result = await db.izdelki.findMany();
        
        const izd = result.map((izdelki) => {
            return {
                id: izdelki.IzdelkiID,
                ime: izdelki.Ime,
                cena: izdelki.Cena,
                opis: izdelki.Opis,
                Proizvajalec: izdelki.Proizvajalec,
                slika: izdelki.Slika,
            };
        });
        return izd;
    } catch (error) {
        console.error('Error fetching izdelki:', error);
        throw error;
    } finally {
        await db.$disconnect();
    }
}

getAllIzdelki().then(izdelki => console.log(izdelki));
