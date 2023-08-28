import React from 'react'
import styles from './contacts.module.css';

export default function ContactsShine() {
    return (
        <div className={styles.contactsBody}>
        <span contentEditable={false} spellCheck={false} className={styles.contactsSpan}>
            CONTACTS
        </span>
    </div>
    );
}

