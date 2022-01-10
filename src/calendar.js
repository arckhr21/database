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
    n = 0,
    numMonth = 0;

    //вывод календаря в зависимости от выбранного месяца    
    function outCalendar(anyMonth) {

         //добавим новый класс в класс calendar: <div class="calendar">...</div>
        // const calendar = document.querySelector('.calendar');
        let calendar = document.querySelector('.calendar'),
        ci = document.querySelectorAll('.calendar_item');
        console.log(calendar);
        console.log(ci);

        if (!ci[0]) {  

        //выводим элемент calendar_item на страницу и добавляем в него текст
        let calendDays = [];
        
        //получаем текущие значения дня, месяца и года
        let date = new Date();

        let curMonth = anyMonth,
            //curMonth = date.getMonth(),
            //curMonth = 1,
           // curDayMonth = date.getDate(),
            curYear = date.getFullYear();
        
        // console.log(curMonth);
        // console.log(curDayMonth);
        // console.log(curYear);
        // console.log(allMonths[curMonth]);

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

        let indCal = (+allNumDays-1) +8; //вводим переменную для работы цикла вывода календаря, вместо 38 (7 + 31) - indCal (индекс календаря)
        console.log(indCal);
        
        //создание и вывод таблицы календаря
       // if (!ci[0]) {             // проверка наличия динамической верстки календаря. Если её нет, то создаём календарь.

           // console.log(ci[0]);

            for (let i=0; i<=(indCal+inDayWeek); i++) {

                calendDays[i] = document.createElement('div');
                calendDays[i].classList.add('calendar_item');
                
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

            } //конец цикла for
        
        } else { //если календарь был создан, удаляем его и вновь выводим.

            let elChild = document.querySelectorAll('.calendar_item');
            console.log('дочерние элементы ' + elChild);
            //for (let j=0; j<=38; j++) {
            for (let j=0; j<=44; j++) {    
                if (elChild[j]) {
                    calendar.removeChild(elChild[j]);
                }
            }

            //========================================================================================
            //расчет первого дня месяца и др. 
            //========================================================================================
             //выводим элемент calendar_item на страницу и добавляем в него текст
                let calendDays = [];
                
                //получаем текущие значения дня, месяца и года
                let date = new Date();

                let curMonth = anyMonth,
                    //curMonth = date.getMonth(),
                    //curMonth = 1,
                // curDayMonth = date.getDate(),
                    curYear = date.getFullYear();
                
                // console.log(curMonth);
                // console.log(curDayMonth);
                // console.log(curYear);
                // console.log(allMonths[curMonth]);

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

                let indCal = (+allNumDays-1) +8; //вводим переменную для работы цикла вывода календаря, вместо 38 (7 + 31) - indCal (индекс календаря)
                console.log(indCal);
                // =======================================================================================================
 
            for (let i=0; i<=(indCal+inDayWeek); i++) {
                console.log('проверка родителя ' + calendar);
              
                calendDays[i] = document.createElement('div');
                calendDays[i].classList.add('calendar_item');
                
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

            } //конец цикла for
        // }
            
         } // end if - проверки наличия динамической верстки
    
    } // end function

    //выбор месяца в поле <select>
    function selectMonth(numMonth) { 
    //function selectMonth() { 
        let calendarItemSelect= document.querySelectorAll('.calendar_item')[0], //переменная ячейки календаря, куда потом будет помещён тег <select>
            sMonth = document.createElement('select'),
            optionMonth = [],
            // sm = [];
            // sm = document.querySelectorAll('.select_month');
            sm = document.querySelector('.select_month'); //переменная поля <select>

        
        //формируем вёрстку поля выбора месяца <select>
        //if (!sm[0]) {  //исключаем появление второго поля <select>
        if (!sm) {  //исключаем появление второго поля <select>
               
            sMonth.classList.add('select_month');
            calendarItemSelect.appendChild(sMonth); //добавили в первую ячейку календаря тег <select>

            for (let j=0; j<=11; j++) {
                optionMonth[j] = document.createElement('option'); //создаем элемент <option>
                optionMonth[j].classList.add('option_month'); 
                //console.log(optionMonth[j]);
        
                optionMonth[j].innerHTML = allMonths[j];
                optionMonth[j].value = allMonths[j];
                //console.log(optionMonth[j].value);

                sMonth.appendChild(optionMonth[j]);

                // sMonth.selectedIndex = n;
                // console.log(n);
            }
        } //end <select> and <option>
    } //end function selectMonth

   

    //n=9;
    outCalendar(n);
    selectMonth(n);

};

export default calendar;
