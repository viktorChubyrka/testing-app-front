(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==n[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},n={app:0},i=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0045":function(t,e,s){"use strict";var a=s("d57e"),n=s.n(a);n.a},"06f1":function(t,e,s){},"2dcc":function(t,e,s){"use strict";var a=s("9870"),n=s.n(a);n.a},3272:function(t,e,s){},3784:function(t,e,s){},"3b33":function(t,e,s){"use strict";var a=s("3b7e"),n=s.n(a);n.a},"3b7e":function(t,e,s){},"51d1":function(t,e,s){"use strict";var a=s("06f1"),n=s.n(a);n.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},i=[],r=s("2877"),o={},c=Object(r["a"])(o,n,i,!1,null,null,null),l=c.exports,u=s("8c4f"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero is-fullheight"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("div",{staticClass:"title has-text-centered"},[t._v("Увійти в особистий кабінет")]),s("h2",{staticStyle:{color:"#FF3300"}},[t._v(t._s(t.errorMassageL))]),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Логін")]),s("div",{staticClass:"control has-icons-left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userToLogIn.login,expression:"userToLogIn.login"}],staticClass:"input is-medium",attrs:{type:"text",placeholder:"Логін"},domProps:{value:t.userToLogIn.login},on:{input:function(e){e.target.composing||t.$set(t.userToLogIn,"login",e.target.value)}}}),s("span",{staticClass:"icon is-left"},[s("b-icon",{attrs:{icon:"account"}})],1)])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Пароль")]),s("div",{staticClass:"control has-icons-left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userToLogIn.password,expression:"userToLogIn.password"}],staticClass:"input is-medium",attrs:{type:"password",placeholder:"Пароль"},domProps:{value:t.userToLogIn.password},on:{input:function(e){e.target.composing||t.$set(t.userToLogIn,"password",e.target.value)}}}),s("span",{staticClass:"icon is-left"},[s("b-icon",{attrs:{icon:"lock"}})],1)])]),s("div",{staticClass:"buttons"},[s("b-button",{staticStyle:{"margin-top":"1rem"},attrs:{loading:t.isLoad,type:"is-info",expanded:""},on:{click:function(e){return t.logIn()}}},[t._v("Увійти")])],1),s("div",{staticClass:"suptitle has-text-centered"},[s("router-link",{attrs:{to:"/registration"}},[t._v("Зареєструватися")])],1)])])])},p=[],m={data:function(){return{userToLogIn:{login:"",password:""}}},methods:{logIn:function(){this.$store.commit("CHANGE_IS_LOAD"),this.$store.dispatch("LOGIN_USER",{user:this.userToLogIn,context:this})}},computed:{errorMassageL:function(){return this.$store.getters.LOGINERROR},isLoad:function(){return this.$store.getters.IS_LOAD}}},f=m,v=(s("0045"),Object(r["a"])(f,d,p,!1,null,"2a75b9c6",null)),h=v.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero is-fullheight"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("div",{staticClass:"title has-text-centered"},[t._v("Створення обліковго запису")]),s("h2",{staticStyle:{color:"#FF3300"}},[t._v(t._s(t.errorMassageR))]),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("І'мя")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.firstName,expression:"newUser.firstName"}],staticClass:"input is-medium",attrs:{type:"text",placeholder:"І'мя"},domProps:{value:t.newUser.firstName},on:{input:function(e){e.target.composing||t.$set(t.newUser,"firstName",e.target.value)}}})])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Прізвище")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.lastName,expression:"newUser.lastName"}],staticClass:"input is-medium",attrs:{type:"text",placeholder:"Прізвище"},domProps:{value:t.newUser.lastName},on:{input:function(e){e.target.composing||t.$set(t.newUser,"lastName",e.target.value)}}})])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Логін")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.login,expression:"newUser.login"}],staticClass:"input is-medium",attrs:{type:"text",placeholder:"Логін"},domProps:{value:t.newUser.login},on:{input:function(e){e.target.composing||t.$set(t.newUser,"login",e.target.value)}}})])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("E-mail")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.Email,expression:"newUser.Email"}],staticClass:"input is-medium",attrs:{type:"e-mail",placeholder:"ex@ex.com"},domProps:{value:t.newUser.Email},on:{input:function(e){e.target.composing||t.$set(t.newUser,"Email",e.target.value)}}})])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Пароль")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.password,expression:"newUser.password"}],staticClass:"input is-medium",attrs:{type:"password",placeholder:"Пароль"},domProps:{value:t.newUser.password},on:{input:function(e){e.target.composing||t.$set(t.newUser,"password",e.target.value)}}})])]),s("div",{staticClass:"buttons"},[s("b-button",{staticStyle:{"margin-top":"1rem"},attrs:{loading:t.isLoad,type:"is-info",expanded:""},on:{click:function(e){return t.createNewUser()}}},[t._v("Створити обліковий запис")])],1)])])])},b=[],_={data:function(){return{newUser:{firstName:"",lastName:"",login:"",Email:"",password:""}}},methods:{createNewUser:function(){this.$store.commit("CHANGE_IS_LOAD"),this.$store.dispatch("CREATE_NEW_USER",{user:this.newUser,context:this})}},computed:{errorMassageR:function(){return this.$store.getters.REGISTRERROR},isLoad:function(){return this.$store.getters.IS_LOAD}}},S=_,E=(s("51d1"),Object(r["a"])(S,g,b,!1,null,"47c7ba56",null)),C=E.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"container-main"},[s("div",{staticClass:"container is-fullheight"},[s("b-tabs",{attrs:{type:"is-boxed",size:"is-medium",expanded:""}},[s("b-tab-item",{attrs:{icon:"file-plus",label:"Додати новий файл"}},[s("AddFile")],1),s("b-tab-item",{attrs:{icon:"brain",label:"Створити тест"}},[s("CreateTest")],1),s("b-tab-item",{attrs:{icon:"clipboard",label:"Мої тести"}},[s("AdminTests")],1),s("b-tab-item",{attrs:{icon:"check",label:"Результати опитувань"}},[s("TestResult")],1)],1)],1)])},T=[],y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero"},[s("div",{staticClass:"hero-head"},[s("h2",{staticStyle:{color:"#ff3300"}},[t._v(t._s(t.fileSendMessage))]),s("div",{staticClass:"columns is-vcentered"},[s("div",{staticClass:"column is-5"},[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Дисципліна")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticClass:"input is-medium",attrs:{type:"text",placeholder:"Дисципліна"},domProps:{value:t.category},on:{input:function(e){e.target.composing||(t.category=e.target.value)}}})])])]),s("div",{staticClass:"column is-5"},[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Тема")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.topic,expression:"topic"}],staticClass:"input is-medium",attrs:{type:"text",placeholder:"Тема"},domProps:{value:t.topic},on:{input:function(e){e.target.composing||(t.topic=e.target.value)}}})])])]),s("div",{staticClass:"column is-2"},[s("div",{staticClass:"field"},[s("b-field",{attrs:{label:"Клас"}},[s("b-numberinput",{attrs:{"controls-position":"compact","controls-rounded":""},model:{value:t.clas,callback:function(e){t.clas=e},expression:"clas"}})],1)],1)])])]),s("div",{staticClass:"content"},[s("div",{staticClass:"container has-text-centered"},[s("div",{staticClass:"tags"},t._l(t.dropFiles,(function(e,a){return s("span",{key:a,staticClass:"tag is-primary"},[t._v(" "+t._s(e.name)+" "),s("button",{staticClass:"delete is-small",attrs:{type:"button"},on:{click:function(e){return t.deleteDropFile(a)}}})])})),0),t._l(t.errors,(function(e,a){return s("h5",{key:a,staticStyle:{color:"red"}},[t._v(" "+t._s(e)+" ")])})),s("b-upload",{attrs:{multiple:"",required:"","drag-drop":""},on:{input:function(e){return t.checkFile()}},model:{value:t.dropFiles,callback:function(e){t.dropFiles=e},expression:"dropFiles"}},[s("section",{staticClass:"section",attrs:{expanded:""}},[s("div",{staticClass:"content has-text-centered"},[s("p",[s("b-icon",{attrs:{icon:"upload",size:"is-large"}})],1),s("p",[t._v(" Перетягніть свої файли сюди або натисніть щоб завантажити "),s("br"),t._v("(підтримуються файли формату .docx .tec .csv) ")])])])]),s("div",{staticClass:"buttons"},[s("b-button",{staticStyle:{"margin-top":"1rem"},attrs:{disabled:t.disable,type:"is-primary",expanded:""},on:{click:function(e){return t.sendFiles()}}},[t._v("Завантажити файли")])],1)],2)])])},x=[],R=(s("a434"),s("b0c0"),s("ac1f"),s("1276"),{data:function(){return{disable:!1,topic:"",clas:1,category:"",dropFiles:[],errors:[]}},methods:{deleteDropFile:function(t){this.dropFiles.splice(t,1),this.errors.splice(t,1)},checkFile:function(){var t=this.dropFiles.length,e=this.dropFiles[t-1].name.split("."),s=e.length;"docx"==e[s-1]||"csv"==e[s-1]||"tec"==e[s-1]?(this.disable=!1,this.errors.push(null)):(this.disable=!0,this.errors.push("Формат файлу не підтримується"))},sendFiles:function(){this.$store.dispatch("SEND_FILE",{file:this.dropFiles[0],clas:this.clas,category:this.category,topic:this.topic})}},computed:{fileSendMessage:function(){return this.$store.getters.FILE_SEND_MESSAGE}}}),N=R,O=(s("acf9"),Object(r["a"])(N,y,x,!1,null,null,null)),k=O.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tile is-ancestor"},[s("div",{staticClass:"tile is-8 is-vertical"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-11"},[s("b-field",{attrs:{label:"Назва тесту"}},[s("b-input",{attrs:{placeholder:"Назва тесту"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1)]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-8"},[s("b-field",{attrs:{label:"Дисципліна"}},[s("b-select",{attrs:{placeholder:"Виберіть дисципліну",type:"is-info",expanded:""},model:{value:t.cat,callback:function(e){t.cat=e},expression:"cat"}},t._l(t.categorys,(function(e,a){return s("option",{key:a,domProps:{value:[e]}},[t._v(t._s(e.category))])})),0)],1)],1)]),t.cat?s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-11"},[t._l(t.cat[0].test.topic,(function(e,a){return s("div",{key:a,staticClass:"columns"},[s("div",{staticClass:"column is-8"},[s("b-field",{attrs:{label:"Тема"}},[s("h1",[t._v(t._s(e))])])],1),s("div",{staticClass:"column"},[s("b-field",{attrs:{label:t.count(t.cat[0].test.count[a])}},[s("b-numberinput",{attrs:{min:"0",max:t.cat[0].test.count[a],"controls-position":"compact","controls-rounded":""},model:{value:t.qCount[a],callback:function(e){t.$set(t.qCount,a,e)},expression:"qCount[i]"}})],1)],1)])})),s("div",{staticClass:"buttons"},[s("b-button",{staticStyle:{"margin-top":"1rem"},attrs:{type:"is-primary",expanded:""},on:{click:function(e){return t.createTest()}}},[t._v("Створити тест")])],1)],2)]):t._e()])])},L=[],A={data:function(){return{name:"",cat:null,qCount:[]}},methods:{count:function(t){return"К-ть питань (".concat(t,")")},createTest:function(){var t=[];if(this.cat&&0!=this.qCount.length)for(var e=0;e<this.cat[0].test.filesName.length;e++)t.push({count:this.qCount[e],fileName:this.cat[0].test.filesName[e]});this.$store.dispatch("CREATE_TEST",{topic:t,name:this.name,login:localStorage.getItem("Login")}),200==this.$store.getters.STATUS?(alert("Тест створено успішно"),this.$store.commit("SET_STATUS",0)):alert("Упс... тест не створено")}},created:function(){this.$store.dispatch("GET_CATEGORYS")},computed:{categorys:function(){return this.$store.getters.CATEGORYS}}},$=A,G=(s("8e01"),Object(r["a"])($,I,L,!1,null,null,null)),U=G.exports,D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tile is-ancestor"},[s("div",{staticClass:"tile is-12 is-vertical"},[s("div",{staticClass:"tile is-parent is-vertical"},[s("div",{staticClass:"tile is-child is-12"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-6"},[s("b-field",{attrs:{label:"Дисципліна"}},[s("b-select",{attrs:{type:"is-info",expanded:"",placeholder:"Дисципліна"}},t._l(2,(function(e){return s("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])})),0)],1)],1)])]),s("div",{staticClass:"tile is-child is-12"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-6"},[s("b-field",{attrs:{label:"Назва тесту"}},[s("b-select",{attrs:{type:"is-info",expanded:"",placeholder:"Назва тесту"}},t._l(2,(function(e){return s("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])})),0)],1)],1)])])]),s("div",{staticClass:"tile is-parent"},[s("div",{staticClass:"tile is-child is-6"},[s("b-table",{attrs:{data:t.users,columns:t.columns,selected:t.select,focusable:""},on:{select:function(e){return t.func()},"update:selected":function(e){t.select=e}}})],1),s("div",{staticClass:"tile is-child is-6"},[s("div",{staticClass:"ansvers"},t._l(t.tasks,(function(e,a){return s("div",{key:a,class:e.color?t.colors[1]:t.colors[0]},[s("h2",[t._v(t._s(a+1)+" "+t._s(e.task))]),s("h2",[t._v("("+t._s(e.userAnsver)+")")])])})),0)])])])])},j=[],F={data:function(){var t=[{id:1,name:"Петренко Петро",mark:10},{id:2,name:"Іваненко Іван",mark:2}];return{colors:["red","green"],tasks:[{count:"1",task:"How old are you?",userAnsver:"12",color:!1},{count:"1",task:"How old are you?",userAnsver:"12",color:!1},{count:"1",task:"How old are you?",userAnsver:"12",color:!0}],users:t,select:null,columns:[{field:"id",label:"ID"},{field:"name",label:"Прізвище Ім'я"},{field:"mark",label:"Оцінка",centered:!0}]}},methods:{func:function(){console.log(this.s)}}},P=F,M=(s("bf42"),Object(r["a"])(P,D,j,!1,null,null,null)),q=M.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tile is-ancestor is-vertical"},t._l(t.tests.data,(function(t,e){return s("Test",{key:e,attrs:{test:t}})})),1)},z=[],Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"card tile is-11 is-vertical"},[s("div",{staticClass:"tile"},[s("div",{staticClass:"tile is-vertical is-10"},[s("h1",[t._v(t._s(t.test.nameTest))])]),s("div",{staticClass:"tile is-2 is-vertical"},[s("div",{staticClass:"buttons"},[s("b-button",{directives:[{name:"show",rawName:"v-show",value:!t.show,expression:"!show"}],staticStyle:{"margin-top":"1rem"},attrs:{type:"is-primary"},on:{click:function(e){t.show=!t.show}}},[t._v("Перегляд завдань")]),s("b-button",{directives:[{name:"show",rawName:"v-show",value:!t.show,expression:"!show"}],staticStyle:{"margin-top":"1rem"},attrs:{type:"is-primary"},on:{click:function(e){return t.prompt()}}},[t._v("Відправити тест")])],1)])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"tile is-vertical"},[t._l(t.test.test,(function(e,a){return s("div",{key:a},[s("h2",[t._v(t._s(e.question))]),t._l(e.answers,(function(e,a){return s("h3",{key:a},[t._v(t._s(e))])}))],2)})),s("div",{staticClass:"buttons"},[s("b-button",{staticStyle:{"margin-top":"1rem"},attrs:{type:"is-primary"},on:{click:function(e){return t.prompt()}}},[t._v("Відправити тест")]),s("b-button",{staticStyle:{"margin-top":"1rem"},attrs:{type:"is-primary"},on:{click:function(e){t.show=!t.show}}},[t._v("Закрити завдання")])],1)],2)])])},W=[],J=(s("fb6a"),s("d3b7"),s("25f0"),{name:"Test",props:["test"],data:function(){return{show:!1}},filters:{capitalize:function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""}},methods:{prompt:function(){var t=this;this.$buefy.dialog.prompt({title:"Відправка тестування",message:'<h2 style="font-weight:bold;font-size:20px;margin:0,padding:0">'.concat(this.test.nameTest,"</h2>"),inputAttrs:{size:"50",placeholder:"email1@email.com,email2@email.com,email3@email.com",maxlength:500},trapFocus:!0,onConfirm:function(e){var s=e.split(",");t.$store.dispatch("SEND_TEST",{users:s,testId:t.test._id}),t.$buefy.toast.open("Тест відправлено успішно!")}})}}}),B=J,K=(s("2dcc"),Object(r["a"])(B,Y,W,!1,null,"6fe8b324",null)),Q=K.exports,V={components:{Test:Q},data:function(){return{showDetailsIndex:null}},created:function(){this.$store.dispatch("GET_TESTS")},computed:{tests:function(){return this.$store.getters.TESTS}},methods:{showDetails:function(t){return this.showDetailsIndex==t}}},X=V,Z=(s("ac08"),Object(r["a"])(X,H,z,!1,null,"2b165d78",null)),tt=Z.exports,et={components:{AddFile:k,CreateTest:U,TestResult:q,AdminTests:tt},data:function(){return{}},mounted:function(){this.$store.dispatch("GET_CATEGORYS")}},st=et,at=(s("5d2c"),Object(r["a"])(st,w,T,!1,null,"0f4b8aa6",null)),nt=at.exports,it=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"container-main"},[s("router-view")],1)},rt=[],ot={data:function(){return{}}},ct=ot,lt=(s("3b33"),Object(r["a"])(ct,it,rt,!1,null,"7daf0790",null)),ut=lt.exports,dt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container is-fullheight"},[1==t.log?s("div",[s("h1",{staticStyle:{"text-align":"center","font-size":"40px"}},[t._v(" Ви вже прошли тест ")])]):s("section",{staticStyle:{width:"95%",margin:"auto","padding-top":"10%"}},[s("b-steps",{attrs:{size:"is-small",type:"is-black"}},[t._l(t.tests,(function(e,a){return s("b-step-item",{key:a,staticClass:"task",attrs:{type:"is-default",clickable:"",step:a+1}},[s("h1",{staticStyle:{margin:"2% 0","font-weight":"bold"}},[t._v(t._s(e.question))]),s("section",t._l(e.answers,(function(e,n){return s("div",{key:n,staticClass:"field"},[s("b-radio",{attrs:{"native-value":n},model:{value:t.radio[a],callback:function(e){t.$set(t.radio,a,e)},expression:"radio[index]"}},[t._v(t._s(e))])],1)})),0)])})),s("b-step-item",{staticClass:"task",attrs:{type:"is-default"}},[s("div",{staticClass:"buttons"},[s("b-button",{staticStyle:{"margin-top":"1rem"},attrs:{type:"is-primary",expanded:""},on:{click:function(e){return t.finishTest()}}},[t._v("Завершити тест")])],1)])],2)],1)])},pt=[],mt={data:function(){return{radio:[]}},methods:{finishTest:function(){for(var t=[],e=0;e<this.radio.length;e++)t.push({question:this.tests[e].question,answer:this.tests[e].answers[this.radio[e]]});this.$store.dispatch("SEND_ANSWERS",{test:t,id:localStorage.getItem("id"),name:localStorage.getItem("name")})}},created:function(){this.$store.dispatch("GET_TEST")},computed:{tests:function(){return this.$store.getters.TEST},log:function(){return localStorage.getItem("log")}}},ft=mt,vt=(s("b864"),Object(r["a"])(ft,dt,pt,!1,null,"1eaa432a",null)),ht=vt.exports,gt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container is-fullheight"},[1==t.log?s("div",[s("h1",{staticStyle:{"text-align":"center","font-size":"40px"}},[t._v(" Ви вже прошли тест ")])]):s("section",{staticStyle:{width:"95%",margin:"auto","padding-top":"10%"}},[s("b-field",{attrs:{label:"Ім'я"}},[s("b-input",{attrs:{placeholder:"Ім'я",maxlength:"40"},model:{value:t.firstName,callback:function(e){t.firstName=e},expression:"firstName"}})],1),s("b-field",{attrs:{label:"Прізвище"}},[s("b-input",{attrs:{placeholder:"Прізвище",maxlength:"40"},model:{value:t.lastName,callback:function(e){t.lastName=e},expression:"lastName"}})],1),s("router-link",{attrs:{to:"/test/testing"}},[s("b-button",{attrs:{type:"is-primary",expanded:""},on:{click:function(e){return t.saveData()}}},[t._v("Почати тест")])],1)],1)])},bt=[],_t=(s("99af"),{data:function(){return{firstName:"",lastName:""}},created:function(){localStorage.setItem("token",this.$route.params.token),localStorage.setItem("id",this.$route.params.idT)},methods:{saveData:function(){localStorage.setItem("name","".concat(this.firstName," ").concat(this.lastName))}},computed:{log:function(){return localStorage.getItem("log")}}}),St=_t,Et=Object(r["a"])(St,gt,bt,!1,null,null,null),Ct=Et.exports;a["a"].use(u["a"]);var wt=[{path:"/",name:"StartPAge",component:h},{path:"/registration",name:"Registration",component:C},{path:"/userRoom",name:"UserRoom",component:nt},{path:"/Test/",name:"TestingPage",component:ut,children:[{path:"testing",component:ht},{path:":token/:idT/userData",component:Ct}]}],Tt=new u["a"]({mode:"history",base:"/",routes:wt}),yt=Tt,xt=(s("96cf"),s("1da1")),Rt=s("2f62"),Nt=s("bc3a"),Ot=s.n(Nt);a["a"].use(Rt["a"]);var kt="https://b9ffa5c8.ngrok.io/",It=new Rt["a"].Store({state:{isLoad:!1,logInError:"",registrError:"",tests:[],userLogin:"",fileSendMessage:"",categorys:[],status:"",test:[]},getters:{LOGINERROR:function(t){return t.logInError},REGISTRERROR:function(t){return t.registrError},TESTS:function(t){return t.tests},USER_LOGIN:function(t){return t.userLogin},FILE_SEND_MESSAGE:function(t){return t.fileSendMessage},CATEGORYS:function(t){return t.categorys},IS_LOAD:function(t){return t.isLoad},STATUS:function(t){return t.status},TEST:function(t){return t.test}},mutations:{SET_LOGINERROR:function(t,e){t.logInError=e},SET_REGISTRERROR:function(t,e){t.registrError=e},SET_TESTS:function(t,e){t.tests=e},SET_USER_LOGIN:function(t,e){t.userLogin=e},SET_FILE_SEND_MESSAGE:function(t,e){t.fileSendMessage=e},SET_CATEGORYS:function(t,e){t.categorys=e},CHANGE_IS_LOAD:function(t){t.isLoad=!t.isLoad},SET_STATUS:function(t,e){t.status=e},SET_TEST:function(t,e){t.test=e}},actions:{CREATE_NEW_USER:function(){var t=Object(xt["a"])(regeneratorRuntime.mark((function t(e,s){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Ot.a.post("".concat(kt,"api/user/registr"),s.user);case 2:a=t.sent,200==a.data.status?(e.commit("SET_REGISTRERROR",""),s.context.$router.push("/"),e.commit("CHANGE_IS_LOAD")):(e.commit("SET_REGISTRERROR",a.data.data.message),e.commit("CHANGE_IS_LOAD"));case 4:case"end":return t.stop()}}),t)})));function e(e,s){return t.apply(this,arguments)}return e}(),LOGIN_USER:function(){var t=Object(xt["a"])(regeneratorRuntime.mark((function t(e,s){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Ot.a.post("".concat(kt,"api/user/login"),s.user);case 2:a=t.sent,200==a.data.status?(e.commit("SET_LOGINERROR",""),e.commit("SET_USER_LOGIN",a.data.data.user.login),localStorage.setItem("Login",a.data.data.user.login),s.context.$router.push("/userroom"),e.commit("CHANGE_IS_LOAD")):(e.commit("SET_LOGINERROR","Невірний логін або пароль!"),e.commit("CHANGE_IS_LOAD"));case 4:case"end":return t.stop()}}),t)})));function e(e,s){return t.apply(this,arguments)}return e}(),GET_CATEGORYS:function(){var t=Object(xt["a"])(regeneratorRuntime.mark((function t(e){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Ot.a.post("".concat(kt,"api/user/getcategory"),{login:localStorage.getItem("Login")});case 2:s=t.sent,e.commit("SET_CATEGORYS",s.data.data.tests);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),SEND_FILE:function(){var t=Object(xt["a"])(regeneratorRuntime.mark((function t(e,s){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new FormData,a.append("tasks",s.file),a.append("category",s.category),a.append("studentClass",s.clas),a.append("format",s.file.name.split(".")[1]),a.append("topic",s.topic),a.append("login",localStorage.getItem("Login")),t.next=9,Ot.a.post("".concat(kt,"api/admintest/upload"),a,{headers:{"Content-Type":"multipart/form-data"}});case 9:n=t.sent,e.commit("SET_FILE_SEND_MESSAGE",n.data.message),setTimeout(e.commit("SET_FILE_SEND_MESSAGE",""),3e3);case 12:case"end":return t.stop()}}),t)})));function e(e,s){return t.apply(this,arguments)}return e}(),CREATE_TEST:function(){var t=Object(xt["a"])(regeneratorRuntime.mark((function t(e,s){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Ot.a.post("".concat(kt,"api/admintest/createtest"),s);case 2:a=t.sent,e.commit("SET_STATUS",a.status);case 4:case"end":return t.stop()}}),t)})));function e(e,s){return t.apply(this,arguments)}return e}(),GET_TESTS:function(){var t=Object(xt["a"])(regeneratorRuntime.mark((function t(e){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Ot.a.post("".concat(kt,"api/admintest/getalltest"),{login:localStorage.getItem("Login")});case 2:s=t.sent,e.commit("SET_TESTS",s);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),SEND_TEST:function(){var t=Object(xt["a"])(regeneratorRuntime.mark((function t(e,s){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Ot.a.post("".concat(kt,"api/admintest/sendtest"),s);case 2:case"end":return t.stop()}}),t)})));function e(e,s){return t.apply(this,arguments)}return e}(),GET_TEST:function(){var t=Object(xt["a"])(regeneratorRuntime.mark((function t(e){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Ot.a.get("".concat(kt,"api/admintest/getTest/").concat(localStorage.getItem("id")));case 2:s=t.sent,e.commit("SET_TEST",s.data.data.test.test);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),SEND_ANSWERS:function(){var t=Object(xt["a"])(regeneratorRuntime.mark((function t(e,s){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Ot.a.post("".concat(kt,"api/admintest/verifytest"),s);case 2:a=t.sent,alert("Вітаємо у вас ".concat(a.data.data.bal," балів!")),localStorage.clear(),localStorage.setItem("log",1);case 6:case"end":return t.stop()}}),t)})));function e(e,s){return t.apply(this,arguments)}return e}()},modules:{}}),Lt=s("289d");s("5abe");a["a"].use(Lt["a"]),a["a"].config.productionTip=!1,new a["a"]({router:yt,store:It,render:function(t){return t(l)}}).$mount("#app")},"5d2c":function(t,e,s){"use strict";var a=s("3784"),n=s.n(a);n.a},"780e":function(t,e,s){},"853d":function(t,e,s){},"8e01":function(t,e,s){"use strict";var a=s("780e"),n=s.n(a);n.a},9870:function(t,e,s){},ac08:function(t,e,s){"use strict";var a=s("f0a2"),n=s.n(a);n.a},acf9:function(t,e,s){"use strict";var a=s("853d"),n=s.n(a);n.a},b864:function(t,e,s){"use strict";var a=s("3272"),n=s.n(a);n.a},bf42:function(t,e,s){"use strict";var a=s("eee9"),n=s.n(a);n.a},d57e:function(t,e,s){},eee9:function(t,e,s){},f0a2:function(t,e,s){}});
//# sourceMappingURL=app.dc07fb2a.js.map