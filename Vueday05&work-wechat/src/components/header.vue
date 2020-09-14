<template>
    <div class="container">
        <div class="warpper">
            <!-- 头部 -->
            <div class="top-input">
                <div class="input-model">
                    <input type="text" v-model="name" class="input1" placeholder="姓名">
                    <input type="text" v-model="phone" class="input2" placeholder="手机号">
                    <span class="sex-box">
                        <span @click="addSpan1" :class="['span1',isSpan1 ? 'span-border' :'']"></span>
                        <span @click="addSpan2" :class="['span2',isSpan2 ? 'span-border' :'']"></span>
                    </span>
                </div>
                <button @click="addTask">添加</button>
            </div>

            <!-- 中间人数 -->
            <Middle :getLength="getLength"></Middle>
            
            <!-- 联系人 -->
            <div v-for="(item,index) in list" :key="'L'+index">
                <Content :item="item" :index="index" @remove="removeItem"></Content>
            </div>

        </div>
    </div>
</template>

<script>

import Middle from "./mid.vue"
import Content from "./content.vue"

export default {
    name:'Header',
    data(){
        return{
            isSpan1:true,
            isSpan2:false,
            name: '',
            phone: '',
            flag:true,
            time: new Date().getTime(),
            list:[
                {phone:13089890000,name:"小猴子",gender:true,time:1599895001611},
                {phone:13089890000,name:"小猴子",gender:false,time:1599895001611},
                {phone:13089890000,name:"小猴子",gender:false,time:1599895001611},
            ],

        }
    },

    components:{
        Middle,
        Content,
        
    },
    computed: {
        getLength(){
            return this.list.length
        }
    },
    methods: {
        addSpan1(){
            this.isSpan1 = true
            if(this.isSpan1 == true){
                this.isSpan2 = false
            }
            this.flag = true
            
        },
        addSpan2(){
            this.isSpan2 = true
            if(this.isSpan2 == true){
                this.isSpan1 = false
            }
            // this.isSpan1 = !this.isSpan1
            this.flag = false
        },
        addTask(){
            let time = new Date().getTime()
            if(this.flag){
                this.list.push({phone:this.phone,name:this.name,gender:true,time:time})

            }else{
                this.list.push({phone:this.phone,name:this.name,gender:false,time:time})
            }
        },
        removeItem(data){
            let info = this.list.splice(data.ind,1)
            return info
        }
    },
}
</script>

<style>
            .container{
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0
        }
        .warpper{
            min-width: 320px;
            max-width: 500px;
            margin: 0 auto;
            height: 100%;
            background-color: #fff;
        }
        .top-input{
            width: 100%;
            height: 44px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #f97197;
            padding: 0 10px;
        }
        .input-model{
            font-size: 0;
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        .top-input .input1{
            width: 64px;
            height: 30px;
            padding: 0 4px;
            border: none;
            outline: none;
            border-radius: 2px;
            font-size: 14px;
        }
        .top-input .input2{
            width: 120px;
            height: 30px;
            border: none;
            outline: none;
            padding: 0 3px;
            border-radius: 2px;
            margin-left: 6px;
            font-size: 14px;
        }
        .top-input button{
            width: 60px;
            height: 30px;
            line-height: 14px;
            font-size: 14px;
            border: none;
            background: #fff;
            color: #ee7096;
            font-weight: 400;
            border-radius: 4px;
        }

        .sex-box{
            display: inline-block;
            height: 30px;
            width: 30px;
            background: #fff;
            margin-left: 6px;
            border-radius: 2px;
            font-size: 0;
        }
        .span1{
            display: block;
            width: 100%;
            height: 50%;
            font-size: 12px;
            background-color: blue;
            text-align: center;
            line-height: 15px;
        }
        .span2{
            display: block;
            width: 100%;
            height: 50%;
            font-size: 12px;
            background-color:#f8b8cd;
        }

        .span-border{
            border: solid 1px #fff;

        }
</style>