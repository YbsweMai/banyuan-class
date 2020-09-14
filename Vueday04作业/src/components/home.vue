<template>
    <div>
        <Header></Header>
        <div class="middle-container">
            <div v-for="(item,index) in list" :key="'L'+index">
                    <pro-item :item="item" :index="index"></pro-item>   
                     
            </div>
            
        </div>
        <Footer ref="footerRef"></Footer> 
        <!-- ref获取footer组件  -->
        <button @click="getFooter">获取footer组件里的方法</button>
    </div>
</template>

<script>

import Header from "./header.vue"
import Footer from "./footer.vue"
import proItem from "./proItem.vue"

export default {
    name:'home',
    data(){
        return {
            list:[
                {imgURL:'/WEB_css.jpeg',title:'CSS入门',words:'CSS是一种能为网页增添样式的语言。它能够修改网页中的字体样式、颜色、背景，增加华丽的动画与3D 效果，是给网页增添设计感的工具。'},
                {imgURL:'/WEB_css_block.jpeg',title:'CSS工具箱',words:'在你进一步了解CSS样式和布局之前，这里为你提供一个助你写出合格CSS和理解所有基本理论的工具箱。'},
                {imgURL:'/WEB_css_style.png',title:'CSS样式文字',words:'在这里我们开始学习为文本添加样式的基础，包括设置字体、粗细、斜体、行还有字符间距、阴影以及文本的其他特征。'},
                {imgURL:'/WEB_css_layout.jpg',title:'CSS布局',words:'接下来我们将介绍如何把你想要的内容放在正确位置上，将涉及浮动和定位等相关的布局方法。'},
            ],

        }
    },
    
    methods: {
        getFooter(){
            this.$refs.footerRef.getFooterM()  /* ref获取footer组件里的getFooterM方法 */
        }
    },
    
    components:{
        Header,
        Footer,
        'pro-item' :proItem
    },
    
}

</script>

<style>

.middle-container{
    /* width: 100vw; */
    /* height: 900px; */
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 250px;

}

</style>