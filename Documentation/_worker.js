var r={fetch:async(e,t)=>{const n=new URL(e.url);return n.pathname.startsWith("/functions/")?new Response(n.pathname,{headers:{"Content-Type":"text/html"}}):t.ASSETS.fetch(e)}};export{r as default};
