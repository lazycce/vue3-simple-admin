<template>
    <div class="app-container">
        <el-card>
            <h1>Simple Admin</h1>
            <div style="margin-top: 30px" >
                <el-form :model="loginForm">
                    <el-form-item>
                        <el-input 
                            v-model="loginForm.username" 
                            placeholder="请输入账号" 
                        />
                    </el-form-item>
                    <el-form-item>
                        <el-input 
                            type="password" 
                            v-model="loginForm.password" 
                            placeholder="请输入密码" 
                        />
                    </el-form-item>
                </el-form>
            </div>
            <div>
                <el-checkbox 
                    v-model="loginForm.rememberMe" 
                    label="记住账号" 
                    size="large" 
                />
            </div> 
            <el-button 
                style="margin-top: 20px" 
                type="primary"
                @click="handleLogin"
            >登 录</el-button>
        </el-card>
    </div>
</template>

<script setup lang="ts">
    import { ref, unref } from 'vue'
    import { useUserStore } from '@/stores/user'
    import { useRouter } from 'vue-router'
    import { getCookie, setCookie, removeCookie } from '@/utils/auth'

    const loginForm = ref({
        username: '',
        password: '',
        rememberMe: false
    })

    const { login } = useUserStore()
    const router = useRouter();

    const handleLogin = async () => {
        if (loginForm.value.rememberMe) {
            const { username, password, rememberMe } = unref(loginForm)
            setCookie('username', username, { expires: 30 })
            setCookie('password', password, { expires: 30 })
            setCookie('rememberMe', rememberMe, { expires: 30 })
        } else {
            removeCookie('username')
            removeCookie('password')
            removeCookie('rememberMe')
        }
        await login(loginForm.value)
        router.replace({
            path: '/'
        })
    }

    const getRemember = () => {
        const username = getCookie('username')
        const password = getCookie('password')
        const rememberMe = getCookie('rememberMe') === 'true'
        loginForm.value = {
            ...loginForm.value,
            username,
            password,
            rememberMe
        }
    }
    getRemember()
</script>

<style>
    .app-container {
        width: 800px;
        margin: 0 auto;
    }
    .app-container {
    }
</style>