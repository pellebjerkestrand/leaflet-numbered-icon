(function (factory, window) {
    if (typeof define === 'function' && define.amd) {
        define(['leaflet'], factory);
    } else if (typeof exports === 'object') {
        if (typeof window !== 'undefined' && window.L) {
            module.exports = factory(L);
        } else {
            module.exports = factory(require('leaflet'));
        }
    }
	
    if(typeof window !== 'undefined' && window.L){
        window.L.Locate = factory(L);
    }

} (function (L) {
    L.NumberedIcon = L.Icon.extend({
		createIcon: function (oldIcon) {
			var img = this._createImg(this._getIconUrl('icon')),
				div = document.createElement('div'),
				label = document.createElement('div');
				
			img.setAttribute('style', 'max-width: 100%; max-height: 100%;');
			
			label.setAttribute ( "class", "map__label" );
			label.innerHTML = this.options.label || '';
			
			div.appendChild(img);
			div.appendChild(label);
			
			this._setIconStyles(div, 'icon');
			
			div.setAttribute('class', div.getAttribute('class') + ' map__label-marker');
			return div;
		}
	});

    return L.NumberedIcon;
}, window));