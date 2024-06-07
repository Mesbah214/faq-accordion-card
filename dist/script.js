const accordionHeaders = document.querySelectorAll('[data-accordion-header]')

accordionHeaders.forEach((accordionHeader, index) => {
    let target = accordionHeader.parentElement.nextElementSibling
    let svg = accordionHeader.lastElementChild
    
    accordionHeader.onclick = () => {
        let expanded = accordionHeader.getAttribute('aria-expanded') === 'true' || false
        accordionHeader.setAttribute('aria-expanded', !expanded)
        target.setAttribute('aria-hidden', expanded)
        target.inert = expanded
        svg.style.rotate = expanded ? '0deg' : '180deg'
        target.classList.toggle('is__hidden')

        // collapse other accordion body that are currently open
        accordionHeaders.forEach(function collapseInactive(accordionHeader, id) {
            let inactiveTarget = accordionHeader.parentElement.nextElementSibling

            if(!inactiveTarget.classList.contains('is__hidden')) {
                if (id != index) {
                    accordionHeader.setAttribute('aria-expanded', false)
                    inactiveTarget.classList.add('is__hidden')
                    accordionHeader.lastElementChild.style.rotate = '0deg'
                    inactiveTarget.inert = true
                    inactiveTarget.setAttribute('aria-hidden', true)
                }
            }
        })
    }
})