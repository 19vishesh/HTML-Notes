const inputs = document.querySelectorAll('input')

inputs.forEach((input)=>{
    input.addEventListener('change', setFun)
    input.addEventListener('mousemove', setFun)
    }
)
function setFun(){
    // console.log(this.value)
    const suffix = this.dataset.sizing || ''
    document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix)
}