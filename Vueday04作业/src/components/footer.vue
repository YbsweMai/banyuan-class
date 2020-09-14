<template>
    <div class="footer-container">

        <div class="footer1">
            <a href="https://www.banyuan.club/index"><img v-oss-src="'/commonbg/logo-footer.png'" :style="{width:'150px'}" ></a>
            <h3 class="footer1-words">半圆的发展历程和背景，
                更清晰的了解我们</h3>
        </div>

        <div class="footer1">
            <h2 class="footer1-title">我们的故事</h2>
            <h3 class="footer1-words">半圆的发展历程和背景，
                更清晰的了解我们</h3>
        </div>

        <div class="footer1">
            <h2 class="footer1-title">成为一员</h2>
            <h3 class="footer1-words">半圆学社致力于数字领域的 不断开拓，欢迎志同道合的朋友加入我们。</h3>
        </div>

        <div class="footer1">
            <h2 class="footer1-title">成为一员</h2>
            <h3 class="footer1-words">半圆学社致力于数字领域的 不断开拓，欢迎志同道合的朋友加入我们。</h3>
        </div>
    </div>
</template>

<script>

export default {
    name:'footer',
    data(){
        return {
            
        }
    },
    methods: {
        getFooterM(){
            console.log('我是footer里的方法')
        }
    },
}
</script>

<style>
.footer-container{
    margin: 0 auto;
    background: #303232;
    padding: 64px 120px 85px 120px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.footer1{

    margin-top: 7px;
    width: 154px;
}

.footer1-title{
    font-size: 22px;
    line-height: 30px;
    color: #e3e3e3;
    font-weight: 500;
    cursor: pointer;
}

.footer1-words{
    font-size: 14px;
    line-height: 24px;
    color: #e3e3e3;
    font-weight: 400;
    margin: 34px 0;
}
</style>