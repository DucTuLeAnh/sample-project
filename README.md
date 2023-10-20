# sample-project
Quick &amp; Dirty Example of how to setup a proxy to locally test rest request from SapUI5 avoiding CORS

Open 3 consoles.
On console #1: cd into "frontend" run "npm run start"

On console #2: cd into "backend" run "node index.js"

On console #3: cd into "proxy" run "node proxy.js"

Open browser with "http://localhost:8080/index.html" and you should see the start page.
Click the "Say Hello" button to view the successful rest response.

