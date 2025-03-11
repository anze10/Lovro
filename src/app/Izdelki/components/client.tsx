'use client'

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getAllIzdelki } from './server';
import { Izdelki } from '@prisma/client';



export default function IzdelkiList() {
    const { data: izdelki, isLoading, error } = useQuery({
        queryKey: ['izdelki'],
        queryFn: getAllIzdelki,
    });

    if (isLoading) return <p>Nalaganje...</p>;
    if (error instanceof Error) return <p>{error.message}</p>;

    return (
        <div>
            <h1>Seznam izdelkov</h1>
            {izdelki && izdelki.length > 0 ? (
                <div>
                    {izdelki.map((izdelek: Izdelki) => {
                        const plainIzdelek = { ...izdelek }; // Ensure plain object
                        return (
                            <div key={plainIzdelek.IzdelkiID} style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
                                <h2>{plainIzdelek.Ime}</h2>
                                <p>{plainIzdelek.Opis || 'Brez opisa'}</p>
                                <p>Cena: {plainIzdelek.Cena} €</p>
                                <p>{plainIzdelek.Proizvajalec || 'Ni podatka'}</p>
                                <button>
                                    <a href={`/izdelek?id=${plainIzdelek.IzdelkiID}`}>Poglej izdelek</a>
                                </button>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <p>Ni izdelkov za prikaz.</p>
            )}
        </div>
    );
}
