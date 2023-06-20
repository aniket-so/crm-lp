let apiData;

function callAPI() {
    fetch('http://localhost:8080/api')
        .then(response => response.json())
        .then(data => {
            apiData = data;
            console.log(apiData);
            // You can perform additional operations with the data here
            loadHtmlContent();
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function loadHtmlContent() {
    // Bar Offer
    const barOfferText = document.getElementById('bar-offer-id');
    barOfferText.textContent = apiData.bar_offer;

    // Hero Section
    const heroHeading = document.getElementById("hero-heading")
    const heroDescription = document.getElementById("hero-description")
    heroHeading.textContent = apiData.heading
    heroDescription.textContent = apiData.description

    // USP Container
    const uspsContainer = document.getElementById('uspContainer');
    const uspHeading = document.getElementById('uspHeading');
    const uspSubHeading = document.getElementById('uspSubHeading');
    uspHeading.textContent = apiData.usp_section_heading;
    uspSubHeading.textContent = apiData.usp_section_sub_heading;

    if (apiData.usp && Array.isArray(apiData.usp)) {
        apiData.usp.forEach(usp => {
            const uspLink = document.createElement('a');
            uspLink.classList.add('block', 'rounded-xl', 'border', 'border-[#26b38f]', 'p-8', 'shadow-xl', 'transition', 'hover:border-green-500/10', 'hover:shadow-green-500/10');
            uspLink.href = '#';

            const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            svgElement.classList.add('h-10', 'w-10', 'text-[#26b38f]');
            svgElement.setAttribute('fill', 'none');
            svgElement.setAttribute('viewBox', '0 0 24 24');
            svgElement.setAttribute('stroke', 'currentColor');

            const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path1.setAttribute('d', 'M12 14l9-5-9-5-9 5 9 5');

            const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path2.setAttribute('d', 'M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z');

            const path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path3.setAttribute('stroke-linecap', 'round');
            path3.setAttribute('stroke-linejoin', 'round');
            path3.setAttribute('stroke-width', '2');
            path3.setAttribute('d', 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222');

            svgElement.appendChild(path1);
            svgElement.appendChild(path2);
            svgElement.appendChild(path3);


            const uspTitle = document.createElement('h2');
            uspTitle.classList.add('mt-4', 'text-xl', 'font-bold', 'text-black');
            uspTitle.textContent = usp.usp_heading;

            const uspDescription = document.createElement('p');
            uspDescription.classList.add('mt-1', 'text-sm', 'text-gray-600');
            uspDescription.textContent = usp.usp_content;

            uspLink.append(svgElement)
            uspLink.appendChild(uspTitle);
            uspLink.appendChild(uspDescription);

            uspsContainer.appendChild(uspLink);
        });
    }


    // Service Container
    const servicesContainer = document.getElementById('servicesContainer');
    const serviceHeading = document.getElementById('serviceHeading');
    const serviceSubHeading = document.getElementById('serviceSubHeading');
    serviceHeading.textContent = apiData.services_section_heading;
    serviceSubHeading.textContent = apiData.services_section_sub_heading;

    if (apiData.services && Array.isArray(apiData.services)) {
        apiData.services.forEach(service => {
            // Create the <a> element
            const linkElement = document.createElement('a');
            linkElement.className = 'block rounded-xl border border-[#26b38f] p-4 shadow-sm hover:border-[#26b38f] hover:ring-1 hover:ring-[#26b38f] focus:outline-none focus:ring';
            linkElement.href = '#';

            const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            svgElement.classList.add('h-10', 'w-10', 'text-[#26b38f]');
            svgElement.setAttribute('fill', 'none');
            svgElement.setAttribute('viewBox', '0 0 24 24');
            svgElement.setAttribute('stroke', 'currentColor');

            const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path1.setAttribute('d', 'M12 14l9-5-9-5-9 5 9 5');

            const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path2.setAttribute('d', 'M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z');

            const path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path3.setAttribute('stroke-linecap', 'round');
            path3.setAttribute('stroke-linejoin', 'round');
            path3.setAttribute('stroke-width', '2');
            path3.setAttribute('d', 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222');

            svgElement.appendChild(path1);
            svgElement.appendChild(path2);
            svgElement.appendChild(path3);

            const h2Element = document.createElement('h2');
            h2Element.className = 'mt-2 font-bold';
            h2Element.textContent = service.title;

            const pElement = document.createElement('p');
            pElement.className = 'hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600';
            pElement.textContent = service.description;

            linkElement.append(svgElement)
            linkElement.appendChild(h2Element);
            linkElement.appendChild(pElement);

            servicesContainer.appendChild(linkElement);

        })
    }

    // Testimonial Section
    const testimonialsContainer = document.getElementById('swiper-wrapper-id');
    const testimonialHeading = document.getElementById('testimonialHeading');
    const testimonialSubHeading = document.getElementById('testimonialSubHeading');

    testimonialHeading.textContent = apiData.testimonial_section_heading;
    testimonialSubHeading.textContent = apiData.testimonial_section_sub_heading;

    if (apiData.testimonials && Array.isArray(apiData.testimonials)) {
        apiData.testimonials.forEach(testimonial => {
            const testimonialSlide = document.createElement('div');
            testimonialSlide.classList.add('swiper-slide');

            const blockquote = document.createElement('blockquote');
            blockquote.classList.add('flex', 'h-full', 'flex-col', 'justify-between', 'bg-white', 'p-12');

            const contentDiv = document.createElement('div');
            contentDiv.classList.add('mt-4');

            const title = document.createElement('p');
            title.classList.add('text-2xl', 'font-bold', 'text-[#26b38f]', 'sm:text-3xl');
            title.textContent = testimonial.name;

            const description = document.createElement('p');
            description.classList.add('mt-4', 'leading-relaxed', 'text-gray-500');
            description.textContent = testimonial.testimonial;

            contentDiv.appendChild(title);
            contentDiv.appendChild(description);

            blockquote.appendChild(contentDiv);
            testimonialSlide.appendChild(blockquote);

            testimonialsContainer.appendChild(testimonialSlide);
        });
    }

    // Address and form
    const addressText = document.getElementById('address-form-id');
    const emailText = document.getElementById('email-form-id');
    const phoneText = document.getElementById('phone-form-id');

    addressText.textContent = apiData.addresses[0].address
    emailText.textContent = apiData.addresses[0].email
    phoneText.textContent = apiData.addresses[0].phone

}

window.onload = callAPI;


// {
//     "id": 5,
//     "status": "published",
//     "sort": null,
//     "user_created": "4ece21dd-f49b-4380-acb5-7f4f24aae2ae",
//     "date_created": "2023-06-20T06:39:55.547Z",
//     "user_updated": "4ece21dd-f49b-4380-acb5-7f4f24aae2ae",
//     "date_updated": "2023-06-20T06:46:09.157Z",
//     "name": "Testing Aniket lp",
//     "logo": "85bc6251-5adb-4709-995f-5bf4715d66a1",
//     "banner": "eb61580a-c59d-4f64-82e7-1721dad9240c",
//     "bar_offer": "25% Discounton every first project budget",
//     "heading": "With Knowledge, Passion, Heart & Soul Agencies",
//     "description": "Agencies around the world are moving to the digital agencies. So, It is high time to introduce your agency digitaly ",
//     "usp": [
//         {
//             "usp_heading": "Search Optimization",
//             "usp_content": "By using Search Engine Optimization, You will get more Clients",
//             "usp_icon": "person_search"
//         },
//         {
//             "usp_heading": "Wireframing Task",
//             "usp_content": "We respect our customer opinions and deals with them with perfect wireframing.",
//             "usp_icon": "task_alt"
//         },
//         {
//             "usp_heading": "Ui/Ux Design",
//             "usp_content": "We provide the best UI/UX Design by following the latest trends of the market .",
//             "usp_icon": "design_services"
//         },
//         {
//             "usp_heading": "Content Writting",
//             "usp_content": "Proper Content Management is important to find out the real clients for your agencies ",
//             "usp_icon": "content_paste_search"
//         }
//     ],
//     "highlights": null,
//     "services": [
//         {
//             "title": "Search Optimization",
//             "description": "By using Search Engine Optimization, You will get more Clients",
//             "icon": "person_search"
//         },
//         {
//             "title": "Ui/UX Design",
//             "description": "We provide the best UI/UX Design by following the latest trends of the market .",
//             "icon": "design_services"
//         },
//         {
//             "title": "Wireframing Task",
//             "description": "We respect our customer opinions and deals with them with perfect wireframing",
//             "icon": "filter_frames"
//         },
//         {
//             "title": "Business Solutions",
//             "description": "We are commited to provide proper business solutions with reasonable pricing",
//             "icon": "business_chip"
//         },
//         {
//             "title": "Business Analysis",
//             "description": "A day to day report about your ongoing business for proper understanding",
//             "icon": "today"
//         },
//         {
//             "title": "Content Management",
//             "description": "Proper Content Management is important to find out the real clients for your agencies",
//             "icon": "bookmark_manager"
//         }
//     ],
//     "addresses": [
//         {
//             "address": "Ivent It Solutions Pvt. Ltd. (ShootOrder), Krishe Sapphire MSR Block, 1st Floor, SY No. 88, HITEC City main road, Madhapur",
//             "city": "Hyderabad",
//             "state": "Telangana",
//             "phone": "9898989898",
//             "email": "shootorder@shootorder.in"
//         }
//     ],
//     "testimonials": [
//         {
//             "name": "Jonathan Taylor",
//             "identifier": "CEO at Creativex",
//             "testimonial": "OMG! I cannot believe that I have got a brand new landing page after getting this template we are able to use our most used e-commerce for your branding site to make a profitable and make it cool with fast loading experience."
//         },
//         {
//             "name": "Gavin Park",
//             "identifier": "CEO at Orbital",
//             "testimonial": "Whenever I need to create a new cool commerce site for clients @redqteam is my solution is the best agency. We are super excited about it."
//         },
//         {
//             "name": "Betty Norton",
//             "identifier": "Freelance Designer",
//             "testimonial": "We are really excited that we have got a brand new landing page after getting this template we are able to use our most used e-commerce for your branding site to make a profitable and make it cool with fast loading experience."
//         }
//     ],
//     "address_section_heading": "Our Addresses",
//     "address_section_sub_heading": "Reach out to us at our different locations",
//     "services_section_heading": "Our Services",
//     "services_section_sub_heading": "Our expert team is adept in addressing any of your fertility needs and we at Oasis pride ourselves in offering efficient and evidence based fertility treatments such as IUI, IVF, IVM, PGS etc.",
//     "testimonial_section_heading": "Our Testimonials",
//     "testimonial_section_sub_heading": "Hear directly what our customers have to say about us",
//     "usp_section_heading": "Reasons To Choose Us",
//     "usp_section_sub_heading": "Oasis is a trusted and leading healthcare service provider in the field of reproductive medicine and is dedicated helping couples to experience the wonderful bond called family",
//     "phone": "+91-9898989898",
//     "email": "aniket@shootorder.in",
//     "whatsapp_number": "9898989898",
//     "seo_title": null,
//     "seo_meta_description": null
// }
