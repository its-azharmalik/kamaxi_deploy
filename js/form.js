document.querySelector('.wpcf7').onsubmit = (e) =>{
    e.preventDefault();
    var urls = [
    '/kamaxiHeights.pdf',
    '/kamaxiGreen.pdf',
    '/kamaxiKunj.pdf'
    ]

    var interval = setInterval(download, 300, urls);

    function download(urls) {
        var url = urls.pop();

        var a = document.createElement("a");
        a.setAttribute('href', url);
        a.setAttribute('download', '');
        a.setAttribute('target', '_blank');
        a.click();

        if (urls.length == 0) {
            clearInterval(interval);
        }
    }

    }
