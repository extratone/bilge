Prism.languages.fountain = {
	'comment': [
    	/\n={1}([^<>=][^<>]+?)\n/,   // SYNOPSIS_PATTERN
    	/\n\[{2}([^<>]+?)\]{2}\n/,   // BRACKET_COMMENT_PATTERN
        /\n\/\*([^<>]+?)\*\/\n/      // BLOCK_COMMENT_PATTERN
	],

	'string': [
        /\n([^<>a-z\s\/\n][^<>:!\?\n]*[^<>\(!\?:,\n\.][ \t]?)\n{1}(?!\n)/, // CHARACTER_CUE_PATTERN
        /(\([^<>]*?\)[\s]?)\n/                                                              // PARENTHETICAL_PATTERN
    ],

	'number': [
        /(\#([0-9A-Za-z\.\)-]+)\#)/, // SCENE_NUMBER_PATTERN
	],

	'keyword': [
        /\n([\*_]*([^<>\na-z]*TO:|FADE TO BLACK\.|FADE OUT\.|CUT TO BLACK\.)[\*_]*)\n/, // TRANSITION_PATTERN
        /\n(\s*[\=\-\_]{3,8}\s*)\n{1}/,                                                 // PAGE_BREAK_PATTERN
        /^[A-Z|a-z| ]*:[ |\n]/mg,                                                       // TITLE_PAGE_PATTERN
        />[ ]*THE END[ ]*</,
    ],

	'function': [
    	/^(([iI][nN][tT]|[eE][xX][tT]|[^\w][eE][sS][tT]|\.|[iI]\.?\/[eE]\.?)([^\n]+))/mg, // SCENE_HEADER_PATTERN
	],

	'operator': [
        /^([A-Z*_]+[0-9A-Z (._\-')]*)(\^?)?(?:\n(?!\n+))([\s\S]+)/mg
    ]
};
