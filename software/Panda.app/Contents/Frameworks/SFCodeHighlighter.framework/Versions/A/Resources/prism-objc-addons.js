Prism.languages.objectivec['number'] = /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i;
Prism.languages.objectivec['constant'] = /\b(?:nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/;
Prism.languages.objectivec['builtin'] = /\b(?:[A-Z]\S+)\b/;
Prism.languages.objectivec['string'] = {
    pattern: Prism.languages.objectivec['string'],
    greedy: true
};
