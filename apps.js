function openNav() {
    document.getElementById("navigation-overlay").style.width = "100%";
}
  
function closeNav() {
    document.getElementById("navigation-overlay").style.width = "0%";
}

function createSlideShow(slideImagesList) {
    const slideshowContainer = document.getElementById("image-slideshow");

    const setup = () => {
        let radioButtons = "";
        let slides = "";
        let quickNav = "";
        let prevNav = "";
        let nextNav = "";
        for (let i = 0; i < slideImagesList.length; i++) {
            radioButtons += `<input type="radio" name="css-fadeshow" id="slide-${i+1}" />\n`;
            slides += `<div class="fs-slide" style="background-image: url(../images${slideImagesList[i]});"></div>\n`;
            quickNav += `<label class="fs-quick-btn" for="slide-${i+1}"></label>\n`;
            prevNav += `<label class="fs-prev-btn" for="slide-${i+1}"></label>\n`;
            nextNav += `<label class="fs-next-btn" for="slide-${i+1}"></label>\n`;
        }

        return {
            radioButtons,
            slides,
            quickNav,
            prevNav,
            nextNav
        }
    }
    const {radioButtons, slides, quickNav, prevNav, nextNav} = setup();

    slideshowContainer.outerHTML = `
        <!-- Radio -->
        ${radioButtons}

        <!-- Slides -->
        <div class="fs-slides">
            ${slides}
        </div>

        <!-- Quick Navigation -->
        <div class="fs-quick-nav">
            ${quickNav}
        </div>
        
        <!-- Prev Navigation -->
        <div class="fs-prev-nav">
            ${prevNav}
        </div>
        
        <!-- Next Navigation -->
        <div class="fs-next-nav">
            ${nextNav}
        </div>
    `;
}
