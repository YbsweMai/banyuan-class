<template>
    <div class="box-container">
        <div class="box-top">
            <img v-oss-src1 = "item.imgURL" :style="{width:'400px',height:'255px'}">
            <div class="box-title">{{item.title}}</div>
        </div>       

        <div>创建时间:{{time | globalFormatTime}}</div>

        <p>{{item.words}}</p>
    </div>
</template>

<script>

import Moment from "moment";
Moment.locale('zh-cn');

export default {
    name:'proItem',
    data(){
        return {
            time: new Date().getTime()
        }
    },
    props:{
            item:{
                type:Object
            },
            index:{
                type:Number
            }
        },
        filters:{
            formatTime(value){
                let time = Moment(value).format('YYYY-MM-DD')
                return time
            },
            // formatDddd(value){
            //     let dddd = Moment(value).format('dddd'); 
            //     return dddd
            // }
        }
}
</script>

<style>
    .box-container{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 400px;
        padding: 80px 0;
    }

    .box-top{
        width: 400px;
        background: #fff;
        border: 1px solid #eaeaea;
        border-radius: 4px;
        overflow: hidden;
        position: relative;
        z-index: 2;
        cursor: pointer;

    }

    .box-title{
        width: 388px;
        height: 68px;
        padding-left: 10px;
        font-family: PingFangSC-Medium;
        font-size: 18px;
        color: #000;
        letter-spacing: 1.08px;
        line-height: 68px;
    }
    
</style>