/**
* Topic.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var marked = require('marked');
var highlight = require('highlight.js');

marked.setOptions({
    highlight: function(code, lang, callback) {
        var res;

        if (lang && highlight.getLanguage(lang) != null) res = highlight.highlight(lang, code).value;
        else res = highlight.highlightAuto(code).value;

        console.log(res);
        return res;
    },
    tables: false,
    breaks: true
});

module.exports = {

    attributes: {
        author: {
            model: 'user',
            required: true
        },
        type: {
            type: 'string',
            enum: ['post', 'poll', 'photo', 'comment', 'like'],
            defaultsTo: 'post'
        },

        textContent: 'string',
        imgSrc: 'string',
        pollOptions: {
            collection: 'pollOption',
            via: 'topic'
        },

        editDate: 'datetime',

        parent: {
            model: 'topic'
        },
        children: {
            collection: 'topic',
            via: 'parent'
        },

        getChildrenOfType: function(type) {
            type = type.toLowerCase();
            return this.children.filter(function(itm) {
                return itm.type.toLowerCase() === type;
            });
        }
    },

    beforeValidate: function(values, next) {
        if (values.textContent) values.textContent = marked(values.textContent);
        next();
    }
};

