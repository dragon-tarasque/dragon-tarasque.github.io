
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.en.f0034e26caa9a2c991b6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8947.baseline.en.ccc0254cb6554265f4f0.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3157.baseline.en.562ece0120ed63117cab.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6134.baseline.en.1bc59c356c867cc155a0.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.3dffc13b5a465b9d33f5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9315.baseline.en.2d4becc4565e87d9a9a1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4979.baseline.en.9a24b25d05e562ae5e80.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5669.baseline.en.604aeedc84b0b02109fd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4412.baseline.en.8264f9cb2c9ac7bb52fd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2764.baseline.en.bbc0a1177b3dbfda56d5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/1243.baseline.en.fc327ff29858ada92540.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/256.baseline.en.472ff646c0569abaff9d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6589.baseline.en.a270783288e5f652df02.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.baseline.en.7cb2a02963426a3fea7e.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/8947.baseline.en.dda825bc00644f4a2844.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.c75a9d85fa4c461740f5.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.baseline.en.8dd09542e153c17eb5e8.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  