// Works for accordion
(function accordion() {
    let items = document.querySelectorAll(".faq__question")
    let questions = document.querySelectorAll(".faq__question")
    let containers = document.querySelectorAll(".faq__item")

    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            containers[index].classList.toggle('active')
        })
    })

})()