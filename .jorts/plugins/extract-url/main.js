${A.stack}`:d}function UA(A,t,p,d){let a={a:A,b:t,cnt:1,dtor:p},s=(...B)=>{a.cnt++;let E=a.a;a.a=0;try{return d(E,a.b,...B)}finally{--a.cnt==0?k.__wbindgen_export_2.get(a.dtor)(E,a.b):a.a=E}};return s.original=a,s}function Fj(A,t,p,d,a){var s=x(d,k.__wbindgen_malloc,k.__wbindgen_realloc),B=w,E=x(a,k.__wbindgen_malloc,k.__wbindgen_realloc),F=w;k._dyn_core__ops__function__FnMut__A_B_C___Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hdfdbc44323d548ab(A,t,bA(p)?0:g(p),s,B,E,F)}function bj(A,t,p){k._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h2259b57e4ea095ba(A,t,g(p))}function vA(A){return function(){try{return A.apply(this,arguments)}catch(t){k.__wbindgen_exn_store(g(t))}}}function Gj(A,t,p,d){k.wasm_bindgen__convert__closures__invoke2_mut__h54be02b8ff241373(A,t,g(p),g(d))}function VA(A){k.onload(g(A))}var iA=class{static __wrap(t){let p=Object.create(iA.prototype);return p.ptr=t,p}__destroy_into_raw(){let t=this.ptr;return this.ptr=0,t}free(){let t=this.__destroy_into_raw();k.__wbg_extractcommand_free(t)}get id(){var t=k.extractcommand_id(this.ptr);return N(t)}set id(t){var p=x(t,k.__wbindgen_malloc,k.__wbindgen_realloc),d=w;k.extractcommand_set_id(this.ptr,p,d)}get name(){var t=k.extractcommand_name(this.ptr);return N(t)}set name(t){var p=x(t,k.__wbindgen_malloc,k.__wbindgen_realloc),d=w;k.extractcommand_set_name(this.ptr,p,d)}callback(){var t=k.extractcommand_callback(this.ptr);return N(t)}};async function vj(A,t){if(typeof Response=="function"&&A instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(A,t)}catch(d){if(A.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",d);else throw d}let p=await A.arrayBuffer();return await WebAssembly.instantiate(p,t)}else{let p=await WebAssembly.instantiate(A,t);return p instanceof WebAssembly.Instance?{instance:p,module:A}:p}}async function YA(A){typeof A=="undefined"&&(A=new URL("obsidian_rust_plugin_bg.wasm",Ij.url));let t={};t.wbg={},t.wbg.__wbindgen_object_drop_ref=function(a){N(a)},t.wbg.__wbindgen_string_new=function(a,s){var B=L(a,s);return g(B)},t.wbg.__wbg_message_36abd9ed8d0a4bad=function(a){var s=q(a).message;return g(s)},t.wbg.__wbindgen_json_serialize=function(a,s){let B=q(s);var E=JSON.stringify(B===void 0?null:B),F=x(E,k.__wbindgen_malloc,k.__wbindgen_realloc),O=w;Q()[a/4+1]=O,Q()[a/4+0]=F},t.wbg.__wbg_log_da824bc9fb9da0a8=function(a,s){console.log(q(a),q(s))},t.wbg.__wbg_hasBin_456e5d089209547f=function(a,s){var B=(0,S.hasBin)(L(a,s));return B},t.wbg.__wbg_log_386a8115a84a780d=function(a){console.log(q(a))},t.wbg.__wbg_nodeExec_c5b0e0c1aeb6c713=function(a,s,B){var E=(0,S.nodeExec)(L(a,s),q(B));return g(E)},t.wbg.__wbg_app_f6a9dd17ea9e845c=function(a){var s=q(a).app;return g(s)},t.wbg.__wbg_workspace_1b6c747135563e6c=function(a){var s=q(a).workspace;return g(s)},t.wbg.__wbg_getActiveViewOfType_828a6e7df7dd3992=function(a,s){var B=q(a).getActiveViewOfType(q(s));return bA(B)?0:g(B)},t.wbg.__wbg_instanceof_MarkdownView_3d4a58e5cc750eeb=function(a){var s=q(a)instanceof X.MarkdownView;return s},t.wbg.__wbg_sourceMode_9fd153f11b4bd3ac=function(a){var s=q(a).sourceMode;return g(s)},t.wbg.__wbg_cmEditor_e01da0088a54b33d=function(a){var s=q(a).cmEditor;return g(s)},t.wbg.__wbg_getSelection_2616d90a7d595c4c=function(a,s){var B=q(s).getSelection(),E=x(B,k.__wbindgen_malloc,k.__wbindgen_realloc),F=w;Q()[a/4+1]=F,Q()[a/4+0]=E},t.wbg.__wbg_clipboardReadText_57a095da41ca2b2d=function(a){var s=(0,S.clipboardReadText)(),B=x(s,k.__wbindgen_malloc,k.__wbindgen_realloc),E=w;Q()[a/4+1]=E,Q()[a/4+0]=B},t.wbg.__wbg_replaceSelection_30a0671dcd119457=function(a,s,B){q(a).replaceSelection(L(s,B))},t.wbg.__wbg_getViewData_1160e96a9adff82a=function(a,s){var B=q(s).getViewData(),E=x(B,k.__wbindgen_malloc,k.__wbindgen_realloc),F=w;Q()[a/4+1]=F,Q()[a/4+0]=E},t.wbg.__wbg_setValue_59347dc6140e1972=function(a,s,B){q(a).setValue(L(s,B))},t.wbg.__wbg_new_f0b8dc38ac3feda4=function(a,s){var B=new X.Notice(L(a,s));return g(B)},t.wbg.__wbg_new_7031805939a80203=function(a,s){var B=new Error(L(a,s));return g(B)},t.wbg.__wbg_extractcommand_new=function(a){var s=iA.__wrap(a);return g(s)},t.wbg.__wbg_call_f5e0576f61ee7461=vA(function(a,s,B){var E=q(a).call(q(s),q(B));return g(E)}),t.wbg.__wbindgen_cb_drop=function(a){let s=N(a).original;if(s.cnt--==1)return s.a=0,!0;var B=!1;return B},t.wbg.__wbg_static_accessor_MARKDOWN_VIEW_05bfc1b0c81f4e84=function(){var a=X.MarkdownView;return g(a)},t.wbg.__wbg_static_accessor_DESKTOP_dd6e71bf89458d32=function(){var a=X.Platform.isDesktop;return a},t.wbg.__wbg_addCommand_3c1a3a9923f1e2a4=function(a,s){q(a).addCommand(N(s))},t.wbg.__wbg_new_d14bf16e62c6b3d5=function(){var a=new Object;return g(a)},t.wbg.__wbg_set_61642586f7156f4a=vA(function(a,s,B){var E=Reflect.set(q(a),q(s),q(B));return E}),t.wbg.__wbg_request_f7002cb6604194bd=vA(function(a){var s=request(N(a));return g(s)}),t.wbg.__wbindgen_object_clone_ref=function(a){var s=q(a);return g(s)},t.wbg.__wbg_new_3ea8490cd276c848=function(a,s){try{var B={a,b:s},E=(O,D)=>{let V=B.a;B.a=0;try{return Gj(V,B.b,O,D)}finally{B.a=V}},F=new Promise(E);return g(F)}finally{B.a=B.b=0}},t.wbg.__wbindgen_string_get=function(a,s){let B=q(s);var E=typeof B=="string"?B:void 0,F=bA(E)?0:x(E,k.__wbindgen_malloc,k.__wbindgen_realloc),O=w;Q()[a/4+1]=O,Q()[a/4+0]=F},t.wbg.__wbindgen_debug_string=function(a,s){var B=GA(q(s)),E=x(B,k.__wbindgen_malloc,k.__wbindgen_realloc),F=w;Q()[a/4+1]=F,Q()[a/4+0]=E},t.wbg.__wbindgen_throw=function(a,s){throw new Error(L(a,s))},t.wbg.__wbg_then_ac66ca61394bfd21=function(a,s,B){var E=q(a).then(q(s),q(B));return g(E)},t.wbg.__wbg_then_367b3e718069cfb9=function(a,s){var B=q(a).then(q(s));return g(B)},t.wbg.__wbg_resolve_778af3f90b8e2b59=function(a){var s=Promise.resolve(q(a));return g(s)},t.wbg.__wbindgen_closure_wrapper232=function(a,s,B){var E=UA(a,s,97,Fj);return g(E)},t.wbg.__wbindgen_closure_wrapper3977=function(a,s,B){var E=UA(a,s,119,bj);return g(E)},(typeof A=="string"||typeof Request=="function"&&A instanceof Request||typeof URL=="function"&&A instanceof URL)&&(A=fetch(A));let{instance:p,module:d}=await vj(await A,t);return k=p.exports,YA.__wbindgen_wasm_module=d,k}var WA=YA;var IA=class extends ZA.Plugin{async onload(){let t=Uint8Array.from(atob(TA),p=>p.charCodeAt(0));await WA(Promise.resolve(t)),VA(this)}};0&&(module.exports={});
/*!
 * async
 * https://github.com/caolan/async
 *
 * Copyright 2010-2014 Caolan McMahon
 * Released under the MIT license
 */