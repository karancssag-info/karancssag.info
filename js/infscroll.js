document.addEventListener("DOMContentLoaded", function () {
    let elem = document.querySelector('#maincontent');
    let nextURL;

    function updateNextURL(doc) {
        let link = doc.querySelector(".nextPage");
        if (!link) {
            nextURL = "stop";
        } else {
            link = link.getAttribute("href");
            nextURL = link;
        }
    }
    updateNextURL(document);
    let pathFunction = function () {
        return nextURL;
    };

    if (nextURL !== "stop") {
        let infScroll = new InfiniteScroll(elem, {
            path: pathFunction,
            append: '.post',
            history: 'push',
            hideNav: '.PageNavigation',
            checkLastPage: '.nextPage'
        });

        infScroll.on('load', function (body, url) {
            updateNextURL(body);
        });
    }

});



