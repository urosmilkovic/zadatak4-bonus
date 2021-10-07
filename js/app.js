const features = {
    "simple_bookmarking": {
        title: "Bookmark in one click",
        description: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
        image: "./images/illustration-features-tab-1.svg"
    },
    "speedy_searching": {
        title: "Intelligent search",
        description: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
        image: "./images/illustration-features-tab-2.svg"
    },
    "easy_sharing": {
        title: "Share your bookmarks",
        description: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
        image: "./images/illustration-features-tab-3.svg"
    }
}

const generateContent = (feature) => {
    featureItems.forEach(x => x.classList.remove('bm-features-item-active'));
    document.querySelector(`[data-feature="${feature}"`).classList.add("bm-features-item-active");
    document.querySelector('[data-inject="feature-title"]').textContent = features[feature].title;
    document.querySelector('[data-inject="feature-description"]').textContent = features[feature].description;
    document.querySelector('[data-inject="feature-image"]').setAttribute("src", features[feature].image);
}

const featureItems = document.querySelectorAll('.bm-features-item');
featureItems.forEach(x => {
    x.addEventListener("click", (e) => generateContent(e.target.getAttribute('data-feature')))
})

generateContent('simple_bookmarking');

const contactUs = () => {
    const inputEl = document.querySelector(".bm-footer-input");
    if(!/^\S+@\S+\.\S+$/.test(inputEl.querySelector('input').value)){
        inputEl.classList.add('bm-input-wrapper-error');
    } else {
        inputEl.classList.remove('bm-input-wrapper-error');
    }
}

document.querySelector('.btn-footer').addEventListener('click', contactUs);

const toggleNavbar = () => {
    document.querySelector('.bm-navbar').classList.toggle('bm-navbar-active');
}

document.querySelector('.bm-navbar-hamburger').addEventListener('click', toggleNavbar);