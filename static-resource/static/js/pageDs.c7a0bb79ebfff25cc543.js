webpackJsonp([8],{0:function(e,t,r){"use strict";r.d(t,"a",function(){return f});var n=r(7),a=r.n(n),i=r(2),s=r.n(i),u=r(8),c=r.n(u),o=r(9),h=r.n(o),d=r(10),f=(r.n(d),function(){function e(t){c()(this,e),this.schema=t}return h()(e,[{key:"count",value:function(e){}},{key:"query",value:function(e,t){var r=this._getQuery(t);return r.set("_method","get"),fetch(e,{method:"POST",credentials:"same-origin",body:r})}},{key:"_isRefKey",value:function(e){if(this.schema.child)for(var t=0;t<this.schema.child.length;t++)if(this.schema.child[t]==e)return!0;return!1}},{key:"_getQuery",value:function(e){var t=new URLSearchParams;for(var r in e)if(this._isRefKey(r)){var n=r+"_";for(var a in e[r])t.append(n+a,e[r][a])}else{var i=e[r];if(i instanceof Array)for(var s=0;s<i.length;s++)t.append(r,i[s]);else t.append(r,i)}return t}},{key:"paged",value:function(e){var t=this._getQuery(e);return t.set("_method","get"),fetch(this.schema.queryUrl||this.schema.url,{method:"POST",credentials:"same-origin",body:t})}},{key:"create",value:function(e,t){var r=new FormData;if(r.append(this.schema.name,s()(e)),t)for(var n in t)r.append(n,t[n]);return fetch(this.schema.createUrl||this.schema.url,{method:"POST",credentials:"same-origin",body:r})}},{key:"update",value:function(e,t){var r=new FormData;r.append("_method","put"),r.append(this.schema.name,s()(e));var n=this._getQuery(t),i=!0,u=!1,c=void 0;try{for(var o,h=a()(n.keys());!(i=(o=h.next()).done);i=!0){var d=o.value;r.append(d,n.get(d))}}catch(e){u=!0,c=e}finally{try{!i&&h.return&&h.return()}finally{if(u)throw c}}return fetch(this.schema.updateUrl||this.schema.url,{method:"POST",credentials:"same-origin",body:r})}},{key:"remove",value:function(e){var t=this._getQuery(e);return t.set("_method","delete"),fetch(this.schema.deleteUrl||this.schema.url,{method:"POST",credentials:"same-origin",body:t})}}]),e}())},38:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"PageDS",function(){return s});var n=r(0),a="/rest/configServer/access/pagePermissionMgr",i=new n.a({queryUrl:a,createUrl:"/rest/configServer/access/pagePermissionMgr",updateUrl:"/rest/configServer/access/pagePermissionMgr",name:"pagePermissionEntity"}),s={save:function(e){return e.id?i.update(e,{id:e.id}).then(function(e){return e.json()}):i.create(e).then(function(e){return e.json()})},findById:function(e){return i.query(a,{id:e}).then(function(e){return e.json()}).then(function(e){return e.result[0]})},query:function(e){return i.paged({appId:e}).then(function(e){return e.json()}).then(function(e){return e.result})}}}},[38]);
//# sourceMappingURL=pageDs.c7a0bb79ebfff25cc543.js.map