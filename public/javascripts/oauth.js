function iOS() {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
  // iPad on iOS 13 detection
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
};
if(iOS()) {
  console.log('this is iOS!');
  window.location.href = `issue://tracker/?token=${token}`;
} else {
  console.log('this is not iOS!');
  window.location.href = `/?token=${token}`;
  window.opener.postMessage(`${token} is the new token`);
  window.close();
}