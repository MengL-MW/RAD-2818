// function adBlockDetector() {
//     setTimeout(function(){
//         document.body.innerHTML += '<div class="adsbygoogle" id="test-ad"></div>'
//         const testAd = document.getElementById('test-ad')
//         const testAdStyle = getComputedStyle(testAd)

//         if(testAdStyle.display==='none'){
//             console.log('ad blocker detected!')
//         } else{
//             console.log('No ad blocker detected!')
//         }

//     }, 3000)
// }

// adBlockDetector()

// window.addEventListener('load', function(){
//     fetch('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js')
//     .then(res=> console.log('ads allowed'))
//     .catch(err=>console.log('adblock detected!'))
// })


    fetch('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js')
    .then(res=> console.log('ads allowed'))
    .catch(err=> {
        console.log('adblock detected!')
        alert('adblock detected!')
    })
