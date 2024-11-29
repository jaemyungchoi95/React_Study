// Date 객체를 문자열로 변환해주는 함수
export const getStringedDate = (targetDate) => {
    // 날짜 -> yyyy-mm-dd
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();

    // 만약 월이나 일의 날짜가 한자릿수일 경우, MM-DD 의 형식을 맞추어주기 위해 아래와 같이 값을 변경해준다.
    if (month < 10) {
        month = `0${month}`
    }

    if (date < 10) {
        date = `0${date}`
    }

    return `${year}-${month}-${date}`
}