<template>
    <div class="title">
        <span>Title</span>
    </div>
    <el-row class="tac">
        <el-col :span="24">
            <el-menu
                :default-active="active"
                class="el-menu-vertical-demo">
                <el-sub-menu index="1">
                    <template #title>
                        <svg id="title-icon" t="1732698818489" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8590" width="256" height="256"><path d="M419.037 287.953h413.124c17.673 0 32-14.327 32-32s-14.327-32-32-32H419.037c-17.673 0-32 14.327-32 32s14.327 32 32 32zM419.028 543.17h411.608c17.673 0 32-14.327 32-32s-14.327-32-32-32H419.028c-17.673 0-32 14.327-32 32s14.327 32 32 32zM832.161 735.802H419.037c-17.673 0-32 14.327-32 32s14.327 32 32 32h413.124c17.673 0 32-14.327 32-32s-14.327-32-32-32z" fill="" p-id="8591"></path><path d="M256.037 255.953m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="" p-id="8592"></path><path d="M256.037 510.787m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="" p-id="8593"></path><path d="M256.037 767.621m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="" p-id="8594"></path></svg>
                        <span>1</span>
                    </template>
                        <el-menu-item index="1-1" @click="router.push('/index')">
                            <template #title>
                                <svg id="title-icon" t="1732698818489" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8590" width="256" height="256"><path d="M419.037 287.953h413.124c17.673 0 32-14.327 32-32s-14.327-32-32-32H419.037c-17.673 0-32 14.327-32 32s14.327 32 32 32zM419.028 543.17h411.608c17.673 0 32-14.327 32-32s-14.327-32-32-32H419.028c-17.673 0-32 14.327-32 32s14.327 32 32 32zM832.161 735.802H419.037c-17.673 0-32 14.327-32 32s14.327 32 32 32h413.124c17.673 0 32-14.327 32-32s-14.327-32-32-32z" fill="" p-id="8591"></path><path d="M256.037 255.953m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="" p-id="8592"></path><path d="M256.037 510.787m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="" p-id="8593"></path><path d="M256.037 767.621m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="" p-id="8594"></path></svg>
                                <span>1-1</span>
                            </template>
                        </el-menu-item>
                        <el-menu-item index="1-2" @click="router.push('/a2')">
                            <template #title>
                                <svg id="title-icon" t="1732698818489" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8590" width="256" height="256"><path d="M419.037 287.953h413.124c17.673 0 32-14.327 32-32s-14.327-32-32-32H419.037c-17.673 0-32 14.327-32 32s14.327 32 32 32zM419.028 543.17h411.608c17.673 0 32-14.327 32-32s-14.327-32-32-32H419.028c-17.673 0-32 14.327-32 32s14.327 32 32 32zM832.161 735.802H419.037c-17.673 0-32 14.327-32 32s14.327 32 32 32h413.124c17.673 0 32-14.327 32-32s-14.327-32-32-32z" fill="" p-id="8591"></path><path d="M256.037 255.953m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="" p-id="8592"></path><path d="M256.037 510.787m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="" p-id="8593"></path><path d="M256.037 767.621m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="" p-id="8594"></path></svg>
                                <span>1-2</span>
                            </template>
                        </el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="2">
                    <template #title>
                        <svg id="title-icon" t="1732698818489" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8590" width="256" height="256"><path d="M419.037 287.953h413.124c17.673 0 32-14.327 32-32s-14.327-32-32-32H419.037c-17.673 0-32 14.327-32 32s14.327 32 32 32zM419.028 543.17h411.608c17.673 0 32-14.327 32-32s-14.327-32-32-32H419.028c-17.673 0-32 14.327-32 32s14.327 32 32 32zM832.161 735.802H419.037c-17.673 0-32 14.327-32 32s14.327 32 32 32h413.124c17.673 0 32-14.327 32-32s-14.327-32-32-32z" fill="" p-id="8591"></path><path d="M256.037 255.953m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="" p-id="8592"></path><path d="M256.037 510.787m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="" p-id="8593"></path><path d="M256.037 767.621m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="" p-id="8594"></path></svg>
                        <span>2</span>
                    </template>
                    <el-menu-item index="2-1" @click="router.push('/a3')">
                        <template #title>
                            <svg id="title-icon" t="1732698818489" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8590" width="256" height="256"><path d="M419.037 287.953h413.124c17.673 0 32-14.327 32-32s-14.327-32-32-32H419.037c-17.673 0-32 14.327-32 32s14.327 32 32 32zM419.028 543.17h411.608c17.673 0 32-14.327 32-32s-14.327-32-32-32H419.028c-17.673 0-32 14.327-32 32s14.327 32 32 32zM832.161 735.802H419.037c-17.673 0-32 14.327-32 32s14.327 32 32 32h413.124c17.673 0 32-14.327 32-32s-14.327-32-32-32z" fill="" p-id="8591"></path><path d="M256.037 255.953m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="" p-id="8592"></path><path d="M256.037 510.787m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="" p-id="8593"></path><path d="M256.037 767.621m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="" p-id="8594"></path></svg>
                            <span>2-1</span>
                        </template>
                    </el-menu-item>
                    <el-menu-item index="2-2" @click="router.push('/a4')">
                        <template #title>
                            <svg id="title-icon" t="1732698818489" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8590" width="256" height="256"><path d="M419.037 287.953h413.124c17.673 0 32-14.327 32-32s-14.327-32-32-32H419.037c-17.673 0-32 14.327-32 32s14.327 32 32 32zM419.028 543.17h411.608c17.673 0 32-14.327 32-32s-14.327-32-32-32H419.028c-17.673 0-32 14.327-32 32s14.327 32 32 32zM832.161 735.802H419.037c-17.673 0-32 14.327-32 32s14.327 32 32 32h413.124c17.673 0 32-14.327 32-32s-14.327-32-32-32z" fill="" p-id="8591"></path><path d="M256.037 255.953m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="" p-id="8592"></path><path d="M256.037 510.787m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="" p-id="8593"></path><path d="M256.037 767.621m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="" p-id="8594"></path></svg>
                            <span>2-2</span>
                        </template>
                    </el-menu-item>
                </el-sub-menu>
                <el-menu-item index="3" @click="router.push('/a5')">
                    <template #title>
                        <svg id="title-icon" t="1732698818489" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8590" width="256" height="256"><path d="M419.037 287.953h413.124c17.673 0 32-14.327 32-32s-14.327-32-32-32H419.037c-17.673 0-32 14.327-32 32s14.327 32 32 32zM419.028 543.17h411.608c17.673 0 32-14.327 32-32s-14.327-32-32-32H419.028c-17.673 0-32 14.327-32 32s14.327 32 32 32zM832.161 735.802H419.037c-17.673 0-32 14.327-32 32s14.327 32 32 32h413.124c17.673 0 32-14.327 32-32s-14.327-32-32-32z" fill="" p-id="8591"></path><path d="M256.037 255.953m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="" p-id="8592"></path><path d="M256.037 510.787m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="" p-id="8593"></path><path d="M256.037 767.621m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="" p-id="8594"></path></svg>
                        <span>3</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="4" @click="router.push('/a6')">
                    <svg id="title-icon" t="1732698818489" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8590" width="256" height="256"><path d="M419.037 287.953h413.124c17.673 0 32-14.327 32-32s-14.327-32-32-32H419.037c-17.673 0-32 14.327-32 32s14.327 32 32 32zM419.028 543.17h411.608c17.673 0 32-14.327 32-32s-14.327-32-32-32H419.028c-17.673 0-32 14.327-32 32s14.327 32 32 32zM832.161 735.802H419.037c-17.673 0-32 14.327-32 32s14.327 32 32 32h413.124c17.673 0 32-14.327 32-32s-14.327-32-32-32z" fill="" p-id="8591"></path><path d="M256.037 255.953m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="" p-id="8592"></path><path d="M256.037 510.787m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="" p-id="8593"></path><path d="M256.037 767.621m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="" p-id="8594"></path></svg>
                    <span>4</span>
                </el-menu-item>
                <el-menu-item index="5" @click="router.push('/test')">
                    <template #title>
                        <svg id="title-icon" t="1732698818489" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8590" width="256" height="256"><path d="M419.037 287.953h413.124c17.673 0 32-14.327 32-32s-14.327-32-32-32H419.037c-17.673 0-32 14.327-32 32s14.327 32 32 32zM419.028 543.17h411.608c17.673 0 32-14.327 32-32s-14.327-32-32-32H419.028c-17.673 0-32 14.327-32 32s14.327 32 32 32zM832.161 735.802H419.037c-17.673 0-32 14.327-32 32s14.327 32 32 32h413.124c17.673 0 32-14.327 32-32s-14.327-32-32-32z" fill="" p-id="8591"></path><path d="M256.037 255.953m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="" p-id="8592"></path><path d="M256.037 510.787m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="" p-id="8593"></path><path d="M256.037 767.621m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="" p-id="8594"></path></svg>
                        <span>5</span>
                    </template>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>



<script lang="ts" setup>
import router from "@/router/index.js";
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const active = ref("");
const route = useRoute();

onMounted(() => {
    let path = route.path
    if (path.includes('/index')) active.value = '1-1';
    if (path.includes('/a2')) active.value = '1-2';
    if (path.includes('/a3')) active.value = '2-1';
    if (path.includes('/a4')) active.value = '2-2';
    if (path.includes('/a5')) active.value = '3';
    if (path.includes('/a6')) active.value = '4';
    if (path.includes('/test')) active.value = '5';
})
</script>



<style scoped>
.el-menu-vertical-demo {
    height: 100%;
    background-color: #fff;
    border-right: none;
}
.el-row {
    height: 100%;
}
.el-col {
    height: 100%;
}

#title-icon {
    padding-right: 10px;
    width: 18px;
    height: 18px;
}

.title {
    width: 200px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    background-color: rgb(64,158,255);
    color: white;
}
</style>