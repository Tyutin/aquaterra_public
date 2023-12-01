<template>
    <header class="header">
        <div class="container">
            <div class="header__top">
                <nuxt-link to="/" class="header__logo">
                    <img src="./logo.svg" alt="Логотип Акватерра">
                </nuxt-link>
                <div class="header__contacts">
                    <a href="https://yandex.ru/maps/-/CCUJ5AxD-C" target="_blank" class="header__location">
                        Ижевск
                    </a>
                    <ul class="header__phone-list">
                        <li class="header__phone"><a href="tel:+73412470065">8 (3412) 47-00-65</a></li>
                        <li class="header__phone"><a href="tel:+79512057011">8 (951) 205-70-11</a></li>
                    </ul>
                </div>
                <button class="header__toggle" :class="{'header__toggle-active' : isMenuOpen}" @click="toggleMenuOpen"/>
            </div>
            <nav class="header__nav" :class="{'header__nav-active' : isMenuOpen}" @click="closeMenu">
                <ul>
                    <li>
                        <nuxt-link to="#burenie_skvajin">бурение скважин</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#obustroistvo_i_avtomatizaciya">обустройство и автоматизация</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#vodoprovod_i_kanalizaciya">водопровод и канализация</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#otoplenie_i_teply_pol">отопление</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#o_kompanii">о компании</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#kak_my_rabotaem">как мы работаем</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#contacts">контакты</nuxt-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                isMenuOpen: false
            }
        },
        methods: {
            toggleMenuOpen() {
                this.isMenuOpen = !this.isMenuOpen
            },
            closeMenu() {
                this.isMenuOpen = false
            }
        },
    }
</script>

<style lang="scss" scoped>
.header {
    position: sticky;
    top: 0;
    z-index: 2;
    background-color: #fff;

        @media screen and (max-width: $MEDIA_TABLET_TO_BIG_MOBILE) {
            // overflow: hidden;
        }

    & .container {
        display: flex;
        flex-direction: column;
    }

    &__toggle {
        position: relative;
        display: none;
        border: unset;
        width: 40px;
        height: 34px;
        background-color: #fff;
        border-top: 4px solid $COLOR_BLUE_H1;
        border-bottom: 4px solid $COLOR_BLUE_H1;
        transition: 0.3s;

        @media screen and (max-width: $MEDIA_TABLET_TO_BIG_MOBILE) {
            width: 36px;
            height: 28px;
        }

        &::after, &::before {
            content: '';
            position: absolute;
            top: calc(50% - 2px);
            left: 0;
            width: 100%;
            height: 4px;
            background-color: $COLOR_BLUE_H1;
            transition: all 0.3s;
        }

        &-active {
            border-color: transparent;

            &::after {
                transform: rotate(45deg);
            }

            &::before {
                transform: rotate(-45deg);
            }
        }

        @media screen and (max-width: $MEDIA_TABLET_TO_BIG_MOBILE) {
            display: block;
        }
    }

    &__nav {
        font-size: 18px;
        font-family: 'Bebas', sans-serif;
        text-transform: uppercase;

        @media screen and (max-width: $MEDIA_DESKTOP_TO_TABLET) {
            font-size: 16px;
        }

        @media screen and (max-width: $MEDIA_TABLET_TO_BIG_MOBILE) {
            position: absolute;
            right: 0;
            top: -250%;
            width: 100%;
            padding: 10px;
            background-color: #fff;
            font-size: 24px;
            transition: top 0.3s ease;
            max-height: calc(100vh - 90px);
            overflow: scroll;

            &-active {
                top: 100%;
            }
        }

        & ul {
            display: flex;
            justify-content: space-between;

            @media screen and (max-width: $MEDIA_TABLET_TO_BIG_MOBILE) {
                flex-direction: column;
                align-items: center;
            }
        }

        & a {
            display: block;
            padding-bottom: 14px;
            transition: all 0.2s ease;

            &:hover {
                color: $COLOR_BLUE_H1;

                @media screen and (min-width: $MEDIA_BIG_MOBILE_TO_TABLET) {
                    padding-bottom: 12px;
                    border-bottom: 2px solid $COLOR_BLUE_H1;
                }
            }

        }
    }

    &__top {
        display: flex;
        justify-content: space-between;
        padding: 20px 0;

        @media screen and (max-width: $MEDIA_TABLET_TO_BIG_MOBILE) {
            align-items: center;
            background-color: #fff;
            z-index: 1;
        }
    }

    &__logo {
        height: 70px;

        & > img {
            height: 70px;
        }

        @media screen and (max-width: $MEDIA_TABLET_TO_BIG_MOBILE) {
            height: 50px;

            & > img {
                height: 50px;
            }
        }
    }

    &__contacts {
        display: flex;
        align-items: baseline;
        font-family: 'Bebas', sans-serif;
        font-weight: bold;
        color: $COLOR_BLUE_H1;

        @media screen and (max-width: $MEDIA_TABLET_TO_BIG_MOBILE) {
            display: none;
        }
    }

    &__location {
        position: relative;
        display: block;
        font-size: 22px;
        margin-right: 60px;

        &::before {
            position: absolute;
            content: "";
            width: 13px;
            height: 18px;
            background-image: url('../../assets/img/icon_location_blue.svg');
            background-size: cover;
            left: -20px;
            background-repeat: no-repeat;
        }
    }

    &__phone-list {
        position: relative;
        font-size: 30px;

        &::before {
            position: absolute;
            content: "";
            width: 13px;
            height: 18px;
            background-image: url('../../assets/img/icon_phone_blue.svg');
            background-size: contain;
            top: 4px;
            left: -20px;
            background-repeat: no-repeat;
        }
    }
}
</style>