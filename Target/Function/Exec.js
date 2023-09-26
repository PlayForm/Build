var r=async(...[a,t=e=>console.log(e)])=>{try{const e=(await import("child_process")).exec(a);typeof t=="function"&&e.stdout?.on("data",o=>t(o))}catch{}};export{r as default};
