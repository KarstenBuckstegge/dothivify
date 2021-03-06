function dotHIVTemplate(options) {
	return '<label class="'+ options.prefix +'-replacement-wrapper">\
						<input class="'+ options.prefix +'-state" type="radio" name="'+ options.prefix +'" />\
						<label class="'+ options.prefix +'-state-revert-trigger" for="'+ options.prefix +'-state-revert"></label>\
						<aside class="'+ options.prefix +'-replacement-aside">\
						<div>' + options.text + '</div>\
						<a class="'+ options.prefix +'-cta" href="' + options.buttonHref + '" target="'+ options.buttonTarget +'">' +
						options.buttonText +
						'</a>\
						</aside>\
					</label>';
}

module.exports = dotHIVTemplate;
