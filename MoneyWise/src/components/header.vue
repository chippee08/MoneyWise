<template>
  <header class="header">
    <!-- Logo (left on desktop, center on mobile) -->
    <div class="logo-container">
      <img src="@/assets/MoneyWise-Icon.png" alt="MoneyWise Logo" class="logo" />
    </div>

    <!-- Desktop Navigation -->
    <nav class="nav">
      <a href="/home" class="nav-link">Home</a>
      <a href="/settings" class="nav-link">Settings</a>
      <a href="/profile" class="nav-link">
        <!-- Profile SVG Icon -->
        <svg class="profile-icon" width="32" height="32" viewBox="0 0 24 24" fill="#fff">
          <circle cx="12" cy="8" r="4"/>
          <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
        </svg>
      </a>
      <button class="signout-btn" title="Sign Out">
        <!-- Sign Out SVG Icon -->
        <svg class="signout-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M17 16l4-4m0 0l-4-4m4 4H7"/>
          <path d="M9 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4"/>
        </svg>
      </button>
    </nav>

    <!-- Hamburger Menu Icon (mobile only) -->
    <button
    class="menu-btn"
    v-if="!sidebarOpen"
    @click="toggleSidebar"
    aria-label="Open navigation"
    >
    <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
        <rect y="4" width="24" height="2" rx="1"/>
        <rect y="11" width="24" height="2" rx="1"/>
        <rect y="18" width="24" height="2" rx="1"/>
    </svg>
    </button>

    <!-- Sidebar (mobile only) -->
    <transition name="sidebar">
      <aside v-if="sidebarOpen" class="sidebar">
        <div class="sidebar-header">
          <img src="@/assets/MoneyWise-Icon.png" alt="MoneyWise Logo" class="sidebar-logo" />
          <button class="close-btn" @click="toggleSidebar" aria-label="Close navigation">&times;</button>
        </div>
        <nav class="sidebar-nav">
          <a href="/home" class="sidebar-link" @click="toggleSidebar">Home</a>
          <a href="/settings" class="sidebar-link" @click="toggleSidebar">Settings</a>
          <a href="/profile" class="sidebar-link" @click="toggleSidebar">
            <!-- Profile SVG Icon -->
            <svg class="profile-icon" width="32" height="32" viewBox="0 0 24 24" fill="#fff">
              <circle cx="12" cy="8" r="4"/>
              <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
            </svg>
            Profile
          </a>
          <button class="sidebar-signout" @click="toggleSidebar">
            <!-- Sign Out SVG Icon -->
            <svg class="signout-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 16l4-4m0 0l-4-4m4 4H7"/>
              <path d="M9 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4"/>
            </svg>
            Sign Out
          </button>
        </nav>
      </aside>
    </transition>
    <!-- Overlay for sidebar -->
    <div v-if="sidebarOpen" class="sidebar-overlay" @click="toggleSidebar"></div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const sidebarOpen = ref(false)
function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  background: #00bf63;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 64px;
  position: relative;
  z-index: 10;
  font-family: 'Roboto', sans-serif;
}

.logo-container {
  display: flex;
  align-items: center;
  height: 100%;
}

.logo {
  height: 40px;
  width: 40px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }
}

.profile-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #fff2;
  padding: 2px;
}

.signout-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.signout-icon {
  width: 28px;
  height: 28px;
  vertical-align: middle;
}

.menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 1rem;
}

.sidebar-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.3);
  z-index: 19;
}

.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 220px;
  height: 100vh;
  background: #00bf63;
  box-shadow: -2px 0 8px rgba(0,0,0,0.1);
  z-index: 20;
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  animation: sidebar-in 0.2s;
}

@keyframes sidebar-in {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 2rem;
}

.sidebar-logo {
  width: 48px;
  height: 48px;
  margin: 0 auto;
}

.close-btn {
  position: absolute;
  right: 0;
  top: 0;
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  line-height: 1;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;
}

.sidebar-link {
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  &:hover {
    opacity: 0.7;
  }
}

.sidebar-signout {
  background: none;
  border: none;
  color: #fff;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    opacity: 0.7;
  }
}

@media (max-width: 500px) {
  .header {
    padding: 0 1rem;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
  }
  .logo-container {
    flex: 1;
    justify-content: center;
    order: 2;
  }
  .logo {
    margin: 0 auto;
    display: block;
  }
  .nav {
    display: none;
  }
  .menu-btn {
    display: block;
    order: 3;
    z-index: 21;
  }
}
</style>