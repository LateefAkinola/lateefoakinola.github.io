(self.webpackChunkv1=self.webpackChunkv1||[]).push([[470],{4466:function(t,e,n){"use strict";n.r(e);var o=n(7294),r=n(5414),u=n(1082),f=n(1804),a=n.n(f),i=n(1034),c=n(3494),l=n(1428);const{colors:s,fontSizes:x,fonts:d}=l.theme,p=(0,c.default)(l.or).withConfig({displayName:"tags__StyledTagsContainer",componentId:"sc-tp2xx-0"})(["max-width:1000px;h1{margin-bottom:50px;}ul{color:",";li{font-size:",";a{",";color:",";.count{color:",";font-family:",";font-size:",";}}}}"],s.lightSlate,x.xxl,l.tA.inlineLink,s.lightSlate,s.slate,d.SFMono,x.md);e.default=t=>{let{data:{allMarkdownRemark:{group:e},site:{siteMetadata:{title:n}}},location:f}=t;return o.createElement(i.Ar,{location:f},o.createElement(r.q,{title:n}),o.createElement(p,null,o.createElement("span",{className:"breadcrumb"},o.createElement("span",{className:"arrow"},"←"),o.createElement(u.Link,{to:"/pensieve"},"All memories")),o.createElement("h1",null,"Tags"),o.createElement("ul",{className:"fancy-list"},e.map((t=>o.createElement("li",{key:t.fieldValue},o.createElement(u.Link,{to:"/pensieve/tags/"+a()(t.fieldValue)+"/"},t.fieldValue," ",o.createElement("span",{className:"count"},"(",t.totalCount,")"))))))))}},2705:function(t,e,n){var o=n(5639).Symbol;t.exports=o},9932:function(t){t.exports=function(t,e){for(var n=-1,o=null==t?0:t.length,r=Array(o);++n<o;)r[n]=e(t[n],n,t);return r}},2663:function(t){t.exports=function(t,e,n,o){var r=-1,u=null==t?0:t.length;for(o&&u&&(n=t[++r]);++r<u;)n=e(n,t[r],r,t);return n}},9029:function(t){var e=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(e)||[]}},4239:function(t,e,n){var o=n(2705),r=n(9607),u=n(2333),f=o?o.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":f&&f in Object(t)?r(t):u(t)}},8674:function(t){t.exports=function(t){return function(e){return null==t?void 0:t[e]}}},531:function(t,e,n){var o=n(2705),r=n(9932),u=n(1469),f=n(3448),a=o?o.prototype:void 0,i=a?a.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(u(e))return r(e,t)+"";if(f(e))return i?i.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n}},5393:function(t,e,n){var o=n(2663),r=n(3816),u=n(8748),f=RegExp("['’]","g");t.exports=function(t){return function(e){return o(u(r(e).replace(f,"")),t,"")}}},9389:function(t,e,n){var o=n(8674)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});t.exports=o},1957:function(t,e,n){var o="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=o},9607:function(t,e,n){var o=n(2705),r=Object.prototype,u=r.hasOwnProperty,f=r.toString,a=o?o.toStringTag:void 0;t.exports=function(t){var e=u.call(t,a),n=t[a];try{t[a]=void 0;var o=!0}catch(i){}var r=f.call(t);return o&&(e?t[a]=n:delete t[a]),r}},3157:function(t){var e=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return e.test(t)}},2333:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},5639:function(t,e,n){var o=n(1957),r="object"==typeof self&&self&&self.Object===Object&&self,u=o||r||Function("return this")();t.exports=u},2757:function(t){var e="\\ud800-\\udfff",n="\\u2700-\\u27bf",o="a-z\\xdf-\\xf6\\xf8-\\xff",r="A-Z\\xc0-\\xd6\\xd8-\\xde",u="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",f="["+u+"]",a="\\d+",i="["+n+"]",c="["+o+"]",l="[^"+e+u+a+n+o+r+"]",s="(?:\\ud83c[\\udde6-\\uddff]){2}",x="[\\ud800-\\udbff][\\udc00-\\udfff]",d="["+r+"]",p="(?:"+c+"|"+l+")",v="(?:"+d+"|"+l+")",g="(?:['’](?:d|ll|m|re|s|t|ve))?",m="(?:['’](?:D|LL|M|RE|S|T|VE))?",b="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",y="[\\ufe0e\\ufe0f]?",E=y+b+("(?:\\u200d(?:"+["[^"+e+"]",s,x].join("|")+")"+y+b+")*"),h="(?:"+[i,s,x].join("|")+")"+E,A=RegExp([d+"?"+c+"+"+g+"(?="+[f,d,"$"].join("|")+")",v+"+"+m+"(?="+[f,d+p,"$"].join("|")+")",d+"?"+p+"+"+g,d+"+"+m,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,h].join("|"),"g");t.exports=function(t){return t.match(A)||[]}},3816:function(t,e,n){var o=n(9389),r=n(9833),u=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,f=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=r(t))&&t.replace(u,o).replace(f,"")}},1469:function(t){var e=Array.isArray;t.exports=e},7005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},3448:function(t,e,n){var o=n(4239),r=n(7005);t.exports=function(t){return"symbol"==typeof t||r(t)&&"[object Symbol]"==o(t)}},1804:function(t,e,n){var o=n(5393)((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()}));t.exports=o},9833:function(t,e,n){var o=n(531);t.exports=function(t){return null==t?"":o(t)}},8748:function(t,e,n){var o=n(9029),r=n(3157),u=n(9833),f=n(2757);t.exports=function(t,e,n){return t=u(t),void 0===(e=n?void 0:e)?r(t)?f(t):o(t):t.match(e)||[]}}}]);
//# sourceMappingURL=component---src-pages-pensieve-tags-js-8fc33fe5ba4aaee650cf.js.map