var r=async(...[o,t=e=>console.log(e)])=>{try{const{stdout:e}=(await import("node:child_process")).exec(o);typeof t=="function"&&e?.on("data",a=>t(a))}catch(e){console.log(e)}};export{r as default};
