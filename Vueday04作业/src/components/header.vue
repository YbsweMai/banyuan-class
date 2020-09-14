<template>
    <div class="header-container">
        <div class="header-left">
            <a href="https://www.banyuan.club/index"><img v-oss-src="'/commonbg/logo.png'" :style="{width:'200px'}" ></a>
        </div>

        <div class="header-right">
            <div class="header-nav">
                <a href="">首页</a>
            </div>
            <div class="header-nav">
                <a href="">职前集训</a>
            </div>
            <div class="header-nav">
                <a href="">高校俱乐部</a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:'header',
    data(){
        return {

        }
    }
}
</script>

<style>

a {
    text-decoration: none;
    color: black;
}    

.header-container{
    margin: 0 auto;
    width: 1200px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}

.header-left img{
    width: 200px;
}

.header-right{
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.header-nav{
    padding-right: 50px;
}
</style>