<script>
    const buttonElement = document.getElementById('btn')
    let hidden = true;

    buttonElement.addEventListener('click', function () {
        const paraElement = document.getElementById('toggle')
        if (hidden) {
            paraElement.style.display = 'block'
            hidden = false;
        } else {
            paraElement.style.display = 'none'
            hidden = true;
        }
    })
</script>