function adBlockDetector() {
    setTimeout(function(){
        document.body.innerHTML += '<div class="adsbygoogle" id="test-ad"></div>'  /* cspell: disable-line */
        const testAd = document.getElementById('test-ad')
        const testAdStyle = getComputedStyle(testAd)

        if(testAdStyle.display==='none'){
            console.log('adblock detected')
            alert('Using Ad Blockers will interfere with your listening experience and may cause silence. Turn off Ad Blockers for a better listening experience. You can do this in your browser settings or check your browsers extensions.')
        } else{
            fetch('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js')
                .then(res=> console.log('ads allowed'))
                .catch(err=> {
                    console.log('adblock detected')
                    console.log(err)
                    alert('Using Ad Blockers will interfere with your listening experience and may cause silence. Turn off Ad Blockers for a better listening experience. You can do this in your browser settings or check your browsers extensions.')
            })
        }
    }, 1000)
}

adBlockDetector()


