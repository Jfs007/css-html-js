 var get = { // 通过id名
	byId: function(id) {
		return document.getElementById(id)
	},
	byClass: function(sClass, oParent) { // 通过类名
		var aClass = [];
		var reClass = new RegExp("(^| )" + sClass + "( |$)");
		var aElem = this.byTagName("*", oParent);
		for (var i = 0; i < aElem.length; i++) reClass.test(aElem[i].className) && aClass.push(aElem[i]);
		return aClass
	},
	byTagName: function(elem, obj) { // 通过标签名
		return (obj || document).getElementsByTagName(elem)
	}
};