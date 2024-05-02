const marked = require('marked');
const sanitizeHtmlLibrary = require('sanitize-html');
const TurndownService = require('turndown');


function sanitizeMarkdownContent (markdownContent) {
    var turndownService = new TurndownService()

    // convert markdown into html
    const html = marked.parse(markdownContent);

    console.log('html =>', html);

    // sanitize html
    const sanitizedHtml = sanitizeHtmlLibrary(html,{allowedTags:sanitizeHtmlLibrary.defaults.allowedTags});
    console.log('sanitized html =>', sanitizedHtml);

    //convert sanitize html back to markdown
    const sanitizedMarkdown =  turndownService.turndown(sanitizedHtml);

    console.log('back to markedown =<', sanitizedMarkdown);

    return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent;