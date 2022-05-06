export const date = `${getHours()}:${getMinutes()} ${getDate()}.${getMonth()}.${getYear()}`;


function getHours(){
    const hour = new Date().getHours().toString();

    if (hour.length === 1){
        return `0${hour}`;
    }

    return hour;
}

function getMinutes() {
    const minutes = new Date().getMinutes().toString();

    if (minutes.length === 1){
        return `0${minutes}`;
    }

    return minutes;
}

function getDate() {
    const date = new Date().getDate().toString();

    if (date.length === 1){
        return `0${date}`;
    }

    return date;
}

function getMonth() {
    const month = (new Date().getMonth() + 1).toString() ;

    if (month.length === 1){
        return `0${month}`;
    }

    return month;
}

function getYear() {
    const year = new Date().getFullYear().toString();

    if (year.length === 1){
        return `0${year}`;
    }

    return year;
}

