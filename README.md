# requirejs-handlebars i18n Example

## Introduction

Example project to use the [requirejs-handlebars](https://github.com/webpro/requirejs-handlebars) plugin
with preprocessing to render translated texts in the templates before precompilation.

The trick is to use a template engine with a different syntax (different delimiters than `{{.}}`).

See [config.js](./config.js) for the example implementation.

## Installation

    git clone git@github.com:webpro/requirejs-handlebars-i18n-example.git
    cd requirejs-handlebars-i18n-example
    npm install

## Runtime

    /src/index.html
    /src/index.html#[en|nl]

## Build

     r.js -o build.js language=[en|nl]
