<template>
    <div>
        <div class="all-count">{{getLength}} 位练习人</div>
    </div>
</template>

<script>
export default {
    name:'Mid',
    data(){
        return{
        }
    },
    props:{
        getLength:{
            type:Number 
        },
    }
}
</script>

<style>
    .all-count{
        width: 100%;
        height: 30px;
        background-color: #f3f3f3;
        line-height: 30px;
        font-size: 14px;
        color: #666;
        padding: 0 10px;
    }
        
</style>