<template>
    <section class="workflow">
        <div class="container">
            <h2>профессионально и качественно выполним:</h2>
            <ul class="workflow__list">
                <li class="workflow__element"><WorkElement image="burenie.webp" arrow="true" text="Бурение скважин на воду"/></li>
                <li class="workflow__element"><WorkElement image="automation.webp" arrow="true" text="Автоматизацию и обустройство скважин"/></li>
                <li class="workflow__element"><WorkElement image="kanalizaciya.webp" arrow="true" text="Обустройство канализации и водопровода"/></li>
                <li class="workflow__element"><WorkElement image="teplypol.webp" text="Монтаж теплых полов и отопление"/></li>
            </ul>
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.workflow {
    & .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 42px 10px;
    }

    &__list {
        display: flex;
        justify-content: space-between;
        width: 100%;

        @media screen and (max-width: 800px) {
            column-gap: 40px;
            row-gap: 40px;
            flex-wrap: wrap;
        }
    }

    &__element {
        max-width: 180px;

        @media screen and (max-width: 800px) {
            width: calc(50% - 20px);
            max-width: unset;
        }
    }
}
</style>