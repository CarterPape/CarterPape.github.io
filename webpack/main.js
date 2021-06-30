// Search only needs:
// 1. Search bar (which can do autocomplete and "did you mean")
// 2. Date range
// 3. Sort by

import balanceText from 'balance-text';

balanceText();

document.addEventListener('DOMContentLoaded', function(event) {
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

import {} from 'mathjax/es5/tex-chtml.js';
