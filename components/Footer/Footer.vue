<template>
    <footer class="footer">
        <Callback isfooter="footer" />
        <div class="footer__container">
            <div class="footer__half">
                <img src="./logo_footer_white.svg" alt="Логотип компании Акватерра" class="footer__logo">
                <p class="footer__subinfo">© 2009-2023 Аква терра™. <nobr>Все права защищены.</nobr></p>
                <p class="footer__subinfo"><a href="https://buro-sv.ru" target="_blank">Производство сайта Бюро СВ</a></p>
            </div>
            <div class="footer__half">
                <div class="footer__contact-wrapper">
                    <a href="https://yandex.ru/maps/-/CCUJ5AxD-C" class="footer__contact">
                        <img src="../../assets/img/icon_location_white.svg" alt="Иконка локации" class="footer__icon footer__icon_loc">
                        Завьяловский р-н, д. Хохряки, <nobr>ул. Весенняя, д. 14</nobr>
                    </a>
                </div>
                <div class="footer__contact-wrapper">
                    <a href="mailto:aquaterra18@yandex.ru" class="footer__contact">
                        <img src="../../assets/img/icon_mail_white.svg" alt="Иконка электронной почты" class="footer__icon footer__icon_mail">
                        aquaterra18@yandex.ru
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    display: flex;
    flex-direction: column;
    max-width: 1020px;
    margin: 0 auto;
    padding: 75px 0 20px;
    background-image: url('./footer-bg.webp');
    background-position: bottom;
    background-repeat: no-repeat;
    min-height: 465px;

    @media screen and (max-width: $MEDIA_TABLET_TO_BIG_MOBILE) {
        padding-bottom: 30px;
    }

    &__contact-wrapper {
        margin-bottom: 20px;
        text-transform: uppercase;
        font-family: 'Bebas', sans-serif;
        font-size: 22px;

        @media screen and (max-width: $MEDIA_TABLET_TO_BIG_MOBILE) {
            width: 100%;
        }
    }

    &__contact {
        display: flex;
        justify-content: flex-end;

        @media screen and (max-width: $MEDIA_TABLET_TO_BIG_MOBILE) {
            width: 100%;
            display: block;
            text-align: center;
        }
    }

    &__container {
        display: flex;
        justify-content: space-between;
        max-width: 960px;
        width: 100%;
        margin: 60px auto 0;
        padding: 0 10px;

        @media screen and (max-width: $MEDIA_TABLET_TO_BIG_MOBILE) {
            flex-direction: column-reverse;
        }
    }

    &__half {
        color: #fff;

        &:last-of-type {
            width: 70%;
        }

        @media screen and (max-width: $MEDIA_TABLET_TO_BIG_MOBILE) {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;

            &:last-of-type {
                width: 100%;
            }
        }
    }

    &__subinfo {
        font-size: 12px;

        & a {
            display: block;
            margin-top: 10px;
        }

        @media screen and (max-width: $MEDIA_TABLET_TO_BIG_MOBILE) {
            text-align: center;
        }
    }

    &__logo {
        height: 70px;;
        margin-bottom: 10px;

        @media screen and (max-width: $MEDIA_TABLET_TO_BIG_MOBILE) {
            display: none;
        }
    }

    &__icon {
        margin-right: 5px;

        &_loc {
            max-height: 20px;
        }

        &_mail {
            max-height: 15px;
        }
    }
}
</style>
