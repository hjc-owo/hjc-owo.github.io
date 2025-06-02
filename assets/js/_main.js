/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

// Debounce function
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Throttle function
function throttle(func, limit) {
  var lastFunc;
  var lastRan;
  return function () {
    var context = this;
    var args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

$(document).ready(function () {
  // Sticky footer with debounce
  var bumpIt = function () {
    $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
  };

  bumpIt();

  // Use debounce to optimize window resize events
  $(window).resize(
    debounce(function () {
      bumpIt();
      stickySideBar();
    }, 250)
  );

  // FitVids init - check if element exists
  if ($("#main").length) {
    $("#main").fitVids();
  }

  // init sticky sidebar - check if element exists
  if ($(".sticky").length) {
    $(".sticky").Stickyfill();
  }

  var stickySideBar = function () {
    var show =
      $(".author__urls-wrapper button").length === 0
        ? $(window).width() > 925
        : !$(".author__urls-wrapper button").is(":visible");

    if (show) {
      // fix
      if (typeof Stickyfill !== "undefined") {
        Stickyfill.rebuild();
        Stickyfill.init();
      }
      $(".author__urls").show();
    } else {
      // unfix
      if (typeof Stickyfill !== "undefined") {
        Stickyfill.stop();
      }
      $(".author__urls").hide();
    }
  };

  stickySideBar();

  // Follow menu drop down - use event delegation
  $(document).on("click", ".author__urls-wrapper button", function () {
    $(".author__urls").fadeToggle("fast", function () {});
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // init smooth scroll - check if supported
  if (typeof $.fn.smoothScroll !== "undefined") {
    $("a").smoothScroll({ offset: -20 });
  }

  // Use efficient selectors and lazy load image popup
  var initImagePopup = function () {
    // add lightbox class to all image links
    $(
      "a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']"
    ).addClass("image-popup");

    // Magnific-Popup options - only initialize when needed
    if (
      typeof $.fn.magnificPopup !== "undefined" &&
      $(".image-popup").length > 0
    ) {
      $(".image-popup").magnificPopup({
        type: "image",
        tLoading: "Loading image #%curr%...",
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
        },
        image: {
          tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
        },
        removalDelay: 500, // Delay in milliseconds before popup is removed
        // Class that is added to body when popup is open.
        // make it unique to apply your CSS animations just to this exact popup
        mainClass: "mfp-zoom-in",
        callbacks: {
          beforeOpen: function () {
            // just a hack that adds mfp-anim class to markup
            this.st.image.markup = this.st.image.markup.replace(
              "mfp-figure",
              "mfp-figure mfp-with-anim"
            );
          },
        },
        closeOnContentClick: true,
        midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
      });
    }
  };

  // Delay initialize image popup functionality
  if (window.requestIdleCallback) {
    requestIdleCallback(initImagePopup);
  } else {
    setTimeout(initImagePopup, 100);
  }

  // Add lazy loading support
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute("data-src");
            observer.unobserve(img);
          }
        }
      });
    });

    // Observe all images with data-src attribute
    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img);
    });
  }
});

// Add error handling
window.addEventListener("error", function (event) {
  console.error("JavaScript error:", event.error);
});

// Performance monitoring
if ("performance" in window) {
  window.addEventListener("load", function () {
    setTimeout(function () {
      const perfData = performance.getEntriesByType("navigation")[0];
      console.log(
        "Page load time:",
        perfData.loadEventEnd - perfData.loadEventStart,
        "ms"
      );
    }, 0);
  });
}
