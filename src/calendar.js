'use strict';

const calendar = () => {

    //определяем массивы список месяцев (allMonths), список дней недели (daysWeek), количество дней в месяце високосного года (daysMonthLY)
    //количество дней в месяце обычного года (daysMonthSY), числа месяца numDaysMonth
    var allMonths = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    //daysWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    daysWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    daysMonthLY = ['31', '29', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'],
    daysMonthSY = ['31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'],
    numDaysMonth = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
    n = 0;

        
    function outCalendar(anyMonth) {

         //добавим новый класс в класс calendar: <div class="calendar">...</div>
        // const calendar = document.querySelector('.calendar');
        let calendar = document.querySelector('.calendar'),
        ci = document.querySelectorAll('.calendar_item');
        console.log(calendar);
        console.log(ci);


        // //определяем массивы список месяцев (allMonths), список дней недели (daysWeek), количество дней в месяце високосного года (daysMonthLY)
        // //количество дней в месяце обычного года (daysMonthSY), числа месяца numDaysMonth
        // let allMonths = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        // //daysWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
        // daysWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
        // daysMonthLY = ['31', '29', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'],
        // daysMonthSY = ['31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'],
        // numDaysMonth = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
        
        //выводим элемент calendar_item на страницу и добавляем в него текст
        let calendDays = [];
        
        //получаем текущие значения дня, месяца и года
        let date = new Date();

        let curMonth = anyMonth,
            //curMonth = date.getMonth(),
            //curMonth = 1,
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

        //определяем число дней в месяце в зависимости от високосного или обычного года
        let allNumDays = 0;

        if (!curYear%4) { //проверяем високосный год, или нет
            allNumDays = daysMonthLY[curMonth];  //год високосный
            //allNumDays = daysMonthLY[1];
        } else {
            allNumDays = daysMonthSY[curMonth];
            //allNumDays = daysMonthSY[1];
        }
        console.log(allNumDays);

        let indCal = (+allNumDays-1) +8; //вводим переменную для работы циклв вывода календаря, вместо 38 (7 + 31) - indCal (индекс календаря)
        console.log(indCal);
        
        if (!ci[0]) {             // проверка наличия динамической верстки

            console.log(ci[0]);

            for (let i=0; i<=(indCal+inDayWeek); i++) {

                calendDays[i] = document.createElement('div');
                calendDays[i].classList.add('calendar_item');
                
                // if(i==0) {
                //     calendDays[i].innerHTML = allMonths[curMonth];
                //     //selectMonth();
                // } else if(i>0 && i<=7) {
                if(i>0 && i<=7) {
                    calendDays[i].innerHTML = daysWeek[i-1];
                } else {
                
                if (i<(8+inDayWeek)) {
                        calendDays[i].innerHTML = "";
                    } else {
                        calendDays[i].innerHTML = numDaysMonth[i-(8+inDayWeek)];
                    }

                };

                calendar.appendChild(calendDays[i]);

            }
        
        } // end if - проверка наличия динамической верстки
    
       // selectMonth();
    } // end function

    function selectMonth(numMonth) {
        let //calendarItem = document.querySelectorAll('.calendar_item'),
            calendarItem = document.querySelectorAll('.calendar_item')[0],
            sMonth = document.createElement('select'),
            optionMonth = [],
            sm = document.querySelectorAll('.select_month')[0];
        
        if (!sm) {
               // console.log(sMonth);
            sMonth.classList.add('select_month');
            //calendarItem[0].appendChild(sMonth);
            //console.log(calendarItem[0]);
            console.log(calendarItem);
            calendarItem.appendChild(sMonth); //добавили в первую строку тег <select></select>

            // let sm = document.querySelector('.select_month');
            // console.log(sm);

            //temp
            //let om = document.querySelectorAll('.option_month')[0];
            //if (!om) {
                for (let j=0; j<=2; j++) {
                    optionMonth[j] = document.createElement('option'); //создаем элемент <option></option>
                    optionMonth[j].classList.add('option_month'); 
                    //console.log(optionMonth[j]);
            
                    optionMonth[j].innerHTML = allMonths[j];
                    optionMonth[j].value = allMonths[j];
                    //console.log(allMonths[j]);
                    console.log(optionMonth[j].value);
        
                //     //     optionMonth[1].selected = selected;
                //     //     //sMonth.selectIndex = 2;
                //     //     //sm.appendChild(optionMonth[i]);
                    sMonth.appendChild(optionMonth[j]);

                    sMonth.selectedIndex = 1;

                   
            
                }
               
        }

          
        //    // console.log(sMonth);
        // sMonth.classList.add('select_month');
        // //calendarItem[0].appendChild(sMonth);
        // //console.log(calendarItem[0]);
        // console.log(calendarItem);
        // calendarItem.appendChild(sMonth); //добавили в первую строку тег <select></select>

        // // let sm = document.querySelector('.select_month');
        // // console.log(sm);

        // //temp
        // //let om = document.querySelectorAll('.option_month')[0];
        // //if (!om) {
        //     for (let j=0; j<=2; j++) {
        //         optionMonth[j] = document.createElement('option'); //создаем элемент <option></option>
        //         optionMonth[j].classList.add('option_month'); 
        //         //console.log(optionMonth[j]);
        
        //         optionMonth[j].innerHTML = allMonths[j];
        //         optionMonth[j].value = allMonths[j];
        //         //console.log(allMonths[j]);
        //         console.log(optionMonth[j].value);
    
        //         //     optionMonth[1].selected = selected;
        //         //     //sMonth.selectIndex = 2;
        //         //     //sm.appendChild(optionMonth[i]);
        //         sMonth.appendChild(optionMonth[j]);
        
        //     }
        //}
        
       

        //temp

        // for (let i=0; i<=11; i++) {
        //     //let optionMonth = [];
        //     optionMonth[i] = document.createElement('option'); //создаем элемент <option></option>
        //     optionMonth[i].classList.add('option_month'); 
        //     console.log(optionMonth[i]);

        //     optionMonth[i].innerHTML = allMonths[i];
        //     optionMonth[1].selected = selected;
        //     //sMonth.selectIndex = 2;
        //     //sm.appendChild(optionMonth[i]);
        //     sMonth.appendChild(optionMonth[i]);
            
        // }
        //calendarItem[0].appendChild(sMonth);
        //console.log(sm);
        //sMonth.appendChild(optionMonth);
        // sMonth.value = optionMonth[1];
        // console.log(sMonth.value);
        //console.log(optionMonth[1]);

    }

    //outCalendar(0);
    n = 2;
    console.log('номер выбранного месяца ' + n);
    outCalendar(n);
    selectMonth();
   // console.log('номер выбранного месяца ' + n);

       

};

export default calendar;
