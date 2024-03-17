// Works for accordion
(function accordion() {
    let items = document.querySelectorAll(".faq__question")
    let containers = document.querySelectorAll(".faq__item")

    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            containers[index].classList.toggle('active')

            removeActive(index)
        })
    })

    function removeActive(id) {
        containers.forEach((container, index) => {
            if (index !==  id) {
                container.classList.remove('active')
            }
        })
    }

})()