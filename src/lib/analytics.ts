declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
    adsbygoogle: any[];
  }
}

export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackTestStart = (testType: string, testId: string) => {
  trackEvent("test_start", "engagement", `${testType}_${testId}`);
};

export const trackTestComplete = (
  testType: string,
  testId: string,
  score: number
) => {
  trackEvent("test_complete", "engagement", `${testType}_${testId}`, score);
};

export const trackPageView = (url: string, title: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", "G-XXXXXXXXXX", {
      page_title: title,
      page_location: url,
    });
  }
};
