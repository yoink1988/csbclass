webpackJsonp([0],{"/8OY":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"hello"})},r=[],n={render:s,staticRenderFns:r};t.a=n},"07PK":function(e,t,a){"use strict";t.a={name:"HelloWorld",data:function(){return{}}}},"7Rd8":function(e,t){},Fs8J:function(e,t,a){"use strict";var s=a("mvHQ"),r=a.n(s),n=a("KTvf"),o=a("lTUX");t.a={name:"Home",data:function(){return{content:"",selectedCar:"",user:{},logMsg:"",searchMsg:"",login:{email:"",pass:""},cars:[],errMsg:"",dropdownYear:[],dropdownBrand:[],dropdownColor:[],dropdownSpeed:[],filterBrand:"",filterColor:"",filterSpeed:"",filterYear:""}},created:function(){this.getUserData(),this.getCars()},methods:{signIn:function(){var e=this;e.errMsg="",e.logMsg="";var t=new XMLHttpRequest,a=r()({login:e.login.email,pass:e.login.pass});t.open("PUT",getUrl()+"auth/",!0),t.setRequestHeader("Content-type","application/json; charset=utf-8"),t.onreadystatechange=function(){if(4==t.readyState)if(200!=t.status)alert(t.status+": "+t.statusText);else{var a=JSON.parse(t.responseText);a?(e.user=a[0],localStorage.user=r()({id:e.user.id,hash:e.user.hash}),e.clearInputs()):e.logMsg="Wrong login or password"}},t.send(a)},getCars:function(){var e=this,t=new XMLHttpRequest;t.open("GET",getUrl()+"cars/",!0),t.onreadystatechange=function(){if(4==t.readyState)if(200!=t.status)alert(t.status+": "+t.statusText);else{var a=JSON.parse(t.responseText);a?(e.cars=a,e.makeDropDowns()):e.errMsg="Cars not found"}},t.send()},logOut:function(){var e=this;e.content="",e.errMsg="",e.user={},delete localStorage.user,e.getUserData()},getUserData:function(){var e=this;localStorage.user?e.user=JSON.parse(localStorage.user):(e.user.name="",e.user.role="guest",e.user.id="0",e.user.hash="0"),e.checkAuth()},checkAuth:function(){var e=this,t=new XMLHttpRequest;t.open("GET",getUrl()+"auth/",!0),t.setRequestHeader("Authorization","Basic "+btoa(e.user.id+":"+e.user.hash)),t.setRequestHeader("Content-type","application/json; charset=utf-8"),t.onreadystatechange=function(){if(4==t.readyState)if(200!=t.status);else{var a=JSON.parse(t.responseText);a?e.getUserInfo():(e.user.name="",e.user.role="guest",e.user.id="0",e.user.hash="0")}},t.send()},getUserInfo:function(){var e=this,t=new XMLHttpRequest;t.open("GET",getUrl()+"users/"+e.user.id,!0),t.setRequestHeader("Authorization","Basic "+btoa(e.user.id+":"+e.user.hash)),t.setRequestHeader("Content-type","application/json; charset=utf-8"),t.onreadystatechange=function(){if(4==t.readyState)if(200!=t.status);else{var a=JSON.parse(t.responseText);a?e.user=a[0]:(e.user.name="",e.user.role="guest",e.user.id="0",e.user.hash="0")}},t.send()},clearInputs:function(){var e=this;e.login.email="",e.login.pass=""},showOrders:function(){var e=this;e.errMsg="",e.content="orders"},showCar:function(e){var t=this;t.errMsg="",t.selectedCar=e,t.content="car"},makeDropDowns:function(){var e=this;e.cars.forEach(function(t){e.dropdownBrand.push(t.brand),e.dropdownYear.push(t.year),e.dropdownColor.push(t.color),e.dropdownSpeed.push(t.speed)}),e.dropdownBrand=e.dropdownBrand.filter(onlyUnique),e.dropdownYear=e.dropdownYear.filter(onlyUnique),e.dropdownColor=e.dropdownColor.filter(onlyUnique),e.dropdownSpeed=e.dropdownSpeed.filter(onlyUnique)},search:function(){var e=this;if(e.searchMsg="",e.errMsg="",e.content="",e.filterYear){e.cars={};var t=getUrl()+"cars/year/"+e.filterYear+"/";e.filterBrand&&(t+="brand/"+e.filterBrand+"/"),e.filterColor&&(t+="color/"+e.filterColor+"/"),e.filterSpeed&&(t+="speed/"+e.filterSpeed+"/");var a=new XMLHttpRequest;a.open("GET",t,!0),a.onreadystatechange=function(){if(4==a.readyState)if(200!=a.status)alert(a.status+": "+a.statusText);else{var t=JSON.parse(a.responseText);!1!==t?e.cars=t:e.errMsg="Cars with these parametres not found"}},a.send()}else e.searchMsg="Year is required parameter to search."},refresh:function(){var e=this;e.errMsg="",e.filterSpeed="",e.filterColor="",e.filterBrand="",e.filterYear="",e.getCars()},goHome:function(){var e=this;e.content="",e.filterSpeed="",e.filterColor="",e.filterBrand="",e.filterYear="",e.getCars()}},computed:{},components:{"order-section":n.a,"car-section":o.a}}},GuI2:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"book row",staticStyle:{margin:"20px"}},[a("div",{staticClass:"col",staticStyle:{"text-align":"center"}},[a("h3",[e._v("Book Details")]),e._v(" "),a("div",{staticClass:"info"},[a("h4",[e._v(e._s(e.car.model))]),e._v(" "),a("p",[e._v(e._s(e.car.brand))]),e._v(" "),a("p",[e._v("Motor: "+e._s(e.car.motor)+" ")]),e._v(" "),a("p",[e._v("Color: "+e._s(e.car.color)+" ")]),e._v(" "),a("p",[e._v("Price: "+e._s(e.car.price)+" $")]),e._v(" "),"guest"!=e.user.role?a("div",{staticClass:"add"},[a("div",{staticClass:"form"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.payment,expression:"payment"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.payment=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[e._v("Select Pay method")]),e._v(" "),e._l(e.dropDown,function(t){return a("option",{domProps:{value:t.value}},[e._v(e._s(t.title))])})],2),e._v(" "),a("button",{staticClass:"add-to-cart btnn",on:{click:function(t){e.makeOrder()}}},[e._v("Make pre-order")]),e._v(" "),a("p",[e._v(e._s(e.msg))])])]):e._e()])])])},r=[],n={render:s,staticRenderFns:r};t.a=n},JGaf:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-2 left"},[a("div",{staticClass:"row menu"},[a("div",{staticClass:"col",staticStyle:{margin:"20px auto"}},[a("div",{staticClass:"row",staticStyle:{"text-align":"center"}},[a("b",[e._v("Welcome "+e._s(e.user.name))])]),e._v(" "),a("div",{staticClass:"row",staticStyle:{"margin-top":"30px auto"}},["guest"==e.user.role?a("div",{staticClass:"log-form col"},[a("label",{attrs:{for:"exampleInputPassword1"}},[e._v("Login Form")]),e._v(" "),e._m(0),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.login.email,expression:"login.email"}],attrs:{placeholder:"Enter email",type:"text"},domProps:{value:e.login.email},on:{input:function(t){t.target.composing||e.$set(e.login,"email",t.target.value)}}}),e._v(" "),a("label",{attrs:{for:"exampleInputPassword1"}},[e._v("Password:")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.login.pass,expression:"login.pass"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.login.pass},on:{input:function(t){t.target.composing||e.$set(e.login,"pass",t.target.value)}}}),e._v(" "),a("p",[a("button",{staticClass:"login",on:{click:e.signIn}},[e._v("Log In")])]),e._v(" "),a("p",[e._v(e._s(e.logMsg))]),e._v(" "),a("p",[a("router-link",{attrs:{to:"/register/"}},[e._v("Registration")])],1)]):a("div",{staticClass:"col",staticStyle:{"text-align":"center"}},[a("p",[a("a",{attrs:{href:"#"},on:{click:function(t){e.logOut()}}},[e._v("Log Out")])]),e._v(" "),a("p",[a("a",{attrs:{href:"#"},on:{click:function(t){e.showOrders()}}},[e._v("My Orders")])]),e._v(" "),"admin"==e.user.role?a("div",{staticClass:"admin"},[a("p",[a("router-link",{attrs:{to:"/admin/",role:e.user.role}},[e._v("Admin Panel")])],1)]):e._e()]),e._v(" "),""!==e.content?a("div",{staticClass:"home"},[a("p",[a("a",{attrs:{href:"#"},on:{click:function(t){e.goHome()}}},[e._v("Home")])])]):e._e()])])]),e._v(" "),a("div",{staticClass:"row",staticStyle:{margin:"20px"}},[a("p",[e._v("Search By")]),e._v("\n        Brand:\n        "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.filterBrand,expression:"filterBrand"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.filterBrand=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[e._v("Select Brand")]),e._v(" "),e._l(e.dropdownBrand,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v("\n        Color:\n        "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.filterColor,expression:"filterColor"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.filterColor=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[e._v("Select Color")]),e._v(" "),e._l(e.dropdownColor,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v("\n        Speed:\n        "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.filterSpeed,expression:"filterSpeed"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.filterSpeed=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[e._v("Select Speed")]),e._v(" "),e._l(e.dropdownSpeed,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v("\n        Year:\n        "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.filterYear,expression:"filterYear"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.filterYear=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[e._v("Select Year")]),e._v(" "),e._l(e.dropdownYear,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v(" "),a("p",[a("button",{staticClass:"btnn",on:{click:function(t){e.refresh()}}},[e._v("Clear Filters")])]),e._v(" "),a("p",[a("button",{staticClass:"btnn",on:{click:function(t){e.search()}}},[e._v("Find")])]),e._v(" "),a("p",[e._v(e._s(e.searchMsg))])])]),e._v(" "),a("div",{staticClass:"col-md-10 right"},[a("div",{staticClass:"row"},["orders"==e.content?a("div",[a("order-section",{attrs:{user:e.user}})],1):e._e(),e._v(" "),"car"==e.content?a("div",[a("car-section",{attrs:{car:e.selectedCar,user:e.user}})],1):e._e(),e._v(" "),""==e.content?a("div",{staticClass:"col"},[a("span",[e._v(e._s(e.errMsg))]),e._v(" "),a("table",{staticClass:"table",staticStyle:{margin:"20px",background:"#fce3c7"}},[e._m(1),e._v(" "),a("tbody",e._l(e.cars,function(t,s){return a("tr",[a("td",{staticClass:"col"},[a("a",{attrs:{href:"#"},on:{click:function(a){e.showCar(t)}}},[e._v(e._s(t.model))])]),e._v(" "),a("td",{staticClass:"col"},[e._v(e._s(t.brand))])])}))])]):e._e()])])])])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("label",[e._v("Email address:")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("td",{staticClass:"col"},[a("b",[e._v("Model")])]),e._v(" "),a("td",{staticClass:"col"},[a("b",[e._v("Brand")])])])])}],n={render:s,staticRenderFns:r};t.a=n},JJT7:function(e,t,a){"use strict";var s=a("mvHQ"),r=a.n(s);t.a={name:"Register",data:function(){return{msg:"",login:"",name:"",pass:""}},methods:{submit:function(){var e=this,t=new XMLHttpRequest,a=r()({name:e.name,login:e.login,pass:e.pass});t.open("POST",getUrl()+"users/",!0),t.setRequestHeader("Content-type","application/json; charset=utf-8"),t.onreadystatechange=function(){if(4==t.readyState)if(200!=t.status)alert(t.status+": "+t.statusText);else{var a=JSON.parse(t.responseText);!0===a?(e.msg="Thank You! Please follow to Home page for Sign In",login="",name="",pass=""):e.msg=a}},t.send(a)}}}},KOLN:function(e,t){},KTvf:function(e,t,a){"use strict";function s(e){a("twhJ")}var r=a("eSQD"),n=a("bmD8"),o=a("VU/8"),i=s,l=o(r.a,n.a,!1,i,"data-v-53cf1344",null);t.a=l.exports},M93x:function(e,t,a){"use strict";function s(e){a("nutR")}var r=a("xJD8"),n=a("gbKD"),o=a("VU/8"),i=s,l=o(r.a,n.a,!1,i,null,null);t.a=l.exports},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("7+uW"),r=a("M93x"),n=a("YaEn");s.a.config.productionTip=!1,new s.a({el:"#app",router:n.a,template:"<App/>",components:{App:r.a}})},PWys:function(e,t){},YaEn:function(e,t,a){"use strict";var s=a("7+uW"),r=a("/ocq"),n=(a("gORT"),a("lO7g")),o=a("dIqY");s.a.use(r.a),t.a=new r.a({routes:[{path:"/",name:"Home",component:n.a},{path:"/register/",name:"Register",component:o.a}]})},bmD8:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("table",{staticClass:"table",staticStyle:{margin:"20px",background:"#fce3c7"}},[e._m(0),e._v(" "),a("tbody",e._l(e.orders,function(t,s){return a("tr",[a("td",{staticClass:"col"},[e._v(e._s(t.model))]),e._v(" "),a("td",{staticClass:"col"},[e._v(e._s(t.brand))]),e._v(" "),a("td",{staticClass:"col"},[e._v(e._s(t.year))]),e._v(" "),a("td",{staticClass:"col"},[e._v(e._s(t.payment))]),e._v(" "),a("td",{staticClass:"col"},[e._v(e._s(t.status))])])}))])])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("td",{staticClass:"col"},[a("b",[e._v("Model")])]),e._v(" "),a("td",{staticClass:"col"},[a("b",[e._v("Brand")])]),e._v(" "),a("td",{staticClass:"col"},[a("b",[e._v("Year")])]),e._v(" "),a("td",{staticClass:"col"},[a("b",[e._v("Payment")])]),e._v(" "),a("td",{staticClass:"col"},[a("b",[e._v("Status")])])])])}],n={render:s,staticRenderFns:r};t.a=n},dIqY:function(e,t,a){"use strict";function s(e){a("PWys")}var r=a("JJT7"),n=a("yNjl"),o=a("VU/8"),i=s,l=o(r.a,n.a,!1,i,null,null);t.a=l.exports},eSQD:function(e,t,a){"use strict";t.a={name:"orders",props:["user"],data:function(){return{orders:[]}},created:function(){this.getOrders()},methods:{getOrders:function(){var e=this,t=new XMLHttpRequest;t.open("GET",getUrl()+"orders/"+e.user.id,!0),t.setRequestHeader("Authorization","Basic "+btoa(e.user.id+":"+e.user.hash)),t.onreadystatechange=function(){if(4==t.readyState)if(200!=t.status)alert(t.status+": "+t.statusText);else{var a=JSON.parse(t.responseText);a?e.orders=a:e.errMsg="No Orders"}},t.send()}}}},gORT:function(e,t,a){"use strict";function s(e){a("KOLN")}var r=a("07PK"),n=a("/8OY"),o=a("VU/8"),i=s,l=o(r.a,n.a,!1,i,"data-v-198ce2da",null);l.exports},gSsR:function(e,t,a){"use strict";var s=a("mvHQ"),r=a.n(s);t.a={name:"Book",props:["car","user"],data:function(){return{msg:"",dropDown:[{value:"cash",title:"Cash"},{value:"btc",title:"Bit Coin"},{value:"webmoney",title:"Web Money"}],payment:""}},created:function(){},methods:{makeOrder:function(){var e=this;if(e.payment){var t=new XMLHttpRequest,a=r()({id_car:e.car.id,payment:e.payment,id_user:e.user.id});t.open("POST",getUrl()+"orders/",!0),t.setRequestHeader("Content-type","application/json; charset=utf-8"),t.onreadystatechange=function(){if(4==t.readyState)if(200!=t.status)alert(t.status+": "+t.statusText);else{var a=JSON.parse(t.responseText);a?(e.msg="Thank You! Order added.",e.payment=""):e.msg="Something wrong"}},t.send(a)}else e.msg="Choose pay method please."}}}},gbKD:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],n={render:s,staticRenderFns:r};t.a=n},lO7g:function(e,t,a){"use strict";function s(e){a("vmq+")}var r=a("Fs8J"),n=a("JGaf"),o=a("VU/8"),i=s,l=o(r.a,n.a,!1,i,"data-v-5a066bd9",null);t.a=l.exports},lTUX:function(e,t,a){"use strict";function s(e){a("7Rd8")}var r=a("gSsR"),n=a("GuI2"),o=a("VU/8"),i=s,l=o(r.a,n.a,!1,i,"data-v-564fd84a",null);t.a=l.exports},nutR:function(e,t){},twhJ:function(e,t){},"vmq+":function(e,t){},xJD8:function(e,t,a){"use strict";t.a={name:"app"}},yNjl:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"reg row"},[a("div",{staticClass:"col-md-5",staticStyle:{width:"400px"},attrs:{id:"regform"}},[a("form",{attrs:{role:"form "}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[e._v("Email")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.login,expression:"login"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1",placeholder:"Enter email"},domProps:{value:e.login},on:{input:function(t){t.target.composing||(e.login=t.target.value)}}}),e._v(" "),a("small",{staticClass:"text-muted",attrs:{id:"passwordHelpInline"}},[e._v("\n          example@gmail.com\n          ")])]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputName"}},[e._v("Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputPassword1",placeholder:"Name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),a("small",{staticClass:"text-muted",attrs:{id:"passwordHelpInline"}},[e._v("\n          Must be 3-20 characters long, contain letters, and must not contain spaces, special characters, or emoji. \n          ")])]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputPassword1"}},[e._v("Password")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.pass,expression:"pass"}],staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"Password"},domProps:{value:e.pass},on:{input:function(t){t.target.composing||(e.pass=t.target.value)}}}),e._v(" "),a("small",{staticClass:"text-muted",attrs:{id:"passwordHelpInline"}},[e._v("\n             Must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.\n          ")])]),e._v(" "),a("button",{staticClass:"btn btn-default",on:{click:function(t){e.submit()}}},[e._v("Submit")]),e._v(" "),a("router-link",{attrs:{to:"/"}},[a("button",{staticClass:"btn btn-default"},[e._v("Home")])]),e._v(" "),a("p",{staticStyle:{padding:"10px"}},[e._v(e._s(e.msg))])],1)])])},r=[],n={render:s,staticRenderFns:r};t.a=n}},["NHnr"]);
//# sourceMappingURL=app.59a076958b688e35057f.js.map