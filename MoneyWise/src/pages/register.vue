<template>
    <div class="layout">
        <div class="container"> 
            <form action="" class="form">
                <div class="inputs">
                    <h1 class="title">Sign up</h1>
                    <div class="input-group">
                        <label for="FullName" class="label">Full Name:</label>
                        <input type="text" id="fullName" class="input" />
                    </div>
                    <div class="input-group">
                        <label for="email" class="label">Email:</label>
                        <input type="email" id="email" class="input" />
                    </div>
                    <div class="input-group">
                        <label for="number" class="label">Contact Number:</label>
                        <input type="number" id="number" class="input" />
                    </div>
                    <div class="input-group">
                        <label for="password" class="label">Password:</label>
                        <input type="password" id="password" class="input" />
                    </div>
                    <button type="submit" class="button">Sign up.</button>
                    <p>Already have an account? <a href="#" class="register" @click.prevent="goToLogin">Sign in here.</a></p>
                </div>
                <!-- Vertical divider -->
                <div class="divider"></div>
                <div class="logo">
                    <img src="../assets/MoneyWise-v2.png" alt="MoneyWise Logo" class="w-32 h-32 mx-auto my-4" />
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
    import { useRouter } from 'vue-router'
    const router = useRouter()

    function goToLogin() {
    router.push('/login')
}
</script>

<!-- styles -->
<style lang="scss" scoped>
.layout {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f2f5;
}

.container {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 80%;
    height: auto;
}

.title {
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    color: #333;
}

.form {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;
}

.input-group {
    margin-bottom: 1rem;
}

.label {
    display: block;
    margin-bottom: 0.5rem;
    color: #555;
}

.input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
}

.inputs{
    animation: fade-slide-left 1s ease-out forwards;
}

.button {
    padding: 0.75rem;
    background-color: #00bf63;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.button:hover {
    background-color: #000000;
}

.register{
    color: #00bf63;
    text-decoration: none;
}

.divider {
    width: 3px;
    height: 500px;
    background-color: #d9d9d9;
    margin: 0 2rem;
    border-radius: 1px;
}

.logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: fade-slide-in 1s ease-out forwards;
}

@keyframes fade-slide-in {
    from {
        transform: translateX(100px);
        opacity: 0;                  
    }
    to {
        transform: translateX(0);    
        opacity: 1;                  
    }
}

@keyframes fade-slide-left {
    from {
        transform: translateX(-100px);
        opacity: 0;                  
    }
    to {
        transform: translateX(0);    
        opacity: 1;                  
    }
}


@media (max-width: 1168px) {
    .container {
        width: 98%;
        padding: 1rem;
    }

    .form {
        flex-direction: column;
        gap: 1rem;
        align-items: stretch;
    }

    .inputs{
        animation: fade-slide-left 1s ease-out forwards;
    }

    .logo {
        order: -1;
        margin-bottom: 1rem;
        margin-top: 0;
        align-items: center;
        animation: fade-slide-in 1s ease-out forwards;
    }

    .logo img {
        width: 200px !important;
        height: 100px !important;
    }

    @keyframes fade-slide-in {
        from {
            transform: translateY(-100px);
            opacity: 0;                  
        }
        to {
            transform: translateX(0);    
            opacity: 1;                  
        }
    }

    @keyframes fade-slide-left {
        from {
            transform: translateX(-100px);
            opacity: 0;                  
        }
        to {
            transform: translateX(0);    
            opacity: 1;                  
        }
    }

    .divider {
        display: none;
    }

    .title {
        font-size: 1.2rem;
    }

    .input {
        font-size: 0.95rem;
        padding: 0.4rem;
    }
    
    .button {
        font-size: 0.95rem;
        padding: 0.6rem;
    }
}
</style>