import React, {Component} from 'react'
import config from '../config.json';
import styles from '../Greeter.css';//导入

export default class Greeter2 extends Component {
    render() {
        return (

            <div className={styles.root}>
                Greeter2:{config.greetText}
            </div>
        );
    }
}
