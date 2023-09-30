var r={fetch:async(n,t)=>{const e=new URL(n.url);return e.pathname.startsWith("/functions/")?new Response(e.pathname):t.ASSETS.fetch(n)}};export{r as default};
