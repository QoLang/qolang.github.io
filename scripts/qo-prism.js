Prism.languages['qo'] = {
    'comment': /(\/\*[^\*\/]*\*\/)/s,
    'string': /(".*"|'.*')/,
	'keyword': /(func|elif|if|else|return|foreach|for|while|times)/,
    'number': /(\d+)/,
    'function': /([a-zA-Z0-9_]+)(?=\()/,
    'variable': /([\w_]+)/,
	'builtin': /(println|print|input|toInt|toStr|toBool|type|exit|mod|None)/,
    'boolean': /(True|False)/,
    'operator': /(\+|-|\*|\/|=|<|>|<=|>=|==|!=|as|in|&|%|&&|\|\|)/,
    'punctuation': /(\(|\)|,|\[|\]|;|:|{|})/,
};