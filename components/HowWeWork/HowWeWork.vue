<template>
    <ul class="how-we-work">
        <li class="how-we-work__element">
            <WorkElement image="howWeWork1.svg" index="1." text="Обсуждение и согласование места и времени" arrow="true"/>
        </li>
        <li class="how-we-work__element">
            <WorkElement image="howWeWork2.svg" index="2." text="Заключение договора и выезд бригады специалистов к заказчику" arrow="true"/>
        </li>
        <li class="how-we-work__element">
            <WorkElement image="howWeWork3.svg" index="3." text="Проведение работ по бурению скважины" subtext="(срок зависит от грунта и оговаривается заранее)"/>
        </li>
        <li class="how-we-work__element">
            <WorkElement image="howWeWork4.svg" index="4." text="Проверка и прием выполненных работ" arrow="true"/>
        </li>
        <li class="how-we-work__element">
            <WorkElement image="howWeWork5.svg" index="5." text="Оплата в соответствии с договором" arrow="true"/>
        </li>
        <li class="how-we-work__element">
            <WorkElement image="howWeWork6.svg" index="6." text="Выдача документов и получение гарантии на работы"/>
        </li>
    </ul>
</template>


<style lang="scss" scoped>
.how-we-work {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 50px;
    column-gap: 30px;

    &__element {
        max-width: 230px;
    }
}
</style>