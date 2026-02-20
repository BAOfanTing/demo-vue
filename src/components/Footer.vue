<template>
    <div class="version">
        <a target="_blank" class="copyright" href="http://www.panduoma.com">@2020-{{currentYear}}潘多码智能毕设辅导平台</a>
        <a target="_blank" class="version" href="http://ww.panduoma.com">公众号:潘多码</a>
    </div>
</template>

<script setup>
import dayjs from 'dayjs';
const currentYear = dayjs().year();
</script>

<style lang="less" scoped>
.version.copyright {
    font-size: 14px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);

    a:hover {
        color: #0a0e14;
    }
}
</style>
