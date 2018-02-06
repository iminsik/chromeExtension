(function () {
    var adBlockScreenElement = 
        document
        .querySelector('.viewDocument > div[style*="alpha(opacity=80)"]');

    document
    .querySelector('.viewDocument')
    .removeChild(adBlockScreenElement);
})();