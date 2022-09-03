<template>
    <div style="width: 800px;margin: 0 auto">
        <h1>login</h1>
        <el-input v-model="loginForm.username" placeholder="Please input" />
        <el-input style="margin-top: 20px" v-model="loginForm.password" placeholder="Please input" />
        <el-button style="margin-top: 20px" type="primary" @click="handleLogin">登 录</el-button>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import { useUserStore } from '@/stores/user'
    import { useRouter } from 'vue-router'

    const loginForm = ref({
        username: '',
        password: ''
    })

    const { login } = useUserStore()
    const router = useRouter();

    const handleLogin = async () => {
        await login(loginForm.value)
        console.log('登录成功')
        router.push({
            path: '/'
        })
    }
</script>