import React from 'react';
import styles from '../css/Loader.module.css';

export function Loader() {
    return (
        <>
            <nav className={`${styles.lds_ring}`}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </nav>
        </>
    );
}
