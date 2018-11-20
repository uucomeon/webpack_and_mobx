import React, {Component} from 'react'
import {observer} from "mobx-react";
import {action, autorun, observable} from "mobx";
import moment from "moment";

@observer
export default class MobxTest extends Component {

    @observable time = new Date();

    componentDidMount(){
        let disposer = autorun(
                () => {
                    console.log(this.time.getTime());
                    if(this.time.getTime()%2===0){
                        this.time = 'a';
                    }
                },
                {
                    delay: 500 ,
                    name:"名称",
                    onError(e) {
                        console.log("异常了"+e);
                    }
                }
            );
        //delay 每次延迟

        setInterval(()=>{
            this.time = new Date();
        },1000);

        setTimeout(()=>{
            disposer();
            console.log("停止auto run");
        },20000);//20秒后停止auto run

    }


    render() {
        let statusPassTime = moment(parseInt(this.time.getTime())).format('YYYY-MM-DD:HH mm ss');
        return (
            <div>时间:{statusPassTime}</div>
        );
    }
}
