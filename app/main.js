import React from 'react';
import {render} from 'react-dom';
import Greeter from './comps/Greeter';
import './main.css';
import ComponentTwo from "./ComponentTwo";
import ParentComponent from "./ParentComponent";
import Greeter2 from "./comps/Greeter2";
import MobxTest from "./comps/MobxTest";

if (module.hot) {
    module.hot.accept();
}

//渲染页面
render(<div>
            <Greeter/>
            <Greeter2/>
            <ComponentTwo/>
            <ParentComponent />
            <MobxTest />
        </div>
,document.getElementById('root'));
