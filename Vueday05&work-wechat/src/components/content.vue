<template>
    <div>
               <div class="item-person">
                    <div class="per-info">
                        <img v-if="item.gender" src="../../../作业/images/man-svg.svg" alt="">
                        <img v-else src="../../../作业/images/woman-svg.svg" alt="">
                        <div class="per-phone">
                            <h2>{{item.phone}}</h2>
                            <h1>{{item.name}}</h1>
                        </div>
                    </div>
                    <p>{{item.time | globalFormatTime}}</p>
                    <button class="remove" @click="remove">X</button>
                </div>
            
    </div>
</template>

<script>
export default {
    name:'Content',
    data(){
        return{
        
        }
    },
    props:{
        item:{
            type:Object
        },
        index:{
            type:Number 
        },
       
    },
    methods: {
        remove(){
            this.$emit('remove', {
                ind: this.index,
            })
        }
    },
}
</script>

<style>
    
    .item-person{
            position: relative;
            padding-right: 10px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 10px 60px 10px 10px;
            border-bottom: solid 1px #e2e2e2;
        }
        .item-person p{
            font-size: 13px;
            color: #999;
        }
        .per-info{
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        .per-info img{
            width: 44px;
            height: 44px;
        }
        .per-info h1{
            font-size: 14px;
            color: #666;
            font-weight: 400;
            margin: 0;
        }
        .per-info h2{
            font-size: 16px;
            color: #1c1c1c;
            font-weight: bold;
            margin: 0;
        }
        .per-phone{
            padding-left: 10px;
        }
        .remove{
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translate(0, -50%);
            border: none;
            background: none;
            color: #9e9c9c;
            font-size: 16px;
            line-height: 16px;
            outline: none;
        }
</style>


