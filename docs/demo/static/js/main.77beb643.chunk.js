(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(39)},22:function(e,t,n){},31:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),l=n(15),r=n.n(l),i=(n(22),n(4)),s=n(5),c=n(7),h=n(6),d=n(8),u=n(1),p=n(16),m=n.n(p),g=(n(31),n(32),n(33),n(38),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={selectedLine:void 0},n.content=a.a.createRef(),n.handleScroll=n.handleScroll.bind(Object(u.a)(Object(u.a)(n))),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleScroll",value:function(){this.props.onScroll(this.content.current.editor.session.getScrollTop())}},{key:"componentDidUpdate",value:function(){this.content.current.editor.session.setScrollTop(this.props.scrollTop),this.props.selectedLine!==this.state.selectedLine&&(this.setState({selectedLine:this.props.selectedLine}),this.content.current.editor.gotoLine(this.props.selectedLine+1))}},{key:"render",value:function(){return a.a.createElement(m.a,{ref:this.content,value:this.props.value,onChange:this.props.onChange,readOnly:this.props.readOnly,onScroll:this.handleScroll,onSelectionChange:this.props.onSelectionChange,onCursorChange:this.props.onCursorChange,mode:this.props.mode,theme:"github",fontSize:18,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,editorProps:{$blockScrolling:1/0},setOptions:{showLineNumbers:!0,tabSize:4}})}}]),t}(o.Component)),b=function(e){function t(e){var n;Object(i.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={scrollTop:0,selectedLine:void 0,display:"Loading...",source:"def search(n, a):\n    low = 0\n    high = len(a) - 1\n    while low <= high:\n        mid = low + high // 2\n        v = a[mid]\n        if n == v:\n            return mid\n        if n < v:\n            high=mid - 1\n        else:\n            low=mid + 1\n    return -1\n\ni = search(1, [1, 2, 4])\n"},n.handleChange=n.handleChange.bind(Object(u.a)(Object(u.a)(n))),n.handleScroll=n.handleScroll.bind(Object(u.a)(Object(u.a)(n))),n.handleCursorChange=n.handleCursorChange.bind(Object(u.a)(Object(u.a)(n)));var o=Object(u.a)(Object(u.a)(n));return void 0===window.languagePluginLoader?n.state.display="Pyodide is not loaded.":window.languagePluginLoader.then(function(){fetch("code_tracer.py").then(function(e){return e.text()}).then(function(e){window.pyodide.runPython(e),o.handleChange()})}),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){void 0===e&&(e=this.state.source);var t=window.analyze(e);this.setState({source:e,display:t})}},{key:"handleScroll",value:function(e){this.setState({scrollTop:e})}},{key:"handleCursorChange",value:function(e){this.setState({selectedLine:e.selectionLead.row})}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("p",null,a.a.createElement("a",{href:".."},"Home")),a.a.createElement("table",null,a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("th",null,a.a.createElement("label",{htmlFor:"source"},"Type Some Python")),a.a.createElement("th",null,a.a.createElement("label",{htmlFor:"display"},"See Inside"))),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement(g,{value:this.state.source,scrollTop:this.state.scrollTop,onChange:this.handleChange,onScroll:this.handleScroll,onCursorChange:this.handleCursorChange,mode:"python"})),a.a.createElement("td",null,a.a.createElement(g,{value:this.state.display,scrollTop:this.state.scrollTop,readOnly:!0,selectedLine:this.state.selectedLine,onChange:this.handleChange,onScroll:this.handleScroll,mode:"markdown"}))))),a.a.createElement("p",null,"Change the code, and see the changes inside. Try to find the bug in the example code. (Hint: try searching for different numbers.) Paste your own code to see how it works."))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.77beb643.chunk.js.map