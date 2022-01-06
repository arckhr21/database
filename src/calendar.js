'use strict';

const calendar = () => {
    //добавим новый класс в класс calendar: <div class="calendar">...</div>
    // const calendar = document.querySelector('.calendar');
    let calendar = document.querySelector('.calendar'),
        ci = document.querySelectorAll('.calendar_item');
    console.log(calendar);
    console.log(ci);


    //определяем массивы список месяцев (allMonths), список дней недели (daysWeek), количество дней в месяце високосного года (daysMonthLY)
    //количество дней в месяце обычного года (daysMonthSY), числа месяца numDaysMonth
    let allMonths = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    //daysWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    daysWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    daysMonthLY = ['31', '29', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'],
    daysMonthSY = ['31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'],
    numDaysMonth = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

    //выводим элемент calendar_item на страницу и добавляем в него текст
    let calendDays = [];
    // for (let i=0; i<=38; i++) {
    //     curDay[i] ='';
    // }

    //получаем текущие значения дня, месяца и года

    let date = new Date();

    let curMonth = date.getMonth(),
        curDayMonth = date.getDate(),
        curYear = date.getFullYear();
    
    console.log(curMonth);
    console.log(curDayMonth);
    console.log(curYear);
    console.log(allMonths[curMonth]);

    //определяем на какой день недели приходится 1-ое число месяца
    let dateFDW = new Date(curYear, curMonth, 1),
        dayWeek = dateFDW.getDay();
    console.log('первый день месяца ' + daysWeek[dayWeek -1]);
    let inDayWeek = dayWeek -1; //индекс для  дня недели первого дня месяца
    
    if (!ci[0]) {             // проверка наличия динамической верстки

        console.log(ci[0]);

        // for (let i=0; i<=38; i++) {
        for (let i=0; i<=(38+inDayWeek); i++) {


            calendDays[i] = document.createElement('div');
            calendDays[i].classList.add('calendar_item');
            
            if(i==0) {
                calendDays[i].innerHTML = allMonths[curMonth];
            } else if(i>0 && i<=7) {
                calendDays[i].innerHTML = daysWeek[i-1];
            } else {
            //    if (i<8+dayWeek) {
            //     calendDays[i].innerHTML = "";
            //    } else {
            //     calendDays[i].innerHTML = numDaysMonth[i-(8+dayWeek)];
            //    }
            if (i<(8+inDayWeek)) {
                    calendDays[i].innerHTML = "";
                   } else {
                    calendDays[i].innerHTML = numDaysMonth[i-(8+inDayWeek)];
                   }

                
                //calendDays[i].innerHTML = numDaysMonth[i-8];
            };
            
            //curDay[i].innerHTML = 'day';
            calendar.appendChild(calendDays[i]);
            // console.log(i);
            // console.log(calendDays[i]);
        }
      
    } // end if - проверка наличия динамической верстки
   

};

export default calendar;
