
const testimonial_cards = document.getElementById("testimonial_cards")
const form = document.getElementById("testimonial_form")

const showTestimonialCards = () => {
    testimonial_cards.style.display = "flex"
    form.style.display = "none"; 
}

const getTestimonialForm = ()=>  {
   testimonial_cards.style.display = "none"
   form.style.display = "block";
}

