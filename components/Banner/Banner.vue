<template>
    <section class="banner">
        <div class="container banner_container">
            <div class="banner_info">
                <h1 class="banner_header">Скважины на воду <nobr>в Ижевске</nobr> <nobr>за 3 дня</nobr></h1>
                <p>Компактная буровая установка легко и быстро монтируется на ваш участок, аккуратно и без повреждения ландшафта.</p>
                <CallbackButton/>
            </div>
            <img src="./Banner.webp" alt="Загородный дом с грунтовыми водами под ним">
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.banner {
    background-color: #94d0fc;

        @media (max-width: 1019px) {
            padding-bottom: 30px;
        }

    &_container {
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media (max-width: 1019px) {
            flex-direction: column-reverse;
        }
    }

    &_info {
        max-width: 400px;

        @media (max-width: 1019px) {
            max-width: 570px;
        }

        & p {
            margin-bottom: 40px;
        }
    }

    &_header{
        max-width: 330px;
        max-height: 100px;
        margin-bottom: 30px;

        @media (max-width: $MEDIA_DESKTOP_TO_TABLET) {
            max-width: unset;
            max-height: 87px;
            margin-bottom: 24px;
        }

        @media screen and (max-width: 319px) {
            max-height: 131px;
        }
    }

    & img {
        margin: 0 30px;
        width: 550px;
        height: 382px;

        @media (max-width: 1019px) {
            margin-bottom: 30px;
            height: unset;
        }

        @media screen and (max-width: 570px) {
            width: 100%;
            height: calc((100vw - 20px)* 0.6945);
        }
    }
}
</style>