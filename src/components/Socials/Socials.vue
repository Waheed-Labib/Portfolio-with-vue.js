<script setup lang="ts">
    import ExternalLink from '../ExternalLink/ExternalLink.vue';
    import { BsGithub } from 'vue-icons-plus/bs';
    import { CgMail, CgFileDocument } from 'vue-icons-plus/cg';
    import { FaLinkedin } from 'vue-icons-plus/fa';
    import { SiSubstack } from 'vue-icons-plus/si';
</script>

<template>
    <div class="flex gap-2">
        
        <ExternalLink 
            href="" 
            variant="secondary" 
            tooltip="Resume"
            :style="{ '--anim-delay': '600ms' }"
        >
            <CgFileDocument />
        </ExternalLink>

        <ExternalLink 
            href="https://github.com/Waheed-Labib" 
            variant="secondary" 
            tooltip="GitHub"
            :style="{ '--anim-delay': '450ms' }"
        >
            <BsGithub />
        </ExternalLink>

        <ExternalLink 
            href="https://www.linkedin.com/in/waheed-labib-45b1b625a/" 
            variant="secondary" 
            tooltip="LinkedIn"
            :style="{ '--anim-delay': '300ms' }"
        >
            <FaLinkedin />
        </ExternalLink>

        <ExternalLink 
            href="https://substack.com/@waheedlabib" 
            variant="secondary" 
            tooltip="Substack"
            :style="{ '--anim-delay': '150ms' }"
        >
            <SiSubstack />
        </ExternalLink>

        <ExternalLink 
            href="mailto:labibwahid28@gmail.com" 
            variant="secondary" 
            tooltip="Email Me"
            :style="{ '--anim-delay': '0ms' }"
        >
            <CgMail />
        </ExternalLink>
    </div>
</template>



