
<script setup>
import { useRouter } from "vue-router";
import Ikon from "../components/Ikon.vue";

defineProps({
  judul: {
    type: String,
    default: "Halaman tidak ditemukan",
  },
  pesan: {
    type: String,
    default: "Periksa alamat halaman.",
  },
});

const router = useRouter();
</script>

<template>
  <section class="container info-page">
    <p class="eyebrow">
      <Ikon nama="daun" />
      Informasi SisaBaik
    </p>

    <h1>{{ judul }}</h1>

    <p class="muted">
      {{ pesan }}
    </p>

    <RouterLink to="/" class="button">
      <Ikon nama="panah" />
      Kembali ke beranda
    </RouterLink>
  </section>
</template>
