import React, {Component} from 'react'
import config from './config2.json';
import styles from './Greeter.css';//导入

class ComponentTwo extends Component {
    render() {
        return (
            <div className={styles.root}>
                {config.greetText}
            </div>
        );
    }
}

export default ComponentTwo
