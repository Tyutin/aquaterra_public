<template>
    <div class="callback" :class="{'callback_footer' : isfooter === 'footer'}">
        <h2 class="callback__heading">Появились вопросы? <nobr>Звоните нам!</nobr></h2>
        <div class="callback__phone-list-wrapper">
            <div class="callback__phone-icon">
                <img v-if="isfooter == 'footer'" src="./icon_phone_lightblue.svg" alt="Иконка телефона">
                <img v-else src="./icon_phone3.svg" alt="Иконка телефона">
            </div>
            <ul class="callback__phone-list">
                <li class="callback__phone"><a href="tel:+73412470065">8 (3412) 47-00-65</a></li>
                <li class="callback__phone"><a href="tel:+79512057011">8-951-205-70-11</a></li>
            </ul>
        </div>
        <div class="callback__button-wrapper">
            <CallbackButton/>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            isfooter: {
                type: String,
                default: ''
            },
        },
    }
</script>

<style lang="scss" scoped>
.callback {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px;

    &__heading {
        color: $COLOR_BLUE_CALLBACK;
    }

    &__phone-list {
        display: flex;
        justify-content: center;

        @media screen and (max-width:$MEDIA_DESKTOP_TO_TABLET) {
            flex-direction: column;
            margin-right: 5px;
        }
    }

    &__phone {
        font-size: 42px;
        color: #fff;
        font-family: Bebas;
        font-weight: bold;

        @media screen and (max-width:$MEDIA_DESKTOP_TO_TABLET) {
            font-size: 35px;
        }

        &:first-of-type {
            @media screen and (min-width: $MEDIA_TABLET_TO_DESKTOP) {
                position: relative;
                margin-right: 40px;

                &::after{
                    content: "";
                    position: absolute;
                    width: 4px;
                    height: 100%;
                    right: -22px;
                    background-color: #fff;
                    top: -4px;
                }
            }
        }

        @media screen and (max-width: 319px) {
            font-size: 29px;
        }
    }

    &__phone-list-wrapper {
        position: relative;
        margin-bottom: 30px;

        @media screen and (max-width:$MEDIA_DESKTOP_TO_TABLET) {
            display: flex;
            justify-content: space-between;
            max-width: 300px;
            width: 100%;
        }
    }

    &__phone-icon{
        position: absolute;
        left: -62px;
        top: calc(50% - 35px);
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 60px;
        height: 60px;
        background-color: #ffffff1a;
        border-radius: 50%;

        @media screen and (max-width:$MEDIA_DESKTOP_TO_TABLET) {
            position: relative;
            left: unset;
            margin: 0 10px;
        }

        &::before, &::after {
            content: '';
            position: absolute;
            border-radius: 50%;
            background-color: #ffffff1a;
        }

        &::before {
            top: 10px;
            left: 10px;
            width: 40px;
            height: 40px;
        }

        &::after {
            top: -10px;
            left: -10px;
            width: 80px;
            height: 80px;
        }

        & img {
            width: 8px;
            height: 18px;
        }
    }

    &__button-wrapper{
        min-width: 340px;

        @media screen and (max-width:360px) {
            min-width: unset;
            width: 100%;
        }
    }

    &_footer {
        .callback {
            &__heading {
                color: $COLOR_GRAY_BASIC;
            }

            &__phone {
                color: $COLOR_BLUE_LIGHT;
                &:first-of-type {
                    &::after{
                        background-color: $COLOR_BLUE_LIGHT;
                    }
                }
            }
            
            &__phone-icon, 
            &__phone-icon::after, 
            &__phone-icon::before {
                background-color: #5db0f91a;
            }
        }
    }
}
</style>