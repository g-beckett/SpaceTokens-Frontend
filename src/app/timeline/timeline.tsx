import React from "react";
import Head from 'next/head';
import Link from 'next/link';

const Timeline = () => {

    return (
        <div>
            <h1> helloooo </h1>
            <Link href = '/capsuleCreation'>
                <button style={{ marginTop: '10px' }}>
                    New Capsule
                </button>
            </Link>
        </div>
    );
}
export default Timeline;