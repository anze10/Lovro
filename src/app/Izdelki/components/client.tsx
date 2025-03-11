'use client'

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getAllIzdelki } from './server';

export default function IzdelkiList() {
    const { data: izdelki, isLoading, error } = useQuery({
        queryKey: ['izdelki'],
        queryFn: () => getAllIzdelki(),
    });

    if (isLoading) return <p>Nalaganje...</p>;
    if (error instanceof Error) return <p>{error.message}</p>;

    return (
        <div>
            <h1>Seznam izdelkov</h1>
            {izdelki && izdelki.length > 0 ? (
                <div>
                    {izdelki.map((izdelek) => (
                        <div key={izdelek.IzdelkiID} style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
                            <h2>{izdelek.Ime}</h2>
                            <p>{izdelek.Opis ?? 'Brez opisa'}</p>
                            <p>Cena: {izdelek.Cena ?? 'Ni cene'} €</p>
                            <p>Proizvajalec: {izdelek.Proizvajalec}</p>
                            {/* {izdelek.Slika && (
                                <img
                                    src={izdelek.Slika}
                                    alt={izdelek.Ime}
                                    style={{ maxWidth: '200px', height: 'auto' }}
                                />
                            )} */}
                            <button style={{ marginTop: '10px' }}>
                                <a href={`/izdelek/${izdelek.IzdelkiID}`}>Poglej izdelek</a>
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Ni izdelkov za prikaz.</p>
            )}
        </div>
    );
}