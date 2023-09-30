var r={fetch:async(t,e)=>{const n=new URL(t.url);return n.pathname.startsWith("/functions/")?await e.ASSETS.fetch(t):e.ASSETS.fetch(t)}};export{r as default};
