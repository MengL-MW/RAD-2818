function adBlockDetector() {
  setTimeout(function () {
    document.body.innerHTML +=
      '<div class="adsbygoogle" id="test-ad"></div>'; /* cspell: disable-line */
    const testAd = document.getElementById("test-ad");
    const testAdStyle = getComputedStyle(testAd);

    if (testAdStyle.display === "none") {
      console.log("adblock detected");
      alert(
        "Using Ad Blockers will interfere with your listening experience and may cause silence. Turn off Ad Blockers for a better listening experience. You can do this in your browser settings or check your browser's extensions."
      );
    } else {
      // fetch("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js")
      //   .then((res) => console.log("ads allowed"))
      //   .catch((err) => {
      //     console.log("adblock detected");
      //     console.log(err);
      //     alert(
      //       "Using Ad Blockers will interfere with your listening experience and may cause silence. Turn off Ad Blockers for a better listening experience. You can do this in your browser settings or check your browser's extensions."
      //     );
      //   });
      async function checkAdByURL() {
        try {
          const response = await fetch(
            "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          );
          if (response.ok === true) {
            console.log("ads allowed");
          } else {
            throw new Error("URL response not ok");
          }
        } catch (err) {
          console.log("adblock detected");
          console.log("err", err);
          alert(
            "Using Ad Blockers will interfere with your listening experience and may cause silence. Turn off Ad Blockers for a better listening experience. You can do this in your browser settings or check your browser's extensions."
          );
        }
      }
      checkAdByURL();
    }
  }, 1000);
}

adBlockDetector();
