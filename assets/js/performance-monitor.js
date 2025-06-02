// Performance monitoring tool
(function () {
  "use strict";

  // Check if Performance API is supported
  if (!window.performance || !window.performance.mark) {
    return;
  }

  // Page load performance monitoring
  function measurePageLoad() {
    window.addEventListener("load", function () {
      setTimeout(function () {
        const navigation = performance.getEntriesByType("navigation")[0];
        const paint = performance.getEntriesByType("paint");

        // Key performance metrics
        const metrics = {
          // Page load time
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          // DOM content loaded time
          domContentLoaded:
            navigation.domContentLoadedEventEnd -
            navigation.domContentLoadedEventStart,
          // First paint time
          firstPaint: paint.find((entry) => entry.name === "first-paint")
            ?.startTime,
          // First contentful paint time
          firstContentfulPaint: paint.find(
            (entry) => entry.name === "first-contentful-paint"
          )?.startTime,
          // DNS lookup time
          dnsTime: navigation.domainLookupEnd - navigation.domainLookupStart,
          // TCP connection time
          connectTime: navigation.connectEnd - navigation.connectStart,
          // Server response time
          responseTime: navigation.responseEnd - navigation.responseStart,
        };

        // Output performance metrics in development environment
        if (
          window.location.hostname === "localhost" ||
          window.location.hostname === "127.0.0.1"
        ) {
          console.group("🚀 Page Performance Metrics");
          console.log("Page load time:", metrics.loadTime + "ms");
          console.log(
            "DOM content loaded time:",
            metrics.domContentLoaded + "ms"
          );
          console.log("First paint time:", metrics.firstPaint + "ms");
          console.log(
            "First contentful paint time:",
            metrics.firstContentfulPaint + "ms"
          );
          console.log("DNS lookup time:", metrics.dnsTime + "ms");
          console.log("TCP connection time:", metrics.connectTime + "ms");
          console.log("Server response time:", metrics.responseTime + "ms");
          console.groupEnd();
        }

        // Send performance data to analytics service (if Google Analytics is configured)
        if (typeof gtag === "function") {
          gtag("event", "page_load_time", {
            custom_parameter: Math.round(metrics.loadTime),
          });
        }
      }, 0);
    });
  }

  // Resource loading monitoring
  function monitorResourceLoading() {
    window.addEventListener("load", function () {
      const resources = performance.getEntriesByType("resource");
      const slowResources = resources.filter(
        (resource) => resource.duration > 1000
      );

      if (
        slowResources.length > 0 &&
        window.location.hostname === "localhost"
      ) {
        console.group("⚠️ Slow Loading Resources");
        slowResources.forEach((resource) => {
          console.log(`${resource.name}: ${Math.round(resource.duration)}ms`);
        });
        console.groupEnd();
      }
    });
  }

  // Core Web Vitals monitoring
  function measureWebVitals() {
    // Largest Contentful Paint
    if ("PerformanceObserver" in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];

          if (window.location.hostname === "localhost") {
            console.log(
              "🎯 Largest Contentful Paint:",
              Math.round(lastEntry.startTime) + "ms"
            );
          }
        });
        observer.observe({ entryTypes: ["largest-contentful-paint"] });
      } catch (e) {
        // Silently fail if not supported
      }
    }
  }

  // Initialize monitoring
  measurePageLoad();
  monitorResourceLoading();
  measureWebVitals();
})();
