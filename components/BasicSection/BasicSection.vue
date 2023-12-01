<template>
    <section class="basic-section" :class="{'basic-section_waved' : waved}">
        <slot />
    </section>
</template>

<script>
    export default {
        props: {
            waved: {
                type: String,
                default: ''
            },
        },
    }
</script>

<style lang="scss" scoped>
.basic-section {
    max-width: 1020px;
    margin: 0 auto;
    padding: 50px 0;

        @media screen and (max-width: $MEDIA_TABLET_TO_MOBILE) {
            padding: 30px 0;
        }

    &_waved {
        position: relative;

        @media screen and (max-width: $MEDIA_TABLET_TO_MOBILE) {
            padding-bottom: 40px;
        }

        &::after{
            content: '';
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 7px;
            background-image: url('./sectionWaveFull3.svg');
            background-repeat: no-repeat;
            background-size: cover;
        }
    }

    & .container {
        display: flex;
        flex-direction: column;
        align-items: center;

        & > p {
            max-width: 800px;
            margin-bottom: 30px;
            text-align: center;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }

}
</style>