const calendar = () => {
    //добавим новый класс в класс calendar: <div class="calendar">...</div>
    const calendar = document.querySelector('.calendar');
    console.log(calendar);

    //выводим элемент calendar_item на страницу и добавляем в него текст
    let curDay = [];

    for (let i=0; i<=38; i++) {
        curDay[i] = document.createElement('div');
        curDay[i].classList.add('calendar_item');

        if(i=0) {
            curDay[i].innerHTML = 'month';
            calendar.appendChild(curDay[i]);
        } else if (i=1) {
            curDay[i].innerHTML = 'Пн';
            calendar.appendChild(curDay[i]);
        } else if (i=2) {
            curDay[i].innerHTML = 'Вт';
            calendar.appendChild(curDay[i]);
        }else if (i=3) {
            curDay[i].innerHTML = 'Ср';
            calendar.appendChild(curDay[i]);
        }else if (i=4) {
            curDay[i].innerHTML = 'Чт';
            calendar.appendChild(curDay[i]);
        }else if (i=5) {
            curDay[i].innerHTML = 'Пт';
            calendar.appendChild(curDay[i]);
        }else if (i=6) {
            curDay[i].innerHTML = 'Сб';
            calendar.appendChild(curDay[i]);
        }else if (i=7) {
            curDay[i].innerHTML = 'Вс';
            calendar.appendChild(curDay[i]);
        }else {

        
            // curDay[i].innerHTML = 'day';
            curDay[i].innerHTML = (i-7);
            calendar.appendChild(curDay[i]);
        }
    
    }
    console.log(curDay); //получим таблицу с надписями day

};

export default calendar;
