var r={fetch:async(e,n)=>{const t=new URL(e.url);return t.pathname.startsWith("/functions/")?new Response(t.pathname):n.ASSETS.fetch(e)}};export{r as default};
