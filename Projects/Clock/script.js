
setInterval(() => {
    const time = document.querySelector('.time');
    const currdate = new Date();
    time.innerText = currdate.getHours()+':'+currdate.getMinutes()+':'+currdate.getSeconds()
}, 1000);