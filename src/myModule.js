define(['hb!./myTemplate.html'], function(precompiledTemplate) {

	var content = precompiledTemplate({
		name: 'John Doe'
	});

	console.log(content);

});
