<script setup lang="ts">
import QRcode from '@/assets/images/QRcode.jpg'
</script>

<template>
  <section>
    <div class="footer-wrapper">
      <div class="wrapper footer-content-wrapper">
        <div class="footer-content">
          <p>FAQ</p>
          <p>Support</p>
          <p>Join us</p>
        </div>
        <div class="footer-content">
          <p>Mail: *******</p>
          <p>Tel: ******</p>
          <p>Address: ******</p>
        </div>
        <div class="footer-content">
          <img class="footer-image" :src="QRcode" />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.footer-wrapper {
  background-color: black;
  height: 10rem;
}
.footer-content-wrapper {
  color: white;
  display: flex;
  justify-content: space-around;
}
.footer-image {
  width: 5rem;
  height: 5rem;
}
</style>
