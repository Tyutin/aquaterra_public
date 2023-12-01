<template>
    <div class="work-element">
        <div class="work-element__image-wrapper " :class="{ 'work-element__image-wrapper_with-arrow': arrow }">
            <img :src="require('../../assets/img/rounds/' + image)" alt="">
        </div>
        <p class="work-element__text">
            <span class="work-element__index" v-if="index">
                {{index}}
            </span>
            {{text}}
        </p>
        <p class="work-element__subtext" v-if="subtext">{{subtext}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            arrow: {
                type: String,
                default: ''
            },
            text: {
                type: String,
                default: ''
            },
            image: {
                type: String,
                default: ''
            },
            subtext: {
                type: String,
                default: ''
            },
            index: {
                type: String,
                default: ''
            },
        },
    }
</script>

<style lang="scss" scoped>
.work-element {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__image-wrapper {
        position: relative;
        width: 100px;
        height: 100px;
        margin-bottom: 15px;

        &_with-arrow {
            @media screen and (min-width: $MEDIA_TABLET_TO_DESKTOP) {
                position: relative;

                &::after {
                    position: absolute;
                    top: calc(50% - 7px);
                    left: calc(100% + 21px);
                    content: '';
                    width: 105px;
                    height: 14px;
                    background-image: url('./strelka.svg');
                }
            }
        }

        & > img{
            width: 100px;
            height: 100px;
        }
    }

    &__text {
        text-align: center;

        @media screen and (max-width: 800px) {
            font-size: 16px;
        }
    }

    &__subtext {
        text-align: center;
        font-size: 16px;
        margin-top: 5px;

        @media screen and (max-width: 800px) {
            font-size: 14px;
        }
    }

    &__index {
        color: $COLOR_BLUE_LIGHT;
        font-size: 22px;

        @media screen and (max-width: 800px) {
            font-size: 18px;
        }
    }
}
</style>