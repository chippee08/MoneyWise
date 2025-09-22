<template>
    <div class="layout">
        <div class="container"> 
            <form action="" class="form">
                <div class="inputs">
                    <h1 class="title">Login</h1>
                    <div class="input-group">
                        <label for="username" class="label">Username:</label>
                        <input type="text" id="username" class="input" />
                    </div>
                    <div class="input-group">
                        <label for="password" class="label">Password:</label>
                        <input type="password" id="password" class="input" />
                    </div>
                    <button type="submit" class="button">Login</button>
                    <p>No account yet? <a href="#" class="register">Sign up here</a></p>
                </div>
                <div class="logo">
                    <img src="../assets/MoneyWise-v2.png" alt="MoneyWise Logo" class="w-32 h-32 mx-auto my-4" />
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.layout {
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

</style>