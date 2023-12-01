<template>
    <button class="callback-button" @click="openCallbackPopup">
        Получить консультацию
    </button>
</template>

<script>
    export default {
        methods: {
            openCallbackPopup() {
                this.$store.commit('popups/openCallbackPopup')
            }
        },
    }
</script>

<style lang="scss" scoped>
.callback-button {
    height: 45px;
    width: 100%;
    border: none;
    border-radius: 8px;
    text-transform: uppercase;
    box-sizing: border-box;
    font-size: 19px;
    font-weight: bold;
    color: #41a8f7;
    box-shadow: 4px 4px 11px 3px rgb(35 21 152 / 20%);
    background-color: #fff;
    cursor: pointer;
    transition: all  0.2s ease;

    @media screen and (max-width:470px) {
        font-size: 18px;
    }

    &:hover {
        @media screen and (min-width: $MEDIA_TABLET_TO_DESKTOP) {
            transform: rotate(-1deg);
        }
        color: #0085eb;
    }
}
</style>