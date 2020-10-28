export const gtag: Gtag.Gtag = (...args: any) => {
  if (typeof window?.gtag === 'undefined') {
    return;
  }

  window.gtag.apply(window, args);

  console.log('gtag clicked');
};
