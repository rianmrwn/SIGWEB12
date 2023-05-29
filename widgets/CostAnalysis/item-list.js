// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/CostAnalysis/item-list.html":'\x3cdiv\x3e\r\n  \x3cdiv class \x3d "esriCTItemListContainer" data-dojo-attach-point\x3d"itemListContainer"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/BaseWidget dojo/Evented dijit/_WidgetsInTemplateMixin dojo/text!./item-list.html dojo/_base/array dojo/_base/lang dojo/dom-attr dojo/dom-class dojo/dom-style dojo/on dojo/query dojo/dom-construct dojo/keys dojo/_base/event".split(" "),function(q,r,t,u,v,w,k,b,f,m,n,l,h,p,x){return q([r,t,u],{templateString:v,baseClass:"jimu-widget-cost-analysis-item-list",highlighterColor:"#000",currentActivePanel:null,postCreate:function(){this.inherited(arguments)},startup:function(){this.inherited(arguments);
this.itemList&&0<this.itemList.length&&setTimeout(k.hitch(this,function(){this._loadItemList();this._handleTabIndexesOfItems()}),0)},_handleTabIndexesOfItems:function(){this.emit("OnOpenCreatePanel");this.emit("OnCloseLoadPanel");this.emit("OnCloseUpdateCostEquationPanel")},_loadItemList:function(){w.forEach(this.itemList,k.hitch(this,function(a){this.addItem(a)}))},addItem:function(a){a.content=a.content||"";var g=h.create("div",{},null);var d=h.create("div",{"class":"esriCTItemTitleContainer",tabindex:"0",
"aria-label":a.title,role:"button"},g);f.add(d,"esriCTProjectOveriew");h.create("div",{"class":"esriCTItemHighlighter"},d);var c=h.create("div",{"class":"esriCTItemTitle esriCTEllipsis",innerHTML:a.title,title:a.title,paneName:a.paneName},d);a.hasOwnProperty("updateCostEquationWidget")&&b.set(c,"updateCostEquationWidget",!0);a.hasOwnProperty("loadProjectTab")&&b.set(c,"loadProjectTab",!0);a.hasOwnProperty("createProjectTab")&&b.set(c,"createProjectTab",!0);c=h.create("div",{"class":"esriCTItemContent"},
g);"string"===typeof a.content?b.set(c,"innerHTML",a.content):h.place(a.content,c);this.itemListContainer.appendChild(g);this.own(n(d,"click",k.hitch(this,function(e){this._itemTitleContainerClicked(e)})));this.own(n(d,"keydown",k.hitch(this,function(e){if(e.keyCode===p.ENTER||e.keyCode===p.SPACE)x.stop(e),this._itemTitleContainerClicked(e)})));a.isOpen&&setTimeout(k.hitch(this,function(){d.click()}),100)},_itemTitleContainerClicked:function(a){this._togglePanel(a.currentTarget.parentElement);a.currentTarget.children.length&&
b.get(a.currentTarget.children[1],"loadProjectTab")&&(this.emit("resetLoadProjectNameDropdown"),a.currentTarget.children.length&&f.contains(a.currentTarget.children[1],"esriCTItemTitleActive")?(b.set(a.currentTarget,"aria-expanded","true"),this.emit("OnCloseCreatePanel"),this.emit("OnOpenLoadPanel")):(b.set(a.currentTarget,"aria-expanded","false"),this.emit("OnCloseLoadPanel")));a.currentTarget.children.length&&b.get(a.currentTarget.children[1],"updateCostEquationWidget")&&(this.emit("refreshUpdateCostEquationWidget"),
a.currentTarget.children.length&&f.contains(a.currentTarget.children[1],"esriCTItemTitleActive")?(this.emit("OnCloseCreatePanel"),this.emit("OnCloseLoadPanel"),b.set(a.currentTarget,"aria-expanded","true")):b.set(a.currentTarget,"aria-expanded","false"));a.currentTarget.children.length&&b.get(a.currentTarget.children[1],"createProjectTab")&&(a.currentTarget.children.length&&f.contains(a.currentTarget.children[1],"esriCTItemTitleActive")?(this.emit("OnOpenCreatePanel"),this.emit("OnCloseLoadPanel"),
b.set(a.currentTarget,"aria-expanded","true")):(this.emit("OnCloseCreatePanel"),b.set(a.currentTarget,"aria-expanded","false")))},_togglePanel:function(a,g){var d=0;g||(d=30);g=l(".esriCTItemTitle",a)[0];var c=l(".esriCTItemContent",a)[0];var e=l(".esriCTItemHighlighter",a)[0];f.toggle(g,"esriCTItemTitleActive");f.toggle(c,"esriCTItemContentActive");f.contains(c,"esriCTItemContentActive")?(c.style.height=c.scrollHeight+d+"px",this.currentActivePanel&&!this.openMultiple&&this._togglePanel(this.currentActivePanel,
!0),this.currentActivePanel=a,m.set(e,"backgroundColor",this.highlighterColor)):(c.style.height=0,m.set(e,"backgroundColor","transparent"),b.get(this.currentActivePanel,"index")===b.get(a,"index")&&(this.currentActivePanel=null))}})});