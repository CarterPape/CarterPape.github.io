// Search only needs:
// 1. Search bar (which can do autocomplete and "did you mean")
// 2. Date range
// 3. Sort by

import balanceText from 'balance-text';

balanceText();

function toggleNavList() {
    var navList = document.getElementById("sitewide-nav");
    navList.style.display = (navList.style.display == "flex" ? "" : "flex");
    
    var navHamburger = document.getElementById("sitewide-nav-hamburger");
    navHamburger.style.display = (navHamburger.style.display == "none" ? "" : "none");
    
    var navExit = document.getElementById("sitewide-nav-exit-button");
    navExit.style.display = (navExit.style.display == "none" ? "" : "none");
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("sitewide-nav-button").onclick = toggleNavList;
    
    let relevant_header_tags = ["h2", "h3", "h4", "h5", "h6"];
    let all_headers = [];
    
    relevant_header_tags.forEach(function(header_tag) {
        all_headers.push(
            ...Array.from(document.getElementsByTagName(header_tag))
        );
    });
    
    all_headers.forEach(function(element) {
        element.classList.add("balance-text")
    });
    
    balanceText();
})
