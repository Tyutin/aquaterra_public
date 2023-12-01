<template>
    <div class="work-description" :class="{'work-description_right-side' : isRightSide}">
        <slot/>
    </div>
</template>

<script>
    export default {
        props: {
            isRightSide: {
                type: String,
                default: ''
            },
        },
    }
</script>

<style lang="scss" scoped>
.work-description {
    display: flex;
    margin: 40px 0;
    padding-right: 30px;

    &_right-side {
        padding-right: 0;
        padding-left: 30px;
        flex-direction: row-reverse;
    }

    &:last-child {
        margin-bottom: 0;
    }

    @media screen and (max-width: $MEDIA_DESKTOP_TO_TABLET) {
        flex-direction: column;
        padding: 0;
    }

    & > p{
        padding: 24px;
        font-size: 16px;
        line-height: 1.4;
        background-color: $COLOR_ORANGE_SECTION;

        @media screen and (max-width: $MEDIA_TABLET_TO_MOBILE) {
            padding: 15px;
        }
    }

    & > img {
        object-fit: cover;

        @media screen and (max-width: $MEDIA_DESKTOP_TO_TABLET) {
            height: 37.05vw;
        }
    }
}
</style>