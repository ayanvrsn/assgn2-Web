//  function checkSamePage(targetUrl) {
//     const currentUrl = window.location.origin + window.location.pathname;
//     const targetUrlParsed = new URL(targetUrl, window.location.origin);
//     const targetUrlClean = targetUrlParsed.origin + targetUrlParsed.pathname;
//
//     if (currentUrl === targetUrlClean) {
//     alert('You are already visited this site/page');
// }
//
//     window.location.href = targetUrl;
// }
function SamePage() {
    alert('You are already on this page!');
}
function SucessSubmit() {
    alert('Your feedback successfully submitted!');
}