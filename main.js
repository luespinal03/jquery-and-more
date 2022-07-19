
$('body').append($('<div>Hello World</div>'));
$('div').on('click', () => {
    event.preventDefault()
    alert("Hello World")
})