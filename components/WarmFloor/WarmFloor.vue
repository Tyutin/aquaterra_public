<template>
    <div class="warmfloor">
        <div class="container">
            <ul class="warmfloor__list">
                <li class="warmfloor__element">
                    <img src="./vlago.svg" alt="">
                    <span>Влагоустойчивость</span>
                </li>
                <li class="warmfloor__element">
                    <img src="./eco.svg" alt="">
                    <span>Экологичность</span>
                </li>
                <li class="warmfloor__element">
                    <img src="./bezop.svg" alt="">
                    <span>Безопасность и пожароустойчивость</span>
                </li>
                <li class="warmfloor__element">
                    <img src="./econom.svg" alt="">
                    <span>Низкое энергопотребление</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.warmfloor {
    height: 293px;
    margin: 30px 0;
    padding: 25px 50px;
    background-image: url('./warm_floor_bg.webp');
    background-position: center;

    @media screen and (max-width: $MEDIA_TABLET_TO_BIG_MOBILE) {
        padding: 20px;
    }

    @media screen and (max-width: $MEDIA_TABLET_TO_MOBILE) {
        padding: 20px 0;
    }

    &__list {
        display: flex;
        flex-direction: column;
        max-width: 400px;
    }

    &__element {
        display: flex;
        align-items: baseline;
        margin-bottom: 20px;

        & img {
            position: relative;
            top: 7px;
            width: 30px;
            height: 30px;
            margin-right: 12px;
        }

        & span {
            font-size: 22px;
            color: #fff;
        }

        @media screen and (max-width: $MEDIA_TABLET_TO_MOBILE) {
            & span {
                font-size: 18px;
            }

            & img {
                top: 10px;
            }
        }
    }
}
</style>