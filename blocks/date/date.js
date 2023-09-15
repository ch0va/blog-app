function getDate() {
    let dataAndTime;
    const currentDate = new Date();

    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = String(currentDate.getFullYear()).slice(-2); 
    const hour = String(currentDate.getHours()).padStart(2, '0'); 
    const minuets = String(currentDate.getMinutes()).padStart(2, '0');

    dataAndTime = `${day}.${month}.${year} ${hour}:${minuets}`;
    return dataAndTime;
}