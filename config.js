require.config({
	paths: {
		hb: '../node_modules/requirejs-handlebars/hb',
		text: '../vendor/text',
		lodash: '../vendor/lodash',
		'handlebars.runtime': '../node_modules/requirejs-handlebars/node_modules/handlebars/dist/handlebars.runtime.amd'
	},
	packages: [
		{
			name: 'handlebars',
			location: '../node_modules/requirejs-handlebars/node_modules/handlebars/dist/amd',
			main: './handlebars'
		}
	],
	config: {
		hb: {
			preProcess: function(done, options, data) {

				var parentRequire = options.parentRequire,
					language = options.config.getLanguage(options.config, options.pluginConfig),
					dictionaryPath = options.pluginConfig.dictionaries[language];

				if(options.config.isBuild) {

					var req = requirejs.nodeRequire,
						_ = req(parentRequire.toUrl('lodash')),
						dictionary = req(parentRequire.toUrl(dictionaryPath));

					done(_.template(data, dictionary));

				} else {

					parentRequire(['lodash', 'text!' + dictionaryPath], function(_, dictionary) {
						done(_.template(data, JSON.parse(dictionary)));
					});

				}
			},

			dictionaries: {
				nl: 'dictionary.nl.json',
				en: 'dictionary.en.json'
			}
		}
	},
	getLanguage: function(config, pluginConfig) {
		var language = config.isBuild ? config.language : document.location.hash.replace(/^#/, '');
		return language in pluginConfig.dictionaries ? language : 'en';
	}
});
