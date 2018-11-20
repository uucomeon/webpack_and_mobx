import React, {Component} from 'react'
import ComponentTwo from "./ComponentTwo";

//导入
class ParentComponent extends Component {
    render() {
        return (
            <div>
                <ComponentTwo />
            </div>
        );
    }
}

export default ParentComponent
