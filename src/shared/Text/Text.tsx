import React from 'react';
import styles from './Text.module.css'
import Circe from './0-circle-fill.svg'
import url from './png.png'

const Text = () => {
    return (
        <div className={styles.Text}>
            dawdwa
            <Circe/>
            <img src={url} alt=""/>
        </div>
    );
};

export default Text;