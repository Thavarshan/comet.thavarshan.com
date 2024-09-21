<script setup lang="ts">
import { SITE_TITLE } from '../seo';

definePageMeta({
  title: SITE_TITLE
});
</script>

<template>
  <section id="hero" class="overflow-hidden">
    <div class="container px-6 pt-6 pb-20">
      <div class="prose">
        <h1>Privacy Policy</h1>

        <h3>Comet - A No-Nonsense Media Conversion Tool</h3>

        <p><strong>Effective Date: August 18, 2024</strong></p>

        <p>At Comet, your privacy is paramount. We understand the importance of your personal data and are committed to ensuring your privacy is protected while using our application.</p>

        <h3>No Data Collection</h3>

        <p>Comet is designed to be a simple, straightforward media conversion tool. To that end, <strong>we do not collect, store, or share any personal data or information of any kind</strong>. When you use Comet, rest assured that your files, activities, and preferences remain entirely on your device.</p>

        <h3>Offline Processing</h3>

        <p>All media conversions and processes carried out by Comet occur locally on your device. We do not send any of your files or data to external servers or third parties. Comet relies on the power of <a href="https://ffmpeg.org/">FFmpeg</a> to handle media processing, and everything happens within the confines of your machine.</p>

        <h3>Transparency and Security</h3>

        <p>We believe in transparency and security. Since we don’t collect any data, there’s nothing for you to worry about regarding data breaches or unauthorized access to your information. Your privacy is fully protected by the nature of our application’s design.</p>

        <h3>Open Source Commitment</h3>

        <p>Comet is an open-source project. You can review our source code on <a href="https://github.com/stellar-comet/comet">GitHub</a> to see for yourself that we prioritize your privacy and security. Our commitment to transparency ensures that you know exactly how your data is handled—or in this case, not handled at all.</p>

        <h3>Contact Us</h3>

        <p>If you have any questions or concerns about our privacy practices, feel free to reach out to us at <a href="mailto:tjthavarshan@gmail.com">tjthavarshan@gmail.com</a></p>
      </div>
    </div>
  </section>
</template>
