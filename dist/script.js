// Works for accordion
// (function accordion() {
//     let items = document.querySelectorAll('.faq__question')
//     let containers = document.querySelectorAll('.faq__item')

//     items.forEach((item, index) => {
//         item.addEventListener('click', () => {
//             containers[index].classList.toggle('active')

//             removeActive(index)
//         })
//     })

//     function removeActive(id) {
//         containers.forEach((container, index) => {
//             if (index !== id) {
//                 container.classList.remove('active')
//             }
//         })
//     }
// })()

const accordionHeaders = document.querySelectorAll('[data-accordion-header]')

Array.prototype.forEach.call(accordionHeaders, (accordionHeader) => {
    let target = accordionHeader.parentElement.nextElementSibling
    let svg = accordionHeader.firstElementChild
    accordionHeader.onclick = () => {
        let expanded = accordionHeader.getAttribute('aria-expanded') === 'true' || false
        accordionHeader.setAttribute('aria-expanded', !expanded)
        target.setAttribute('aria-hidden', expanded)
        target.inert = expanded
        svg.style.rotate = expanded ? '0deg' : '180deg'
        accordionHeader.style.fontWeight = expanded ? 'normal' : 'bold'
        target.classList.toggle('is__hidden')
    }
})
