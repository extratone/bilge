var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/pagerank.js/lib/index.js
var require_lib = __commonJS({
  "node_modules/pagerank.js/lib/index.js"(exports, module2) {
    "use strict";
    function forOwn(object, callback) {
      if (typeof object === "object" && typeof callback === "function") {
        for (var key in object) {
          if (object.hasOwnProperty(key) === true) {
            if (callback(key, object[key]) === false) {
              break;
            }
          }
        }
      }
    }
    module2.exports = function() {
      var self = {
        count: 0,
        edges: {},
        nodes: {}
      };
      self.link = function(source, target, weight) {
        if (isFinite(weight) !== true || weight === null) {
          weight = 1;
        }
        weight = parseFloat(weight);
        if (self.nodes.hasOwnProperty(source) !== true) {
          self.count++;
          self.nodes[source] = {
            weight: 0,
            outbound: 0
          };
        }
        self.nodes[source].outbound += weight;
        if (self.nodes.hasOwnProperty(target) !== true) {
          self.count++;
          self.nodes[target] = {
            weight: 0,
            outbound: 0
          };
        }
        if (self.edges.hasOwnProperty(source) !== true) {
          self.edges[source] = {};
        }
        if (self.edges[source].hasOwnProperty(target) !== true) {
          self.edges[source][target] = 0;
        }
        self.edges[source][target] += weight;
      };
      self.rank = function(alpha, epsilon, callback) {
        var delta = 1, inverse = 1 / self.count;
        forOwn(self.edges, function(source) {
          if (self.nodes[source].outbound > 0) {
            forOwn(self.edges[source], function(target) {
              self.edges[source][target] /= self.nodes[source].outbound;
            });
          }
        });
        forOwn(self.nodes, function(key) {
          self.nodes[key].weight = inverse;
        });
        while (delta > epsilon) {
          var leak = 0, nodes = {};
          forOwn(self.nodes, function(key, value) {
            nodes[key] = value.weight;
            if (value.outbound === 0) {
              leak += value.weight;
            }
            self.nodes[key].weight = 0;
          });
          leak *= alpha;
          forOwn(self.nodes, function(source) {
            forOwn(self.edges[source], function(target, weight) {
              self.nodes[target].weight += alpha * nodes[source] * weight;
            });
            self.nodes[source].weight += (1 - alpha) * inverse + leak * inverse;
          });
          delta = 0;
          forOwn(self.nodes, function(key, value) {
            delta += Math.abs(value.weight - nodes[key]);
          });
        }
        forOwn(self.nodes, function(key) {
          return callback(key, self.nodes[key].weight);
        });
      };
      self.reset = function() {
        self.count = 0;
        self.edges = {};
        self.nodes = {};
      };
      return self;
    }();
  }
});

// src/main.ts
__export(exports, {
  default: () => SRPlugin
});
var import_obsidian8 = __toModule(require("obsidian"));
var graph = __toModule(require_lib());

// src/settings.ts
var import_obsidian2 = __toModule(require("obsidian"));

// src/lang/helpers.ts
var import_obsidian = __toModule(require("obsidian"));

// src/lang/locale/ar.ts
var ar_default = {};

// src/lang/locale/cz.ts
var cz_default = {};

// src/lang/locale/da.ts
var da_default = {};

// src/lang/locale/de.ts
var de_default = {};

// src/lang/locale/en.ts
var en_default = {
  DECKS: "Decks",
  DUE_CARDS: "Due Cards",
  NEW_CARDS: "New Cards",
  TOTAL_CARDS: "Total Cards",
  EDIT_LATER: "Edit Later",
  RESET_CARD_PROGRESS: "Reset card's progress",
  HARD: "Hard",
  GOOD: "Good",
  EASY: "Easy",
  SHOW_ANSWER: "Show Answer",
  CARD_PROGRESS_RESET: "Card's progress has been reset.",
  OPEN_NOTE_FOR_REVIEW: "Open a note for review",
  REVIEW_CARDS: "Review flashcards",
  REVIEW_EASY_FILE_MENU: "Review: Easy",
  REVIEW_GOOD_FILE_MENU: "Review: Good",
  REVIEW_HARD_FILE_MENU: "Review: Hard",
  REVIEW_NOTE_EASY_CMD: "Review note as easy",
  REVIEW_NOTE_GOOD_CMD: "Review note as good",
  REVIEW_NOTE_HARD_CMD: "Review note as hard",
  REVIEW_CARDS_IN_NOTE: "Review flashcards in this note",
  REVIEW_ALL_CARDS: "Review flashcards from all notes",
  VIEW_STATS: "View statistics",
  STATUS_BAR: "Review: ${dueNotesCount} notes(s), ${dueFlashcardsCount} card(s) due",
  SYNC_TIME_TAKEN: "Sync took ${t}ms",
  NOTE_IN_IGNORED_FOLDER: "Note is saved under ignored folder (check settings).",
  PLEASE_TAG_NOTE: "Please tag the note appropriately for reviewing (in settings).",
  RESPONSE_RECEIVED: "Response received.",
  NO_DECK_EXISTS: "No deck exists for ${deckName}",
  ALL_CAUGHT_UP: "You're all caught up now :D.",
  DAYS_STR_IVL: "${interval} days",
  MONTHS_STR_IVL: "${interval} months",
  YEARS_STR_IVL: "${interval} years",
  SETTINGS_HEADER: "Spaced Repetition Plugin - Settings",
  CHECK_WIKI: 'For more information, check the <a href="${wiki_url}">wiki</a>.',
  FOLDERS_TO_IGNORE: "Folders to ignore",
  FOLDERS_TO_IGNORE_DESC: "Enter folder paths separated by newlines i.e. Templates Meta/Scripts",
  FLASHCARDS: "Flashcards",
  FLASHCARD_TAGS: "Flashcard tags",
  FLASHCARD_TAGS_DESC: "Enter tags separated by spaces or newlines i.e. #flashcards #deck2 #deck3.",
  CONVERT_FOLDERS_TO_DECKS: "Convert folders to decks and subdecks?",
  CONVERT_FOLDERS_TO_DECKS_DESC: "This is an alternative to the Flashcard tags option above.",
  INLINE_SCHEDULING_COMMENTS: "Save scheduling comment on the same line as the flashcard's last line?",
  INLINE_SCHEDULING_COMMENTS_DESC: "Turning this on will make the HTML comments not break list formatting.",
  BURY_SIBLINGS_TILL_NEXT_DAY: "Bury sibling cards until the next day?",
  BURY_SIBLINGS_TILL_NEXT_DAY_DESC: "Siblings are cards generated from the same card text i.e. cloze deletions",
  SHOW_CARD_CONTEXT: "Show context in cards?",
  SHOW_CARD_CONTEXT_DESC: "i.e. Title > Heading 1 > Subheading > ... > Subheading",
  CARD_MODAL_HEIGHT_PERCENT: "Flashcard Height Percentage",
  CARD_MODAL_SIZE_PERCENT_DESC: "Should be set to 100% on mobile or if you have very large images",
  RESET_DEFAULT: "Reset to default",
  CARD_MODAL_WIDTH_PERCENT: "Flashcard Width Percentage",
  FILENAME_OR_OPEN_FILE: "Show file name instead of 'Open file' in flashcard review?",
  RANDOMIZE_CARD_ORDER: "Randomize card order during review?",
  DISABLE_CLOZE_CARDS: "Disable cloze cards?",
  CONVERT_HIGHLIGHTS_TO_CLOZES: "Convert ==hightlights== to clozes?",
  CONVERT_BOLD_TEXT_TO_CLOZES: "Convert **bolded text** to clozes?",
  INLINE_CARDS_SEPARATOR: "Separator for inline flashcards",
  FIX_SEPARATORS_MANUALLY_WARNING: "Note that after changing this you have to manually edit any flashcards you already have.",
  INLINE_REVERSED_CARDS_SEPARATOR: "Separator for inline reversed flashcards",
  MULTILINE_CARDS_SEPARATOR: "Separator for multiline flashcards",
  MULTILINE_REVERSED_CARDS_SEPARATOR: "Separator for multiline reversed flashcards",
  NOTES: "Notes",
  TAGS_TO_REVIEW: "Tags to review",
  TAGS_TO_REVIEW_DESC: "Enter tags separated by spaces or newlines i.e. #review #tag2 #tag3.",
  OPEN_RANDOM_NOTE: "Open a random note for review",
  OPEN_RANDOM_NOTE_DESC: "When you turn this off, notes are ordered by importance (PageRank).",
  AUTO_NEXT_NOTE: "Open next note automatically after a review",
  DISABLE_FILE_MENU_REVIEW_OPTIONS: "Disable review options in the file menu i.e. Review: Easy Good Hard",
  DISABLE_FILE_MENU_REVIEW_OPTIONS_DESC: "After disabling, you can review using the command hotkeys. Reload Obsidian after changing this.",
  MAX_N_DAYS_REVIEW_QUEUE: "Maximum number of days to display on right panel",
  MIN_ONE_DAY: "The number of days must be at least 1.",
  VALID_NUMBER_WARNING: "Please provide a valid number.",
  ALGORITHM: "Algorithm",
  CHECK_ALGORITHM_WIKI: 'For more information, check the <a href="${algo_url}">algorithm implementation</a>.',
  BASE_EASE: "Base ease",
  BASE_EASE_DESC: "minimum = 130, preferrably approximately 250.",
  BASE_EASE_MIN_WARNING: "The base ease must be at least 130.",
  LAPSE_INTERVAL_CHANGE: "Interval change when you review a flashcard/note as hard",
  LAPSE_INTERVAL_CHANGE_DESC: "newInterval = oldInterval * intervalChange / 100.",
  EASY_BONUS: "Easy Bonus",
  EASY_BONUS_DESC: "The easy bonus allows you to set the difference in intervals between answering Good and Easy on a flashcard/note (minimum = 100%).",
  EASY_BONUS_MIN_WARNING: "The easy bonus must be at least 100.",
  MAX_INTERVAL: "Maximum Interval",
  MAX_INTERVAL_DESC: "Allows you to place an upper limit on the interval (default = 100 years).",
  MAX_INTERVAL_MIN_WARNING: "The maximum interval must be at least 1 day.",
  MAX_LINK_CONTRIB: "Maximum link contribution",
  MAX_LINK_CONTRIB_DESC: "Maximum contribution of the weighted ease of linked notes to the initial ease.",
  LOGGING: "Logging",
  DISPLAY_DEBUG_INFO: "Display debugging information on the developer console?",
  NOTES_REVIEW_QUEUE: "Notes Review Queue",
  CLOSE: "Close",
  NEW: "New",
  YESTERDAY: "Yesterday",
  TODAY: "Today",
  TOMORROW: "Tomorrow",
  STATS_TITLE: "Statistics",
  OBSIDIAN_CHARTS_REQUIRED: "Note that this requires the Obsidian Charts plugin to work",
  FORECAST: "Forecast",
  FORECAST_DESC: "The number of cards due in the future",
  SCHEDULED: "Scheduled",
  DAYS: "Days",
  NUMBER_OF_CARDS: "Number of cards",
  REVIEWS_PER_DAY: "Average: ${avg} reviews/day",
  INTERVALS: "Intervals",
  INTERVALS_DESC: "Delays until reviews are shown again",
  COUNT: "Count",
  INTERVALS_SUMMARY: "Average interval: ${avg}, Longest interval: ${longest}",
  EASES: "Eases",
  EASES_SUMMARY: "Average ease: ${avgEase}",
  CARD_TYPES: "Card Types",
  CARD_TYPES_DESC: "This includes buried cards as well, if any",
  CARD_TYPES_SUMMARY: "Total cards: ${totalCardsCount}"
};

// src/lang/locale/en-gb.ts
var en_gb_default = {};

// src/lang/locale/es.ts
var es_default = {};

// src/lang/locale/fr.ts
var fr_default = {};

// src/lang/locale/hi.ts
var hi_default = {};

// src/lang/locale/id.ts
var id_default = {};

// src/lang/locale/it.ts
var it_default = {};

// src/lang/locale/ja.ts
var ja_default = {};

// src/lang/locale/ko.ts
var ko_default = {};

// src/lang/locale/nl.ts
var nl_default = {};

// src/lang/locale/no.ts
var no_default = {};

// src/lang/locale/pl.ts
var pl_default = {};

// src/lang/locale/pt.ts
var pt_default = {};

// src/lang/locale/pt-br.ts
var pt_br_default = {};

// src/lang/locale/ro.ts
var ro_default = {};

// src/lang/locale/ru.ts
var ru_default = {};

// src/lang/locale/tr.ts
var tr_default = {};

// src/lang/locale/zh-cn.ts
var zh_cn_default = {};

// src/lang/locale/zh-tw.ts
var zh_tw_default = {};

// src/lang/helpers.ts
var localeMap = {
  ar: ar_default,
  cs: cz_default,
  da: da_default,
  de: de_default,
  en: en_default,
  "en-gb": en_gb_default,
  es: es_default,
  fr: fr_default,
  hi: hi_default,
  id: id_default,
  it: it_default,
  ja: ja_default,
  ko: ko_default,
  nl: nl_default,
  nn: no_default,
  pl: pl_default,
  pt: pt_default,
  "pt-br": pt_br_default,
  ro: ro_default,
  ru: ru_default,
  tr: tr_default,
  "zh-cn": zh_cn_default,
  "zh-tw": zh_tw_default
};
var locale = localeMap[import_obsidian.moment.locale()];
function t(str) {
  if (!locale) {
    console.error("Error: SRS locale not found", import_obsidian.moment.locale());
  }
  return locale && locale[str] || en_default[str];
}

// src/settings.ts
var DEFAULT_SETTINGS = {
  flashcardTags: ["#flashcards"],
  convertFoldersToDecks: false,
  cardCommentOnSameLine: false,
  burySiblingCards: false,
  showContextInCards: true,
  flashcardHeightPercentage: import_obsidian2.Platform.isMobile ? 100 : 80,
  flashcardWidthPercentage: import_obsidian2.Platform.isMobile ? 100 : 40,
  showFileNameInFileLink: false,
  randomizeCardOrder: true,
  convertHighlightsToClozes: true,
  convertBoldTextToClozes: false,
  singlelineCardSeparator: "::",
  singlelineReversedCardSeparator: ":::",
  multilineCardSeparator: "?",
  multilineReversedCardSeparator: "??",
  tagsToReview: ["#review"],
  noteFoldersToIgnore: [],
  openRandomNote: false,
  autoNextNote: false,
  disableFileMenuReviewOptions: false,
  maxNDaysNotesReviewQueue: 365,
  baseEase: 250,
  lapsesIntervalChange: 0.5,
  easyBonus: 1.3,
  maximumInterval: 36525,
  maxLinkFactor: 1,
  showDebugMessages: false
};
var applyDebounceTimer = 0;
function applySettingsUpdate(callback) {
  clearTimeout(applyDebounceTimer);
  applyDebounceTimer = window.setTimeout(callback, 512);
}
var SRSettingTab = class extends import_obsidian2.PluginSettingTab {
  plugin;
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createDiv().innerHTML = "<h2>" + t("SETTINGS_HEADER") + "</h2>";
    containerEl.createDiv().innerHTML = t("CHECK_WIKI").interpolate({
      wiki_url: "https://github.com/st3v3nmw/obsidian-spaced-repetition/wiki"
    });
    new import_obsidian2.Setting(containerEl).setName(t("FOLDERS_TO_IGNORE")).setDesc(t("FOLDERS_TO_IGNORE_DESC")).addTextArea((text) => text.setValue(this.plugin.data.settings.noteFoldersToIgnore.join("\n")).onChange((value) => {
      applySettingsUpdate(async () => {
        this.plugin.data.settings.noteFoldersToIgnore = value.split(/\n+/).map((v) => v.trim()).filter((v) => v);
        await this.plugin.savePluginData();
      });
    }));
    containerEl.createDiv().innerHTML = "<h3>" + t("FLASHCARDS") + "</h3>";
    new import_obsidian2.Setting(containerEl).setName(t("FLASHCARD_TAGS")).setDesc(t("FLASHCARD_TAGS_DESC")).addTextArea((text) => text.setValue(this.plugin.data.settings.flashcardTags.join(" ")).onChange((value) => {
      applySettingsUpdate(async () => {
        this.plugin.data.settings.flashcardTags = value.split(/\s+/);
        await this.plugin.savePluginData();
      });
    }));
    new import_obsidian2.Setting(containerEl).setName(t("CONVERT_FOLDERS_TO_DECKS")).setDesc(t("CONVERT_FOLDERS_TO_DECKS_DESC")).addToggle((toggle) => toggle.setValue(this.plugin.data.settings.convertFoldersToDecks).onChange(async (value) => {
      this.plugin.data.settings.convertFoldersToDecks = value;
      await this.plugin.savePluginData();
    }));
    new import_obsidian2.Setting(containerEl).setName(t("INLINE_SCHEDULING_COMMENTS")).setDesc(t("INLINE_SCHEDULING_COMMENTS_DESC")).addToggle((toggle) => toggle.setValue(this.plugin.data.settings.cardCommentOnSameLine).onChange(async (value) => {
      this.plugin.data.settings.cardCommentOnSameLine = value;
      await this.plugin.savePluginData();
    }));
    new import_obsidian2.Setting(containerEl).setName(t("BURY_SIBLINGS_TILL_NEXT_DAY")).setDesc(t("BURY_SIBLINGS_TILL_NEXT_DAY_DESC")).addToggle((toggle) => toggle.setValue(this.plugin.data.settings.burySiblingCards).onChange(async (value) => {
      this.plugin.data.settings.burySiblingCards = value;
      await this.plugin.savePluginData();
    }));
    new import_obsidian2.Setting(containerEl).setName(t("SHOW_CARD_CONTEXT")).setDesc(t("SHOW_CARD_CONTEXT_DESC")).addToggle((toggle) => toggle.setValue(this.plugin.data.settings.showContextInCards).onChange(async (value) => {
      this.plugin.data.settings.showContextInCards = value;
      await this.plugin.savePluginData();
    }));
    new import_obsidian2.Setting(containerEl).setName(t("CARD_MODAL_HEIGHT_PERCENT")).setDesc(t("CARD_MODAL_SIZE_PERCENT_DESC")).addSlider((slider) => slider.setLimits(10, 100, 5).setValue(this.plugin.data.settings.flashcardHeightPercentage).setDynamicTooltip().onChange(async (value) => {
      this.plugin.data.settings.flashcardHeightPercentage = value;
      await this.plugin.savePluginData();
    })).addExtraButton((button) => {
      button.setIcon("reset").setTooltip(t("RESET_DEFAULT")).onClick(async () => {
        this.plugin.data.settings.flashcardHeightPercentage = DEFAULT_SETTINGS.flashcardHeightPercentage;
        await this.plugin.savePluginData();
        this.display();
      });
    });
    new import_obsidian2.Setting(containerEl).setName(t("CARD_MODAL_WIDTH_PERCENT")).setDesc(t("CARD_MODAL_SIZE_PERCENT_DESC")).addSlider((slider) => slider.setLimits(10, 100, 5).setValue(this.plugin.data.settings.flashcardWidthPercentage).setDynamicTooltip().onChange(async (value) => {
      this.plugin.data.settings.flashcardWidthPercentage = value;
      await this.plugin.savePluginData();
    })).addExtraButton((button) => {
      button.setIcon("reset").setTooltip(t("RESET_DEFAULT")).onClick(async () => {
        this.plugin.data.settings.flashcardWidthPercentage = DEFAULT_SETTINGS.flashcardWidthPercentage;
        await this.plugin.savePluginData();
        this.display();
      });
    });
    new import_obsidian2.Setting(containerEl).setName(t("FILENAME_OR_OPEN_FILE")).addToggle((toggle) => toggle.setValue(this.plugin.data.settings.showFileNameInFileLink).onChange(async (value) => {
      this.plugin.data.settings.showFileNameInFileLink = value;
      await this.plugin.savePluginData();
    }));
    new import_obsidian2.Setting(containerEl).setName(t("RANDOMIZE_CARD_ORDER")).addToggle((toggle) => toggle.setValue(this.plugin.data.settings.randomizeCardOrder).onChange(async (value) => {
      this.plugin.data.settings.randomizeCardOrder = value;
      await this.plugin.savePluginData();
    }));
    new import_obsidian2.Setting(containerEl).setName(t("CONVERT_HIGHLIGHTS_TO_CLOZES")).addToggle((toggle) => toggle.setValue(this.plugin.data.settings.convertHighlightsToClozes).onChange(async (value) => {
      this.plugin.data.settings.convertHighlightsToClozes = value;
      await this.plugin.savePluginData();
    }));
    new import_obsidian2.Setting(containerEl).setName(t("CONVERT_BOLD_TEXT_TO_CLOZES")).addToggle((toggle) => toggle.setValue(this.plugin.data.settings.convertBoldTextToClozes).onChange(async (value) => {
      this.plugin.data.settings.convertBoldTextToClozes = value;
      await this.plugin.savePluginData();
    }));
    new import_obsidian2.Setting(containerEl).setName(t("INLINE_CARDS_SEPARATOR")).setDesc(t("FIX_SEPARATORS_MANUALLY_WARNING")).addText((text) => text.setValue(this.plugin.data.settings.singlelineCardSeparator).onChange((value) => {
      applySettingsUpdate(async () => {
        this.plugin.data.settings.singlelineCardSeparator = value;
        await this.plugin.savePluginData();
      });
    })).addExtraButton((button) => {
      button.setIcon("reset").setTooltip(t("RESET_DEFAULT")).onClick(async () => {
        this.plugin.data.settings.singlelineCardSeparator = DEFAULT_SETTINGS.singlelineCardSeparator;
        await this.plugin.savePluginData();
        this.display();
      });
    });
    new import_obsidian2.Setting(containerEl).setName(t("INLINE_REVERSED_CARDS_SEPARATOR")).setDesc(t("FIX_SEPARATORS_MANUALLY_WARNING")).addText((text) => text.setValue(this.plugin.data.settings.singlelineReversedCardSeparator).onChange((value) => {
      applySettingsUpdate(async () => {
        this.plugin.data.settings.singlelineReversedCardSeparator = value;
        await this.plugin.savePluginData();
      });
    })).addExtraButton((button) => {
      button.setIcon("reset").setTooltip(t("RESET_DEFAULT")).onClick(async () => {
        this.plugin.data.settings.singlelineReversedCardSeparator = DEFAULT_SETTINGS.singlelineReversedCardSeparator;
        await this.plugin.savePluginData();
        this.display();
      });
    });
    new import_obsidian2.Setting(containerEl).setName(t("MULTILINE_CARDS_SEPARATOR")).setDesc(t("FIX_SEPARATORS_MANUALLY_WARNING")).addText((text) => text.setValue(this.plugin.data.settings.multilineCardSeparator).onChange((value) => {
      applySettingsUpdate(async () => {
        this.plugin.data.settings.multilineCardSeparator = value;
        await this.plugin.savePluginData();
      });
    })).addExtraButton((button) => {
      button.setIcon("reset").setTooltip(t("RESET_DEFAULT")).onClick(async () => {
        this.plugin.data.settings.multilineCardSeparator = DEFAULT_SETTINGS.multilineCardSeparator;
        await this.plugin.savePluginData();
        this.display();
      });
    });
    new import_obsidian2.Setting(containerEl).setName(t("MULTILINE_REVERSED_CARDS_SEPARATOR")).setDesc(t("FIX_SEPARATORS_MANUALLY_WARNING")).addText((text) => text.setValue(this.plugin.data.settings.multilineReversedCardSeparator).onChange((value) => {
      applySettingsUpdate(async () => {
        this.plugin.data.settings.multilineReversedCardSeparator = value;
        await this.plugin.savePluginData();
      });
    })).addExtraButton((button) => {
      button.setIcon("reset").setTooltip(t("RESET_DEFAULT")).onClick(async () => {
        this.plugin.data.settings.multilineReversedCardSeparator = DEFAULT_SETTINGS.multilineReversedCardSeparator;
        await this.plugin.savePluginData();
        this.display();
      });
    });
    containerEl.createDiv().innerHTML = "<h3>" + t("NOTES") + "</h3>";
    new import_obsidian2.Setting(containerEl).setName(t("TAGS_TO_REVIEW")).setDesc(t("TAGS_TO_REVIEW_DESC")).addTextArea((text) => text.setValue(this.plugin.data.settings.tagsToReview.join(" ")).onChange((value) => {
      applySettingsUpdate(async () => {
        this.plugin.data.settings.tagsToReview = value.split(/\s+/);
        await this.plugin.savePluginData();
      });
    }));
    new import_obsidian2.Setting(containerEl).setName(t("OPEN_RANDOM_NOTE")).setDesc(t("OPEN_RANDOM_NOTE_DESC")).addToggle((toggle) => toggle.setValue(this.plugin.data.settings.openRandomNote).onChange(async (value) => {
      this.plugin.data.settings.openRandomNote = value;
      await this.plugin.savePluginData();
    }));
    new import_obsidian2.Setting(containerEl).setName(t("AUTO_NEXT_NOTE")).addToggle((toggle) => toggle.setValue(this.plugin.data.settings.autoNextNote).onChange(async (value) => {
      this.plugin.data.settings.autoNextNote = value;
      await this.plugin.savePluginData();
    }));
    new import_obsidian2.Setting(containerEl).setName(t("DISABLE_FILE_MENU_REVIEW_OPTIONS")).setDesc(t("DISABLE_FILE_MENU_REVIEW_OPTIONS_DESC")).addToggle((toggle) => toggle.setValue(this.plugin.data.settings.disableFileMenuReviewOptions).onChange(async (value) => {
      this.plugin.data.settings.disableFileMenuReviewOptions = value;
      await this.plugin.savePluginData();
    }));
    new import_obsidian2.Setting(containerEl).setName(t("MAX_N_DAYS_REVIEW_QUEUE")).addText((text) => text.setValue(this.plugin.data.settings.maxNDaysNotesReviewQueue.toString()).onChange((value) => {
      applySettingsUpdate(async () => {
        const numValue = Number.parseInt(value);
        if (!isNaN(numValue)) {
          if (numValue < 1) {
            new import_obsidian2.Notice(t("MIN_ONE_DAY"));
            text.setValue(this.plugin.data.settings.maxNDaysNotesReviewQueue.toString());
            return;
          }
          this.plugin.data.settings.maxNDaysNotesReviewQueue = numValue;
          await this.plugin.savePluginData();
        } else {
          new import_obsidian2.Notice(t("VALID_NUMBER_WARNING"));
        }
      });
    })).addExtraButton((button) => {
      button.setIcon("reset").setTooltip(t("RESET_DEFAULT")).onClick(async () => {
        this.plugin.data.settings.maxNDaysNotesReviewQueue = DEFAULT_SETTINGS.maxNDaysNotesReviewQueue;
        await this.plugin.savePluginData();
        this.display();
      });
    });
    containerEl.createDiv().innerHTML = "<h3>" + t("ALGORITHM") + "</h3>";
    containerEl.createDiv().innerHTML = t("CHECK_ALGORITHM_WIKI").interpolate({
      algo_url: "https://github.com/st3v3nmw/obsidian-spaced-repetition/wiki/Spaced-Repetition-Algorithm"
    });
    new import_obsidian2.Setting(containerEl).setName(t("BASE_EASE")).setDesc(t("BASE_EASE_DESC")).addText((text) => text.setValue(this.plugin.data.settings.baseEase.toString()).onChange((value) => {
      applySettingsUpdate(async () => {
        const numValue = Number.parseInt(value);
        if (!isNaN(numValue)) {
          if (numValue < 130) {
            new import_obsidian2.Notice(t("BASE_EASE_MIN_WARNING"));
            text.setValue(this.plugin.data.settings.baseEase.toString());
            return;
          }
          this.plugin.data.settings.baseEase = numValue;
          await this.plugin.savePluginData();
        } else {
          new import_obsidian2.Notice(t("VALID_NUMBER_WARNING"));
        }
      });
    })).addExtraButton((button) => {
      button.setIcon("reset").setTooltip(t("RESET_DEFAULT")).onClick(async () => {
        this.plugin.data.settings.baseEase = DEFAULT_SETTINGS.baseEase;
        await this.plugin.savePluginData();
        this.display();
      });
    });
    new import_obsidian2.Setting(containerEl).setName(t("LAPSE_INTERVAL_CHANGE")).setDesc(t("LAPSE_INTERVAL_CHANGE_DESC")).addSlider((slider) => slider.setLimits(1, 99, 1).setValue(this.plugin.data.settings.lapsesIntervalChange * 100).setDynamicTooltip().onChange(async (value) => {
      this.plugin.data.settings.lapsesIntervalChange = value / 100;
      await this.plugin.savePluginData();
    })).addExtraButton((button) => {
      button.setIcon("reset").setTooltip(t("RESET_DEFAULT")).onClick(async () => {
        this.plugin.data.settings.lapsesIntervalChange = DEFAULT_SETTINGS.lapsesIntervalChange;
        await this.plugin.savePluginData();
        this.display();
      });
    });
    new import_obsidian2.Setting(containerEl).setName(t("EASY_BONUS")).setDesc(t("EASY_BONUS_DESC")).addText((text) => text.setValue((this.plugin.data.settings.easyBonus * 100).toString()).onChange((value) => {
      applySettingsUpdate(async () => {
        const numValue = Number.parseInt(value) / 100;
        if (!isNaN(numValue)) {
          if (numValue < 1) {
            new import_obsidian2.Notice(t("EASY_BONUS_MIN_WARNING"));
            text.setValue((this.plugin.data.settings.easyBonus * 100).toString());
            return;
          }
          this.plugin.data.settings.easyBonus = numValue;
          await this.plugin.savePluginData();
        } else {
          new import_obsidian2.Notice(t("VALID_NUMBER_WARNING"));
        }
      });
    })).addExtraButton((button) => {
      button.setIcon("reset").setTooltip(t("RESET_DEFAULT")).onClick(async () => {
        this.plugin.data.settings.easyBonus = DEFAULT_SETTINGS.easyBonus;
        await this.plugin.savePluginData();
        this.display();
      });
    });
    new import_obsidian2.Setting(containerEl).setName(t("MAX_INTERVAL")).setDesc(t("MAX_INTERVAL_DESC")).addText((text) => text.setValue(this.plugin.data.settings.maximumInterval.toString()).onChange((value) => {
      applySettingsUpdate(async () => {
        const numValue = Number.parseInt(value);
        if (!isNaN(numValue)) {
          if (numValue < 1) {
            new import_obsidian2.Notice(t("MAX_INTERVAL_MIN_WARNING"));
            text.setValue(this.plugin.data.settings.maximumInterval.toString());
            return;
          }
          this.plugin.data.settings.maximumInterval = numValue;
          await this.plugin.savePluginData();
        } else {
          new import_obsidian2.Notice(t("VALID_NUMBER_WARNING"));
        }
      });
    })).addExtraButton((button) => {
      button.setIcon("reset").setTooltip(t("RESET_DEFAULT")).onClick(async () => {
        this.plugin.data.settings.maximumInterval = DEFAULT_SETTINGS.maximumInterval;
        await this.plugin.savePluginData();
        this.display();
      });
    });
    new import_obsidian2.Setting(containerEl).setName(t("MAX_LINK_CONTRIB")).setDesc(t("MAX_LINK_CONTRIB_DESC")).addSlider((slider) => slider.setLimits(0, 100, 1).setValue(this.plugin.data.settings.maxLinkFactor * 100).setDynamicTooltip().onChange(async (value) => {
      this.plugin.data.settings.maxLinkFactor = value / 100;
      await this.plugin.savePluginData();
    })).addExtraButton((button) => {
      button.setIcon("reset").setTooltip(t("RESET_DEFAULT")).onClick(async () => {
        this.plugin.data.settings.maxLinkFactor = DEFAULT_SETTINGS.maxLinkFactor;
        await this.plugin.savePluginData();
        this.display();
      });
    });
    containerEl.createDiv().innerHTML = "<h3>" + t("LOGGING") + "</h3>";
    new import_obsidian2.Setting(containerEl).setName(t("DISPLAY_DEBUG_INFO")).addToggle((toggle) => toggle.setValue(this.plugin.data.settings.showDebugMessages).onChange(async (value) => {
      this.plugin.data.settings.showDebugMessages = value;
      await this.plugin.savePluginData();
    }));
  }
};

// src/flashcard-modal.ts
var import_obsidian3 = __toModule(require("obsidian"));

// src/scheduling.ts
var ReviewResponse;
(function(ReviewResponse2) {
  ReviewResponse2[ReviewResponse2["Easy"] = 0] = "Easy";
  ReviewResponse2[ReviewResponse2["Good"] = 1] = "Good";
  ReviewResponse2[ReviewResponse2["Hard"] = 2] = "Hard";
  ReviewResponse2[ReviewResponse2["Reset"] = 3] = "Reset";
})(ReviewResponse || (ReviewResponse = {}));
function schedule(response, interval, ease, delayBeforeReview, settingsObj, dueDates) {
  delayBeforeReview = Math.max(0, Math.floor(delayBeforeReview / (24 * 3600 * 1e3)));
  if (response === 0) {
    ease += 20;
    interval = (interval + delayBeforeReview) * ease / 100;
    interval *= settingsObj.easyBonus;
  } else if (response === 1) {
    interval = (interval + delayBeforeReview / 2) * ease / 100;
  } else if (response === 2) {
    ease = Math.max(130, ease - 20);
    interval = Math.max(1, (interval + delayBeforeReview / 4) * settingsObj.lapsesIntervalChange);
  }
  if (dueDates !== void 0) {
    interval = Math.round(interval);
    if (!Object.prototype.hasOwnProperty.call(dueDates, interval)) {
      dueDates[interval] = 0;
    }
    let fuzzRange;
    if (interval <= 4) {
      fuzzRange = [interval, interval];
    } else {
      let fuzz;
      if (interval < 7)
        fuzz = 1;
      else if (interval < 30)
        fuzz = Math.max(2, Math.floor(interval * 0.15));
      else
        fuzz = Math.max(4, Math.floor(interval * 0.05));
      fuzzRange = [interval - fuzz, interval + fuzz];
    }
    for (let ivl = fuzzRange[0]; ivl <= fuzzRange[1]; ivl++) {
      if (!Object.prototype.hasOwnProperty.call(dueDates, ivl)) {
        dueDates[ivl] = 0;
      }
      if (dueDates[ivl] < dueDates[interval]) {
        interval = ivl;
      }
    }
    dueDates[interval]++;
  }
  interval = Math.min(interval, settingsObj.maximumInterval);
  return { interval: Math.round(interval * 10) / 10, ease };
}
function textInterval(interval, isMobile) {
  const m = Math.round(interval / 3) / 10, y = Math.round(interval / 36.5) / 10;
  if (isMobile) {
    if (interval < 30)
      return `${interval}d`;
    else if (interval < 365)
      return `${m}m`;
    else
      return `${y}y`;
  } else {
    if (interval < 30) {
      return t("DAYS_STR_IVL").interpolate({ interval });
    } else if (interval < 365) {
      return t("MONTHS_STR_IVL").interpolate({ interval: m });
    } else {
      return t("YEARS_STR_IVL").interpolate({ interval: y });
    }
  }
}

// src/types.ts
var CardType;
(function(CardType2) {
  CardType2[CardType2["SingleLineBasic"] = 0] = "SingleLineBasic";
  CardType2[CardType2["SingleLineReversed"] = 1] = "SingleLineReversed";
  CardType2[CardType2["MultiLineBasic"] = 2] = "MultiLineBasic";
  CardType2[CardType2["MultiLineReversed"] = 3] = "MultiLineReversed";
  CardType2[CardType2["Cloze"] = 4] = "Cloze";
})(CardType || (CardType = {}));

// src/constants.ts
var SCHEDULING_INFO_REGEX = /^---\n((?:.*\n)*)sr-due: (.+)\nsr-interval: (\d+)\nsr-ease: (\d+)\n((?:.*\n)*)---/;
var YAML_FRONT_MATTER_REGEX = /^---\n((?:.*\n)*?)---/;
var MULTI_SCHEDULING_EXTRACTOR = /!([\d-]+),(\d+),(\d+)/gm;
var LEGACY_SCHEDULING_EXTRACTOR = /<!--SR:([\d-]+),(\d+),(\d+)-->/gm;
var OBSIDIAN_CHARTS_ID = "obsidian-charts";
var COLLAPSE_ICON = '<svg viewBox="0 0 100 100" width="8" height="8" class="right-triangle"><path fill="currentColor" stroke="currentColor" d="M94.9,20.8c-1.4-2.5-4.1-4.1-7.1-4.1H12.2c-3,0-5.7,1.6-7.1,4.1c-1.3,2.4-1.2,5.2,0.2,7.6L43.1,88c1.5,2.3,4,3.7,6.9,3.7 s5.4-1.4,6.9-3.7l37.8-59.6C96.1,26,96.2,23.2,94.9,20.8L94.9,20.8z"></path></svg>';

// src/utils.ts
var getKeysPreserveType = Object.keys;
var escapeRegexString = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
function cyrb53(str, seed = 0) {
  let h1 = 3735928559 ^ seed, h2 = 1103547991 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507) ^ Math.imul(h2 ^ h2 >>> 13, 3266489909);
  h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507) ^ Math.imul(h1 ^ h1 >>> 13, 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(16);
}
function removeLegacyKeys(currentData, defaultData) {
  for (const key of Object.keys(currentData)) {
    if (!Object.prototype.hasOwnProperty.call(defaultData, key)) {
      delete currentData[key];
    }
  }
  return currentData;
}

// src/flashcard-modal.ts
var FlashcardModalMode;
(function(FlashcardModalMode2) {
  FlashcardModalMode2[FlashcardModalMode2["DecksList"] = 0] = "DecksList";
  FlashcardModalMode2[FlashcardModalMode2["Front"] = 1] = "Front";
  FlashcardModalMode2[FlashcardModalMode2["Back"] = 2] = "Back";
  FlashcardModalMode2[FlashcardModalMode2["Closed"] = 3] = "Closed";
})(FlashcardModalMode || (FlashcardModalMode = {}));
var FlashcardModal = class extends import_obsidian3.Modal {
  plugin;
  answerBtn;
  flashcardView;
  hardBtn;
  goodBtn;
  easyBtn;
  responseDiv;
  fileLinkView;
  resetLinkView;
  contextView;
  currentCard;
  currentCardIdx;
  currentDeck;
  checkDeck;
  mode;
  constructor(app, plugin) {
    super(app);
    this.plugin = plugin;
    this.titleEl.setText(t("DECKS"));
    if (import_obsidian3.Platform.isMobile) {
      this.contentEl.style.display = "block";
    }
    this.modalEl.style.height = this.plugin.data.settings.flashcardHeightPercentage + "%";
    this.modalEl.style.width = this.plugin.data.settings.flashcardWidthPercentage + "%";
    this.contentEl.style.position = "relative";
    this.contentEl.style.height = "92%";
    this.contentEl.addClass("sr-modal-content");
    document.body.onkeypress = (e) => {
      if (this.mode !== 0) {
        if (this.mode !== 3 && e.code === "KeyS") {
          this.currentDeck.deleteFlashcardAtIndex(this.currentCardIdx, this.currentCard.isDue);
          this.burySiblingCards(false);
          this.currentDeck.nextCard(this);
        } else if (this.mode === 1 && (e.code === "Space" || e.code === "Enter")) {
          this.showAnswer();
        } else if (this.mode === 2) {
          if (e.code === "Numpad1" || e.code === "Digit1") {
            this.processReview(ReviewResponse.Hard);
          } else if (e.code === "Numpad2" || e.code === "Digit2" || e.code === "Space") {
            this.processReview(ReviewResponse.Good);
          } else if (e.code === "Numpad3" || e.code === "Digit3") {
            this.processReview(ReviewResponse.Easy);
          } else if (e.code === "Numpad0" || e.code === "Digit0") {
            this.processReview(ReviewResponse.Reset);
          }
        }
      }
    };
  }
  onOpen() {
    this.decksList();
  }
  onClose() {
    this.mode = 3;
  }
  decksList() {
    this.mode = 0;
    this.titleEl.setText(t("DECKS"));
    this.titleEl.innerHTML += '<p style="margin:0px;line-height:12px;"><span style="background-color:#4caf50;color:#ffffff;" aria-label="' + t("DUE_CARDS") + '" class="tag-pane-tag-count tree-item-flair">' + this.plugin.deckTree.dueFlashcardsCount + '</span><span style="background-color:#2196f3;" aria-label="' + t("NEW_CARDS") + '" class="tag-pane-tag-count tree-item-flair sr-deck-counts">' + this.plugin.deckTree.newFlashcardsCount + '</span><span style="background-color:#ff7043;" aria-label="' + t("TOTAL_CARDS") + '" class="tag-pane-tag-count tree-item-flair sr-deck-counts">' + this.plugin.deckTree.totalFlashcards + "</span></p>";
    this.contentEl.innerHTML = "";
    this.contentEl.setAttribute("id", "sr-flashcard-view");
    for (const deck of this.plugin.deckTree.subdecks) {
      deck.render(this.contentEl, this);
    }
  }
  setupCardsView() {
    this.contentEl.innerHTML = "";
    this.fileLinkView = this.contentEl.createDiv("sr-link");
    this.fileLinkView.setText(t("EDIT_LATER"));
    if (this.plugin.data.settings.showFileNameInFileLink) {
      this.fileLinkView.setAttribute("aria-label", t("EDIT_LATER"));
    }
    this.fileLinkView.addEventListener("click", async () => {
      const activeLeaf = this.plugin.app.workspace.activeLeaf;
      if (this.plugin.app.workspace.getActiveFile() === null)
        await activeLeaf.openFile(this.currentCard.note);
      else {
        const newLeaf = this.plugin.app.workspace.createLeafBySplit(activeLeaf, "vertical", false);
        await newLeaf.openFile(this.currentCard.note, { active: true });
      }
      const activeView = this.app.workspace.getActiveViewOfType(import_obsidian3.MarkdownView);
      activeView.editor.setCursor({
        line: this.currentCard.lineNo,
        ch: 0
      });
      this.currentDeck.deleteFlashcardAtIndex(this.currentCardIdx, this.currentCard.isDue);
      this.burySiblingCards(false);
      this.currentDeck.nextCard(this);
    });
    this.resetLinkView = this.contentEl.createDiv("sr-link");
    this.resetLinkView.setText(t("RESET_CARD_PROGRESS"));
    this.resetLinkView.addEventListener("click", () => {
      this.processReview(ReviewResponse.Reset);
    });
    this.resetLinkView.style.float = "right";
    if (this.plugin.data.settings.showContextInCards) {
      this.contextView = this.contentEl.createDiv();
      this.contextView.setAttribute("id", "sr-context");
    }
    this.flashcardView = this.contentEl.createDiv("div");
    this.flashcardView.setAttribute("id", "sr-flashcard-view");
    this.responseDiv = this.contentEl.createDiv("sr-response");
    this.hardBtn = document.createElement("button");
    this.hardBtn.setAttribute("id", "sr-hard-btn");
    this.hardBtn.setText(t("HARD"));
    this.hardBtn.addEventListener("click", () => {
      this.processReview(ReviewResponse.Hard);
    });
    this.responseDiv.appendChild(this.hardBtn);
    this.goodBtn = document.createElement("button");
    this.goodBtn.setAttribute("id", "sr-good-btn");
    this.goodBtn.setText(t("GOOD"));
    this.goodBtn.addEventListener("click", () => {
      this.processReview(ReviewResponse.Good);
    });
    this.responseDiv.appendChild(this.goodBtn);
    this.easyBtn = document.createElement("button");
    this.easyBtn.setAttribute("id", "sr-easy-btn");
    this.easyBtn.setText(t("EASY"));
    this.easyBtn.addEventListener("click", () => {
      this.processReview(ReviewResponse.Easy);
    });
    this.responseDiv.appendChild(this.easyBtn);
    this.responseDiv.style.display = "none";
    this.answerBtn = this.contentEl.createDiv();
    this.answerBtn.setAttribute("id", "sr-show-answer");
    this.answerBtn.setText(t("SHOW_ANSWER"));
    this.answerBtn.addEventListener("click", () => {
      this.showAnswer();
    });
  }
  showAnswer() {
    this.mode = 2;
    this.answerBtn.style.display = "none";
    this.responseDiv.style.display = "grid";
    if (this.currentCard.isDue) {
      this.resetLinkView.style.display = "inline-block";
    }
    if (this.currentCard.cardType !== CardType.Cloze) {
      const hr = document.createElement("hr");
      hr.setAttribute("id", "sr-hr-card-divide");
      this.flashcardView.appendChild(hr);
    } else {
      this.flashcardView.innerHTML = "";
    }
    this.renderMarkdownWrapper(this.currentCard.back, this.flashcardView);
  }
  async processReview(response) {
    let interval, ease, due;
    this.currentDeck.deleteFlashcardAtIndex(this.currentCardIdx, this.currentCard.isDue);
    if (response !== ReviewResponse.Reset) {
      let schedObj;
      if (this.currentCard.isDue) {
        schedObj = schedule(response, this.currentCard.interval, this.currentCard.ease, this.currentCard.delayBeforeReview, this.plugin.data.settings, this.plugin.dueDatesFlashcards);
      } else {
        let initial_ease = this.plugin.data.settings.baseEase;
        if (Object.prototype.hasOwnProperty.call(this.plugin.easeByPath, this.currentCard.note.path)) {
          initial_ease = Math.round(this.plugin.easeByPath[this.currentCard.note.path]);
        }
        schedObj = schedule(response, 1, initial_ease, 0, this.plugin.data.settings, this.plugin.dueDatesFlashcards);
        interval = schedObj.interval;
        ease = schedObj.ease;
      }
      interval = schedObj.interval;
      ease = schedObj.ease;
      due = window.moment(Date.now() + interval * 24 * 3600 * 1e3);
    } else {
      this.currentCard.interval = 1;
      this.currentCard.ease = this.plugin.data.settings.baseEase;
      if (this.currentCard.isDue) {
        this.currentDeck.dueFlashcards.push(this.currentCard);
      } else {
        this.currentDeck.newFlashcards.push(this.currentCard);
      }
      due = window.moment(Date.now());
      new import_obsidian3.Notice(t("CARD_PROGRESS_RESET"));
      this.currentDeck.nextCard(this);
      return;
    }
    const dueString = due.format("YYYY-MM-DD");
    let fileText = await this.app.vault.read(this.currentCard.note);
    const replacementRegex = new RegExp(escapeRegexString(this.currentCard.cardText), "gm");
    let sep = this.plugin.data.settings.cardCommentOnSameLine ? " " : "\n";
    if (this.currentCard.cardText.endsWith("```") && sep !== "\n") {
      sep = "\n";
    }
    if (this.currentCard.cardText.lastIndexOf("<!--SR:") === -1) {
      this.currentCard.cardText = this.currentCard.cardText + sep + `<!--SR:!${dueString},${interval},${ease}-->`;
    } else {
      let scheduling = [
        ...this.currentCard.cardText.matchAll(MULTI_SCHEDULING_EXTRACTOR)
      ];
      if (scheduling.length === 0) {
        scheduling = [...this.currentCard.cardText.matchAll(LEGACY_SCHEDULING_EXTRACTOR)];
      }
      const currCardSched = ["0", dueString, interval.toString(), ease.toString()];
      if (this.currentCard.isDue) {
        scheduling[this.currentCard.siblingIdx] = currCardSched;
      } else {
        scheduling.push(currCardSched);
      }
      this.currentCard.cardText = this.currentCard.cardText.replace(/<!--SR:.+-->/gm, "");
      this.currentCard.cardText += "<!--SR:";
      for (let i = 0; i < scheduling.length; i++) {
        this.currentCard.cardText += `!${scheduling[i][1]},${scheduling[i][2]},${scheduling[i][3]}`;
      }
      this.currentCard.cardText += "-->";
    }
    fileText = fileText.replace(replacementRegex, () => this.currentCard.cardText);
    for (const sibling of this.currentCard.siblings) {
      sibling.cardText = this.currentCard.cardText;
    }
    if (this.plugin.data.settings.burySiblingCards) {
      this.burySiblingCards(true);
    }
    await this.app.vault.modify(this.currentCard.note, fileText);
    this.currentDeck.nextCard(this);
  }
  async burySiblingCards(tillNextDay) {
    if (tillNextDay) {
      this.plugin.data.buryList.push(cyrb53(this.currentCard.cardText));
      await this.plugin.savePluginData();
    }
    for (const sibling of this.currentCard.siblings) {
      const dueIdx = this.currentDeck.dueFlashcards.indexOf(sibling);
      const newIdx = this.currentDeck.newFlashcards.indexOf(sibling);
      if (dueIdx !== -1) {
        this.currentDeck.deleteFlashcardAtIndex(dueIdx, this.currentDeck.dueFlashcards[dueIdx].isDue);
      } else if (newIdx !== -1) {
        this.currentDeck.deleteFlashcardAtIndex(newIdx, this.currentDeck.newFlashcards[newIdx].isDue);
      }
    }
  }
  async renderMarkdownWrapper(markdownString, containerEl) {
    import_obsidian3.MarkdownRenderer.renderMarkdown(markdownString, containerEl, this.currentCard.note.path, this.plugin);
    containerEl.findAll(".internal-embed").forEach((el) => {
      const src = el.getAttribute("src");
      const target = typeof src === "string" && this.plugin.app.metadataCache.getFirstLinkpathDest(src, this.currentCard.note.path);
      if (target instanceof import_obsidian3.TFile && target.extension !== "md") {
        el.innerText = "";
        el.createEl("img", {
          attr: {
            src: this.plugin.app.vault.getResourcePath(target)
          }
        }, (img) => {
          if (el.hasAttribute("width"))
            img.setAttribute("width", el.getAttribute("width"));
          else
            img.setAttribute("width", "100%");
          if (el.hasAttribute("alt"))
            img.setAttribute("alt", el.getAttribute("alt"));
        });
        el.addClasses(["image-embed", "is-loaded"]);
      }
      if (target === null) {
        el.innerText = src;
      }
    });
  }
};
var Deck = class {
  deckName;
  newFlashcards;
  newFlashcardsCount = 0;
  dueFlashcards;
  dueFlashcardsCount = 0;
  totalFlashcards = 0;
  subdecks;
  parent;
  constructor(deckName, parent) {
    this.deckName = deckName;
    this.newFlashcards = [];
    this.newFlashcardsCount = 0;
    this.dueFlashcards = [];
    this.dueFlashcardsCount = 0;
    this.totalFlashcards = 0;
    this.subdecks = [];
    this.parent = parent;
  }
  createDeck(deckPath) {
    if (deckPath.length === 0) {
      return;
    }
    const deckName = deckPath.shift();
    for (const deck2 of this.subdecks) {
      if (deckName === deck2.deckName) {
        deck2.createDeck(deckPath);
        return;
      }
    }
    const deck = new Deck(deckName, this);
    this.subdecks.push(deck);
    deck.createDeck(deckPath);
  }
  insertFlashcard(deckPath, cardObj) {
    if (cardObj.isDue) {
      this.dueFlashcardsCount++;
    } else {
      this.newFlashcardsCount++;
    }
    this.totalFlashcards++;
    if (deckPath.length === 0) {
      if (cardObj.isDue) {
        this.dueFlashcards.push(cardObj);
      } else {
        this.newFlashcards.push(cardObj);
      }
      return;
    }
    const deckName = deckPath.shift();
    for (const deck of this.subdecks) {
      if (deckName === deck.deckName) {
        deck.insertFlashcard(deckPath, cardObj);
        return;
      }
    }
  }
  countFlashcard(deckPath, n = 1) {
    this.totalFlashcards += n;
    const deckName = deckPath.shift();
    for (const deck of this.subdecks) {
      if (deckName === deck.deckName) {
        deck.countFlashcard(deckPath, n);
        return;
      }
    }
  }
  deleteFlashcardAtIndex(index, cardIsDue) {
    if (cardIsDue) {
      this.dueFlashcards.splice(index, 1);
      this.dueFlashcardsCount--;
    } else {
      this.newFlashcards.splice(index, 1);
      this.newFlashcardsCount--;
    }
    let deck = this.parent;
    while (deck !== null) {
      if (cardIsDue) {
        deck.dueFlashcardsCount--;
      } else {
        deck.newFlashcardsCount--;
      }
      deck = deck.parent;
    }
  }
  sortSubdecksList() {
    this.subdecks.sort((a, b) => {
      if (a.deckName < b.deckName) {
        return -1;
      } else if (a.deckName > b.deckName) {
        return 1;
      }
      return 0;
    });
    for (const deck of this.subdecks) {
      deck.sortSubdecksList();
    }
  }
  render(containerEl, modal) {
    const deckView = containerEl.createDiv("tree-item");
    const deckViewSelf = deckView.createDiv("tree-item-self tag-pane-tag is-clickable");
    let collapsed = true;
    let collapseIconEl = null;
    if (this.subdecks.length > 0) {
      collapseIconEl = deckViewSelf.createDiv("tree-item-icon collapse-icon");
      collapseIconEl.innerHTML = COLLAPSE_ICON;
      collapseIconEl.childNodes[0].style.transform = "rotate(-90deg)";
    }
    const deckViewInner = deckViewSelf.createDiv("tree-item-inner");
    deckViewInner.addEventListener("click", () => {
      modal.currentDeck = this;
      modal.checkDeck = this.parent;
      modal.setupCardsView();
      this.nextCard(modal);
    });
    const deckViewInnerText = deckViewInner.createDiv("tag-pane-tag-text");
    deckViewInnerText.innerHTML += `<span class="tag-pane-tag-self">${this.deckName}</span>`;
    const deckViewOuter = deckViewSelf.createDiv("tree-item-flair-outer");
    deckViewOuter.innerHTML += '<span style="background-color:#4caf50;" class="tag-pane-tag-count tree-item-flair sr-deck-counts">' + this.dueFlashcardsCount + '</span><span style="background-color:#2196f3;" class="tag-pane-tag-count tree-item-flair sr-deck-counts">' + this.newFlashcardsCount + '</span><span style="background-color:#ff7043;" class="tag-pane-tag-count tree-item-flair sr-deck-counts">' + this.totalFlashcards + "</span>";
    const deckViewChildren = deckView.createDiv("tree-item-children");
    deckViewChildren.style.display = "none";
    if (this.subdecks.length > 0) {
      collapseIconEl.addEventListener("click", () => {
        if (collapsed) {
          collapseIconEl.childNodes[0].style.transform = "";
          deckViewChildren.style.display = "block";
        } else {
          collapseIconEl.childNodes[0].style.transform = "rotate(-90deg)";
          deckViewChildren.style.display = "none";
        }
        collapsed = !collapsed;
      });
    }
    for (const deck of this.subdecks) {
      deck.render(deckViewChildren, modal);
    }
  }
  nextCard(modal) {
    if (this.newFlashcards.length + this.dueFlashcards.length === 0) {
      if (this.dueFlashcardsCount + this.newFlashcardsCount > 0) {
        for (const deck of this.subdecks) {
          if (deck.dueFlashcardsCount + deck.newFlashcardsCount > 0) {
            modal.currentDeck = deck;
            deck.nextCard(modal);
            return;
          }
        }
      }
      if (this.parent == modal.checkDeck) {
        modal.decksList();
      } else {
        this.parent.nextCard(modal);
      }
      return;
    }
    modal.responseDiv.style.display = "none";
    modal.resetLinkView.style.display = "none";
    modal.titleEl.setText(`${this.deckName} - ${this.dueFlashcardsCount + this.newFlashcardsCount}`);
    modal.answerBtn.style.display = "initial";
    modal.flashcardView.innerHTML = "";
    modal.mode = 1;
    let interval = 1, ease = modal.plugin.data.settings.baseEase, delayBeforeReview = 0;
    if (this.dueFlashcards.length > 0) {
      if (modal.plugin.data.settings.randomizeCardOrder) {
        modal.currentCardIdx = Math.floor(Math.random() * this.dueFlashcards.length);
      } else {
        modal.currentCardIdx = 0;
      }
      modal.currentCard = this.dueFlashcards[modal.currentCardIdx];
      modal.renderMarkdownWrapper(modal.currentCard.front, modal.flashcardView);
      interval = modal.currentCard.interval;
      ease = modal.currentCard.ease;
      delayBeforeReview = modal.currentCard.delayBeforeReview;
    } else if (this.newFlashcards.length > 0) {
      if (modal.plugin.data.settings.randomizeCardOrder) {
        modal.currentCardIdx = Math.floor(Math.random() * this.newFlashcards.length);
        const card = this.newFlashcards[modal.currentCardIdx];
        for (const siblingCard of card.siblings) {
          if (!siblingCard.isDue) {
            modal.currentCardIdx += siblingCard.siblingIdx - card.siblingIdx;
            break;
          }
        }
      } else {
        modal.currentCardIdx = 0;
      }
      modal.currentCard = this.newFlashcards[modal.currentCardIdx];
      modal.renderMarkdownWrapper(modal.currentCard.front, modal.flashcardView);
      if (Object.prototype.hasOwnProperty.call(modal.plugin.easeByPath, modal.currentCard.note.path)) {
        ease = modal.plugin.easeByPath[modal.currentCard.note.path];
      }
    }
    const hardInterval = schedule(ReviewResponse.Hard, interval, ease, delayBeforeReview, modal.plugin.data.settings).interval;
    const goodInterval = schedule(ReviewResponse.Good, interval, ease, delayBeforeReview, modal.plugin.data.settings).interval;
    const easyInterval = schedule(ReviewResponse.Easy, interval, ease, delayBeforeReview, modal.plugin.data.settings).interval;
    if (import_obsidian3.Platform.isMobile) {
      modal.hardBtn.setText(textInterval(hardInterval, true));
      modal.goodBtn.setText(textInterval(goodInterval, true));
      modal.easyBtn.setText(textInterval(easyInterval, true));
    } else {
      modal.hardBtn.setText(`${t("HARD")} - ${textInterval(hardInterval, false)}`);
      modal.goodBtn.setText(`${t("GOOD")} - ${textInterval(goodInterval, false)}`);
      modal.easyBtn.setText(`${t("EASY")} - ${textInterval(easyInterval, false)}`);
    }
    if (modal.plugin.data.settings.showContextInCards)
      modal.contextView.setText(modal.currentCard.context);
    if (modal.plugin.data.settings.showFileNameInFileLink)
      modal.fileLinkView.setText(modal.currentCard.note.basename);
  }
};

// src/stats-modal.ts
var import_obsidian4 = __toModule(require("obsidian"));
var StatsModal = class extends import_obsidian4.Modal {
  plugin;
  constructor(app, plugin) {
    super(app);
    this.plugin = plugin;
    this.titleEl.setText(t("STATS_TITLE"));
    this.modalEl.style.height = "100%";
    this.modalEl.style.width = "100%";
    if (import_obsidian4.Platform.isMobile) {
      this.contentEl.style.display = "block";
    }
  }
  onOpen() {
    const { contentEl } = this;
    if (!this.app.plugins.enabledPlugins.has(OBSIDIAN_CHARTS_ID)) {
      contentEl.innerHTML += "<div style='text-align:center'><span>" + t("OBSIDIAN_CHARTS_REQUIRED") + "</span></div>";
      return;
    }
    let text = "";
    let maxN = Math.max(...getKeysPreserveType(this.plugin.dueDatesFlashcards));
    for (let dueOffset = 0; dueOffset <= maxN; dueOffset++) {
      if (!Object.prototype.hasOwnProperty.call(this.plugin.dueDatesFlashcards, dueOffset)) {
        this.plugin.dueDatesFlashcards[dueOffset] = 0;
      }
    }
    const dueDatesFlashcardsCopy = { 0: 0 };
    for (const [dueOffset, dueCount] of Object.entries(this.plugin.dueDatesFlashcards)) {
      if (dueOffset <= 0) {
        dueDatesFlashcardsCopy[0] += dueCount;
      } else {
        dueDatesFlashcardsCopy[dueOffset] = dueCount;
      }
    }
    const cardStats = this.plugin.cardStats;
    const scheduledCount = cardStats.youngCount + cardStats.matureCount;
    maxN = Math.max(maxN, 1);
    text += "\n<div style='text-align:center'><h2 style='text-align:center'>" + t("FORECAST") + "</h2><p style='text-align:center'>" + t("FORECAST_DESC") + `</p></div>

\`\`\`chart
	type: bar
	labels: [${Object.keys(dueDatesFlashcardsCopy)}]
	series:
		- title: ` + t("SCHEDULED") + `
		  data: [${Object.values(dueDatesFlashcardsCopy)}]
	xTitle: ` + t("DAYS") + "\n	yTitle: " + t("NUMBER_OF_CARDS") + "\n	legend: false\n	stacked: true\n````\n\n<div style='text-align:center'>" + t("REVIEWS_PER_DAY").interpolate({ avg: (scheduledCount / maxN).toFixed(1) }) + "</div>";
    maxN = Math.max(...getKeysPreserveType(cardStats.intervals));
    for (let interval = 0; interval <= maxN; interval++) {
      if (!Object.prototype.hasOwnProperty.call(cardStats.intervals, interval)) {
        cardStats.intervals[interval] = 0;
      }
    }
    const average_interval = textInterval(Math.round(Object.entries(cardStats.intervals).map(([interval, count]) => interval * count).reduce((a, b) => a + b) / scheduledCount * 10) / 10, false), longest_interval = textInterval(Math.max(...getKeysPreserveType(cardStats.intervals)), false);
    text += "\n<div style='text-align:center'><h2 style='text-align:center'>" + t("INTERVALS") + "</h2><p style='text-align:center'>" + t("INTERVALS_DESC") + `</p></div>

\`\`\`chart
	type: bar
	labels: [${Object.keys(cardStats.intervals)}]
	series:
		- title: ` + t("COUNT") + `
		  data: [${Object.values(cardStats.intervals)}]
	xTitle: ` + t("DAYS") + "\n	yTitle: " + t("NUMBER_OF_CARDS") + "\n	legend: false\n	stacked: true\n````\n\n<div style='text-align:center'>" + t("INTERVALS_SUMMARY").interpolate({
      avg: average_interval,
      longest: longest_interval
    }) + "</div>";
    const eases = getKeysPreserveType(cardStats.eases);
    for (let ease = Math.min(...eases); ease <= Math.max(...eases); ease++) {
      if (!Object.prototype.hasOwnProperty.call(cardStats.eases, ease)) {
        cardStats.eases[ease] = 0;
      }
    }
    const average_ease = Math.round(Object.entries(cardStats.eases).map(([ease, count]) => ease * count).reduce((a, b) => a + b) / scheduledCount);
    text += "\n<div style='text-align:center'><h2 style='text-align:center'>" + t("EASES") + `</h2></div>

\`\`\`chart
	type: bar
	labels: [${Object.keys(cardStats.eases)}]
	series:
		- title: ` + t("COUNT") + `
		  data: [${Object.values(cardStats.eases)}]
	xTitle: ` + t("DAYS") + "\n	yTitle: " + t("NUMBER_OF_CARDS") + "\n	legend: false\n	stacked: true\n````\n\n<div style='text-align:center'>" + t("EASES_SUMMARY").interpolate({ avgEase: average_ease }) + "</div>";
    const totalCardsCount = this.plugin.deckTree.totalFlashcards;
    text += "\n<div style='text-align:center'><h2 style='text-align:center'>" + t("CARD_TYPES") + "</h2><p style='text-align:center'>" + t("CARD_TYPES_DESC") + `</p></div>

\`\`\`chart
	type: pie
	labels: ['New - ${Math.round(cardStats.newCount / totalCardsCount * 100)}%', 'Young - ${Math.round(cardStats.youngCount / totalCardsCount * 100)}%', 'Mature - ${Math.round(cardStats.matureCount / totalCardsCount * 100)}%']
	series:
		- data: [${cardStats.newCount}, ${cardStats.youngCount}, ${cardStats.matureCount}]
	width: 40%
	labelColors: true
\`\`\`

<div style='text-align:center'>` + t("CARD_TYPES_SUMMARY").interpolate({ totalCardsCount }) + "</div>";
    import_obsidian4.MarkdownRenderer.renderMarkdown(text, contentEl, "", this.plugin);
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};

// src/sidebar.ts
var import_obsidian5 = __toModule(require("obsidian"));
var REVIEW_QUEUE_VIEW_TYPE = "review-queue-list-view";
var ReviewQueueListView = class extends import_obsidian5.ItemView {
  plugin;
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
    this.registerEvent(this.app.workspace.on("file-open", () => this.redraw()));
    this.registerEvent(this.app.vault.on("rename", () => this.redraw()));
  }
  getViewType() {
    return REVIEW_QUEUE_VIEW_TYPE;
  }
  getDisplayText() {
    return t("NOTES_REVIEW_QUEUE");
  }
  getIcon() {
    return "SpacedRepIcon";
  }
  onHeaderMenu(menu) {
    menu.addItem((item) => {
      item.setTitle(t("CLOSE")).setIcon("cross").onClick(() => {
        this.app.workspace.detachLeavesOfType(REVIEW_QUEUE_VIEW_TYPE);
      });
    });
  }
  redraw() {
    const openFile = this.app.workspace.getActiveFile();
    const rootEl = createDiv("nav-folder mod-root"), childrenEl = rootEl.createDiv("nav-folder-children");
    for (const deckKey in this.plugin.reviewDecks) {
      const deck = this.plugin.reviewDecks[deckKey];
      const deckFolderEl = this.createRightPaneFolder(childrenEl, deckKey, false, deck).getElementsByClassName("nav-folder-children")[0];
      if (deck.newNotes.length > 0) {
        const newNotesFolderEl = this.createRightPaneFolder(deckFolderEl, t("NEW"), !deck.activeFolders.has(t("NEW")), deck);
        for (const newFile of deck.newNotes) {
          this.createRightPaneFile(newNotesFolderEl, newFile, openFile && newFile.path === openFile.path, !deck.activeFolders.has(t("NEW")));
        }
      }
      if (deck.scheduledNotes.length > 0) {
        const now = Date.now();
        let currUnix = -1;
        let schedFolderEl = null, folderTitle = "";
        const maxDaysToRender = this.plugin.data.settings.maxNDaysNotesReviewQueue;
        for (const sNote of deck.scheduledNotes) {
          if (sNote.dueUnix != currUnix) {
            const nDays = Math.ceil((sNote.dueUnix - now) / (24 * 3600 * 1e3));
            if (nDays > maxDaysToRender) {
              break;
            }
            if (nDays === -1) {
              folderTitle = t("YESTERDAY");
            } else if (nDays === 0) {
              folderTitle = t("TODAY");
            } else if (nDays === 1) {
              folderTitle = t("TOMORROW");
            } else {
              folderTitle = new Date(sNote.dueUnix).toDateString();
            }
            schedFolderEl = this.createRightPaneFolder(deckFolderEl, folderTitle, !deck.activeFolders.has(folderTitle), deck);
            currUnix = sNote.dueUnix;
          }
          this.createRightPaneFile(schedFolderEl, sNote.note, openFile && sNote.note.path === openFile.path, !deck.activeFolders.has(folderTitle));
        }
      }
    }
    const contentEl = this.containerEl.children[1];
    contentEl.empty();
    contentEl.appendChild(rootEl);
  }
  createRightPaneFolder(parentEl, folderTitle, collapsed, deck) {
    const folderEl = parentEl.createDiv("nav-folder"), folderTitleEl = folderEl.createDiv("nav-folder-title"), childrenEl = folderEl.createDiv("nav-folder-children"), collapseIconEl = folderTitleEl.createDiv("nav-folder-collapse-indicator collapse-icon");
    collapseIconEl.innerHTML = COLLAPSE_ICON;
    if (collapsed) {
      collapseIconEl.childNodes[0].style.transform = "rotate(-90deg)";
    }
    folderTitleEl.createDiv("nav-folder-title-content").setText(folderTitle);
    folderTitleEl.onClickEvent(() => {
      for (const child of childrenEl.childNodes) {
        if (child.style.display === "block" || child.style.display === "") {
          child.style.display = "none";
          collapseIconEl.childNodes[0].style.transform = "rotate(-90deg)";
          deck.activeFolders.delete(folderTitle);
        } else {
          child.style.display = "block";
          collapseIconEl.childNodes[0].style.transform = "";
          deck.activeFolders.add(folderTitle);
        }
      }
    });
    return folderEl;
  }
  createRightPaneFile(folderEl, file, fileElActive, hidden) {
    const navFileEl = folderEl.getElementsByClassName("nav-folder-children")[0].createDiv("nav-file");
    if (hidden) {
      navFileEl.style.display = "none";
    }
    const navFileTitle = navFileEl.createDiv("nav-file-title");
    if (fileElActive) {
      navFileTitle.addClass("is-active");
    }
    navFileTitle.createDiv("nav-file-title-content").setText(file.basename);
    navFileTitle.addEventListener("click", (event) => {
      event.preventDefault();
      this.app.workspace.activeLeaf.openFile(file);
      return false;
    }, false);
    navFileTitle.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      const fileMenu = new import_obsidian5.Menu(this.app);
      this.app.workspace.trigger("file-menu", fileMenu, file, "my-context-menu", null);
      fileMenu.showAtPosition({
        x: event.pageX,
        y: event.pageY
      });
      return false;
    }, false);
  }
};

// src/review-deck.ts
var import_obsidian6 = __toModule(require("obsidian"));
var ReviewDeck = class {
  deckName;
  newNotes = [];
  scheduledNotes = [];
  activeFolders;
  dueNotesCount = 0;
  constructor(name) {
    this.deckName = name;
    this.activeFolders = new Set([t("Today")]);
  }
  sortNotes(pageranks) {
    this.newNotes = this.newNotes.sort((a, b) => (pageranks[b.path] || 0) - (pageranks[a.path] || 0));
    this.scheduledNotes = this.scheduledNotes.sort((a, b) => {
      const result = a.dueUnix - b.dueUnix;
      if (result != 0) {
        return result;
      }
      return (pageranks[b.note.path] || 0) - (pageranks[a.note.path] || 0);
    });
  }
};
var ReviewDeckSelectionModal = class extends import_obsidian6.FuzzySuggestModal {
  deckKeys = [];
  submitCallback;
  constructor(app, deckKeys) {
    super(app);
    this.deckKeys = deckKeys;
  }
  getItems() {
    return this.deckKeys;
  }
  getItemText(item) {
    return item;
  }
  onChooseItem(deckKey, _) {
    this.close();
    this.submitCallback(deckKey);
  }
};

// src/parser.ts
function parse(text, singlelineCardSeparator, singlelineReversedCardSeparator, multilineCardSeparator, multilineReversedCardSeparator, convertHighlightsToClozes, convertBoldTextToClozes) {
  let cardText = "";
  const cards = [];
  let cardType = null;
  let lineNo = 0;
  const lines = text.split("\n");
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].length === 0) {
      if (cardType) {
        cards.push([cardType, cardText, lineNo]);
        cardType = null;
      }
      cardText = "";
      continue;
    } else if (lines[i].startsWith("<!--") && !lines[i].startsWith("<!--SR:")) {
      while (i + 1 < lines.length && !lines[i + 1].includes("-->"))
        i++;
      i++;
      continue;
    }
    if (cardText.length > 0) {
      cardText += "\n";
    }
    cardText += lines[i];
    if (lines[i].includes(singlelineReversedCardSeparator) || lines[i].includes(singlelineCardSeparator)) {
      cardType = lines[i].includes(singlelineReversedCardSeparator) ? CardType.SingleLineReversed : CardType.SingleLineBasic;
      cardText = lines[i];
      lineNo = i;
      if (i + 1 < lines.length && lines[i + 1].startsWith("<!--SR:")) {
        cardText += "\n" + lines[i + 1];
        i++;
      }
      cards.push([cardType, cardText, lineNo]);
      cardType = null;
      cardText = "";
    } else if (cardType === null && (convertHighlightsToClozes && /==.*?==/gm.test(lines[i]) || convertBoldTextToClozes && /\*\*.*?\*\*/gm.test(lines[i]))) {
      cardType = CardType.Cloze;
      lineNo = i;
    } else if (lines[i] === multilineCardSeparator) {
      cardType = CardType.MultiLineBasic;
      lineNo = i;
    } else if (lines[i] === multilineReversedCardSeparator) {
      cardType = CardType.MultiLineReversed;
      lineNo = i;
    } else if (lines[i].startsWith("```")) {
      while (i + 1 < lines.length && !lines[i + 1].startsWith("```")) {
        i++;
        cardText += "\n" + lines[i];
      }
      cardText += "\n```";
      i++;
    }
  }
  if (cardType && cardText) {
    cards.push([cardType, cardText, lineNo]);
  }
  return cards;
}

// src/icons/appicon.ts
var import_obsidian7 = __toModule(require("obsidian"));
function appIcon() {
  (0, import_obsidian7.addIcon)("SpacedRepIcon", `<path fill="currentColor" stroke="currentColor" d="M 88.960938 17.257812 L 47.457031 17.257812 C 45.679688 17.257812 44.230469 18.703125 44.230469 20.484375 L 44.230469 86.558594 C 44.230469 88.335938 45.679688 89.785156 47.457031 89.785156 L 88.960938 89.785156 C 90.738281 89.785156 92.1875 88.335938 92.1875 86.558594 L 92.1875 20.484375 C 92.1875 18.703125 90.738281 17.257812 88.960938 17.257812 Z M 88.28125 85.878906 L 48.136719 85.878906 L 48.136719 21.164062 L 88.28125 21.164062 Z M 88.28125 85.878906 "/>
        <path fill="currentColor" stroke="currentColor"  d="M 88.960938 9.445312 L 61.667969 9.445312 C 59.925781 3.816406 54.011719 0.515625 48.269531 2.054688 L 8.183594 12.796875 C 2.304688 14.371094 -1.199219 20.4375 0.378906 26.316406 L 17.476562 90.140625 C 18.796875 95.066406 23.269531 98.324219 28.144531 98.324219 C 29.085938 98.324219 30.046875 98.199219 31 97.945312 L 40.765625 95.328125 C 42.625 96.75 44.941406 97.597656 47.457031 97.597656 L 88.960938 97.597656 C 95.046875 97.597656 100 92.644531 100 86.558594 L 100 20.484375 C 100 14.398438 95.046875 9.445312 88.960938 9.445312 Z M 29.988281 94.171875 C 26.1875 95.191406 22.269531 92.925781 21.25 89.128906 L 4.152344 25.304688 C 3.132812 21.507812 5.394531 17.585938 9.195312 16.570312 L 49.28125 5.828125 C 52.578125 4.945312 55.960938 6.53125 57.464844 9.445312 L 47.457031 9.445312 C 41.371094 9.445312 36.417969 14.398438 36.417969 20.484375 L 36.417969 86.558594 C 36.417969 88.558594 36.957031 90.433594 37.890625 92.054688 Z M 96.09375 86.558594 C 96.09375 90.492188 92.894531 93.691406 88.960938 93.691406 L 47.457031 93.691406 C 43.523438 93.691406 40.324219 90.492188 40.324219 86.558594 L 40.324219 20.484375 C 40.324219 16.550781 43.523438 13.351562 47.457031 13.351562 L 88.960938 13.351562 C 92.894531 13.351562 96.09375 16.550781 96.09375 20.484375 Z M 96.09375 86.558594 "/>
        <path fill="currentColor" stroke="currentColor"  d="M 54.101562 53.09375 L 60.070312 57.410156 L 57.789062 64.378906 C 56.90625 67.074219 59.996094 69.320312 62.285156 67.648438 L 68.210938 63.324219 L 74.132812 67.648438 C 76.421875 69.320312 79.511719 67.074219 78.628906 64.378906 L 76.347656 57.410156 L 82.320312 53.09375 C 84.613281 51.433594 83.441406 47.804688 80.605469 47.804688 L 73.242188 47.804688 L 70.988281 40.839844 C 70.117188 38.144531 66.300781 38.144531 65.429688 40.839844 L 63.179688 47.804688 L 55.8125 47.804688 C 52.980469 47.804688 51.804688 51.433594 54.101562 53.09375 Z M 54.101562 53.09375 "/>
        `);
}

// src/main.ts
var DEFAULT_DATA = {
  settings: DEFAULT_SETTINGS,
  buryDate: "",
  buryList: []
};
String.prototype.interpolate = function(params) {
  const names = Object.keys(params);
  const vals = Object.values(params);
  return new Function(...names, `return \`${this}\`;`)(...vals);
};
var SRPlugin = class extends import_obsidian8.Plugin {
  statusBar;
  reviewQueueView;
  data;
  reviewDecks = {};
  lastSelectedReviewDeck;
  newNotes = [];
  scheduledNotes = [];
  easeByPath = {};
  incomingLinks = {};
  pageranks = {};
  dueNotesCount = 0;
  dueDatesNotes = {};
  deckTree = new Deck("root", null);
  dueDatesFlashcards = {};
  cardStats;
  async onload() {
    await this.loadPluginData();
    appIcon();
    this.statusBar = this.addStatusBarItem();
    this.statusBar.classList.add("mod-clickable");
    this.statusBar.setAttribute("aria-label", t("OPEN_NOTE_FOR_REVIEW"));
    this.statusBar.setAttribute("aria-label-position", "top");
    this.statusBar.addEventListener("click", async () => {
      await this.sync();
      this.reviewNextNoteModal();
    });
    this.addRibbonIcon("SpacedRepIcon", t("REVIEW_CARDS"), async () => {
      await this.sync();
      new FlashcardModal(this.app, this).open();
    });
    this.registerView(REVIEW_QUEUE_VIEW_TYPE, (leaf) => this.reviewQueueView = new ReviewQueueListView(leaf, this));
    if (!this.data.settings.disableFileMenuReviewOptions) {
      this.registerEvent(this.app.workspace.on("file-menu", (menu, fileish) => {
        if (fileish instanceof import_obsidian8.TFile && fileish.extension === "md") {
          menu.addItem((item) => {
            item.setTitle(t("REVIEW_EASY_FILE_MENU")).setIcon("SpacedRepIcon").onClick(() => {
              this.saveReviewResponse(fileish, ReviewResponse.Easy);
            });
          });
          menu.addItem((item) => {
            item.setTitle(t("REVIEW_GOOD_FILE_MENU")).setIcon("SpacedRepIcon").onClick(() => {
              this.saveReviewResponse(fileish, ReviewResponse.Good);
            });
          });
          menu.addItem((item) => {
            item.setTitle(t("REVIEW_HARD_FILE_MENU")).setIcon("SpacedRepIcon").onClick(() => {
              this.saveReviewResponse(fileish, ReviewResponse.Hard);
            });
          });
        }
      }));
    }
    this.addCommand({
      id: "srs-note-review-open-note",
      name: t("OPEN_NOTE_FOR_REVIEW"),
      callback: async () => {
        await this.sync();
        this.reviewNextNoteModal();
      }
    });
    this.addCommand({
      id: "srs-note-review-easy",
      name: t("REVIEW_NOTE_EASY_CMD"),
      callback: () => {
        const openFile = this.app.workspace.getActiveFile();
        if (openFile && openFile.extension === "md") {
          this.saveReviewResponse(openFile, ReviewResponse.Easy);
        }
      }
    });
    this.addCommand({
      id: "srs-note-review-good",
      name: t("REVIEW_NOTE_GOOD_CMD"),
      callback: () => {
        const openFile = this.app.workspace.getActiveFile();
        if (openFile && openFile.extension === "md") {
          this.saveReviewResponse(openFile, ReviewResponse.Good);
        }
      }
    });
    this.addCommand({
      id: "srs-note-review-hard",
      name: t("REVIEW_NOTE_HARD_CMD"),
      callback: () => {
        const openFile = this.app.workspace.getActiveFile();
        if (openFile && openFile.extension === "md") {
          this.saveReviewResponse(openFile, ReviewResponse.Hard);
        }
      }
    });
    this.addCommand({
      id: "srs-review-flashcards",
      name: t("REVIEW_ALL_CARDS"),
      callback: async () => {
        await this.sync();
        new FlashcardModal(this.app, this).open();
      }
    });
    this.addCommand({
      id: "srs-review-flashcards-in-note",
      name: t("REVIEW_CARDS_IN_NOTE"),
      callback: async () => {
        const openFile = this.app.workspace.getActiveFile();
        if (openFile && openFile.extension === "md") {
          this.deckTree = new Deck("root", null);
          const deckPath = this.findDeckPath(openFile);
          await this.findFlashcardsInNote(openFile, deckPath);
          new FlashcardModal(this.app, this).open();
        }
      }
    });
    this.addCommand({
      id: "srs-view-stats",
      name: t("VIEW_STATS"),
      callback: async () => {
        await this.sync();
        new StatsModal(this.app, this).open();
      }
    });
    this.addSettingTab(new SRSettingTab(this.app, this));
    this.app.workspace.onLayoutReady(() => {
      this.initView();
      setTimeout(async () => await this.sync(), 2e3);
    });
  }
  onunload() {
    this.app.workspace.getLeavesOfType(REVIEW_QUEUE_VIEW_TYPE).forEach((leaf) => leaf.detach());
  }
  async sync() {
    graph.reset();
    this.easeByPath = {};
    this.incomingLinks = {};
    this.pageranks = {};
    this.dueNotesCount = 0;
    this.dueDatesNotes = {};
    this.reviewDecks = {};
    this.deckTree = new Deck("root", null);
    this.dueDatesFlashcards = {};
    this.cardStats = {
      eases: {},
      intervals: {},
      newCount: 0,
      youngCount: 0,
      matureCount: 0
    };
    const now = window.moment(Date.now());
    const todayDate = now.format("YYYY-MM-DD");
    if (todayDate !== this.data.buryDate) {
      this.data.buryDate = todayDate;
      this.data.buryList = [];
    }
    const notes = this.app.vault.getMarkdownFiles();
    for (const note of notes) {
      if (this.data.settings.noteFoldersToIgnore.some((folder) => note.path.startsWith(folder))) {
        continue;
      }
      if (this.incomingLinks[note.path] === void 0) {
        this.incomingLinks[note.path] = [];
      }
      const links = this.app.metadataCache.resolvedLinks[note.path] || {};
      for (const targetPath in links) {
        if (this.incomingLinks[targetPath] === void 0)
          this.incomingLinks[targetPath] = [];
        if (targetPath.split(".").pop().toLowerCase() === "md") {
          this.incomingLinks[targetPath].push({
            sourcePath: note.path,
            linkCount: links[targetPath]
          });
          graph.link(note.path, targetPath, links[targetPath]);
        }
      }
      const deckPath = this.findDeckPath(note);
      if (deckPath.length !== 0) {
        const flashcardsInNoteAvgEase = await this.findFlashcardsInNote(note, deckPath);
        if (flashcardsInNoteAvgEase > 0) {
          this.easeByPath[note.path] = flashcardsInNoteAvgEase;
        }
      }
      const fileCachedData = this.app.metadataCache.getFileCache(note) || {};
      const frontmatter = fileCachedData.frontmatter || {};
      const tags = (0, import_obsidian8.getAllTags)(fileCachedData) || [];
      let shouldIgnore = true;
      for (const tag of tags) {
        if (this.data.settings.tagsToReview.some((tagToReview) => tag === tagToReview || tag.startsWith(tagToReview + "/"))) {
          if (!Object.prototype.hasOwnProperty.call(this.reviewDecks, tag)) {
            this.reviewDecks[tag] = new ReviewDeck(tag);
          }
          shouldIgnore = false;
          break;
        }
      }
      if (shouldIgnore) {
        continue;
      }
      if (!(Object.prototype.hasOwnProperty.call(frontmatter, "sr-due") && Object.prototype.hasOwnProperty.call(frontmatter, "sr-interval") && Object.prototype.hasOwnProperty.call(frontmatter, "sr-ease"))) {
        for (const tag of tags) {
          if (Object.prototype.hasOwnProperty.call(this.reviewDecks, tag)) {
            this.reviewDecks[tag].newNotes.push(note);
          }
        }
        continue;
      }
      const dueUnix = window.moment(frontmatter["sr-due"], ["YYYY-MM-DD", "DD-MM-YYYY", "ddd MMM DD YYYY"]).valueOf();
      for (const tag of tags) {
        if (Object.prototype.hasOwnProperty.call(this.reviewDecks, tag)) {
          this.reviewDecks[tag].scheduledNotes.push({ note, dueUnix });
          if (dueUnix <= now.valueOf()) {
            this.reviewDecks[tag].dueNotesCount++;
          }
        }
      }
      if (Object.prototype.hasOwnProperty.call(this.easeByPath, note.path)) {
        this.easeByPath[note.path] = (this.easeByPath[note.path] + frontmatter["sr-ease"]) / 2;
      } else {
        this.easeByPath[note.path] = frontmatter["sr-ease"];
      }
      if (dueUnix <= now.valueOf()) {
        this.dueNotesCount++;
      }
      const nDays = Math.ceil((dueUnix - now.valueOf()) / (24 * 3600 * 1e3));
      if (!Object.prototype.hasOwnProperty.call(this.dueDatesNotes, nDays)) {
        this.dueDatesNotes[nDays] = 0;
      }
      this.dueDatesNotes[nDays]++;
    }
    graph.rank(0.85, 1e-6, (node, rank2) => {
      this.pageranks[node] = rank2 * 1e4;
    });
    this.deckTree.sortSubdecksList();
    if (this.data.settings.showDebugMessages) {
      console.log(`SR: ${t("EASES")}`, this.easeByPath);
    }
    for (const deckKey in this.reviewDecks) {
      this.reviewDecks[deckKey].sortNotes(this.pageranks);
    }
    if (this.data.settings.showDebugMessages) {
      console.log("SR: " + t("SYNC_TIME_TAKEN").interpolate({
        t: Date.now() - now.valueOf()
      }));
    }
    this.statusBar.setText(t("STATUS_BAR").interpolate({
      dueNotesCount: this.dueNotesCount,
      dueFlashcardsCount: this.deckTree.dueFlashcardsCount
    }));
    this.reviewQueueView.redraw();
  }
  async saveReviewResponse(note, response) {
    const fileCachedData = this.app.metadataCache.getFileCache(note) || {};
    const frontmatter = fileCachedData.frontmatter || {};
    const tags = (0, import_obsidian8.getAllTags)(fileCachedData) || [];
    if (this.data.settings.noteFoldersToIgnore.some((folder) => note.path.startsWith(folder))) {
      new import_obsidian8.Notice(t("NOTE_IN_IGNORED_FOLDER"));
      return;
    }
    let shouldIgnore = true;
    for (const tag of tags) {
      if (this.data.settings.tagsToReview.some((tagToReview) => tag === tagToReview || tag.startsWith(tagToReview + "/"))) {
        shouldIgnore = false;
        break;
      }
    }
    if (shouldIgnore) {
      new import_obsidian8.Notice(t("PLEASE_TAG_NOTE"));
      return;
    }
    let fileText = await this.app.vault.read(note);
    let ease, interval, delayBeforeReview;
    const now = Date.now();
    if (!(Object.prototype.hasOwnProperty.call(frontmatter, "sr-due") && Object.prototype.hasOwnProperty.call(frontmatter, "sr-interval") && Object.prototype.hasOwnProperty.call(frontmatter, "sr-ease"))) {
      let linkTotal = 0, linkPGTotal = 0, totalLinkCount = 0;
      for (const statObj of this.incomingLinks[note.path] || []) {
        const ease2 = this.easeByPath[statObj.sourcePath];
        if (ease2) {
          linkTotal += statObj.linkCount * this.pageranks[statObj.sourcePath] * ease2;
          linkPGTotal += this.pageranks[statObj.sourcePath] * statObj.linkCount;
          totalLinkCount += statObj.linkCount;
        }
      }
      const outgoingLinks = this.app.metadataCache.resolvedLinks[note.path] || {};
      for (const linkedFilePath in outgoingLinks) {
        const ease2 = this.easeByPath[linkedFilePath];
        if (ease2) {
          linkTotal += outgoingLinks[linkedFilePath] * this.pageranks[linkedFilePath] * ease2;
          linkPGTotal += this.pageranks[linkedFilePath] * outgoingLinks[linkedFilePath];
          totalLinkCount += outgoingLinks[linkedFilePath];
        }
      }
      const linkContribution = this.data.settings.maxLinkFactor * Math.min(1, Math.log(totalLinkCount + 0.5) / Math.log(64));
      ease = (1 - linkContribution) * this.data.settings.baseEase + (totalLinkCount > 0 ? linkContribution * linkTotal / linkPGTotal : linkContribution * this.data.settings.baseEase);
      if (Object.prototype.hasOwnProperty.call(this.easeByPath, note.path)) {
        ease = (ease + this.easeByPath[note.path]) / 2;
      }
      ease = Math.round(ease);
      interval = 1;
      delayBeforeReview = 0;
    } else {
      interval = frontmatter["sr-interval"];
      ease = frontmatter["sr-ease"];
      delayBeforeReview = now - window.moment(frontmatter["sr-due"], ["YYYY-MM-DD", "DD-MM-YYYY", "ddd MMM DD YYYY"]).valueOf();
    }
    const schedObj = schedule(response, interval, ease, delayBeforeReview, this.data.settings, this.dueDatesNotes);
    interval = schedObj.interval;
    ease = schedObj.ease;
    const due = window.moment(now + interval * 24 * 3600 * 1e3);
    const dueString = due.format("YYYY-MM-DD");
    if (SCHEDULING_INFO_REGEX.test(fileText)) {
      const schedulingInfo = SCHEDULING_INFO_REGEX.exec(fileText);
      fileText = fileText.replace(SCHEDULING_INFO_REGEX, `---
${schedulingInfo[1]}sr-due: ${dueString}
sr-interval: ${interval}
sr-ease: ${ease}
${schedulingInfo[5]}---`);
    } else if (YAML_FRONT_MATTER_REGEX.test(fileText)) {
      const existingYaml = YAML_FRONT_MATTER_REGEX.exec(fileText);
      fileText = fileText.replace(YAML_FRONT_MATTER_REGEX, `---
${existingYaml[1]}sr-due: ${dueString}
sr-interval: ${interval}
sr-ease: ${ease}
---`);
    } else {
      fileText = `---
sr-due: ${dueString}
sr-interval: ${interval}
sr-ease: ${ease}
---

${fileText}`;
    }
    if (this.data.settings.burySiblingCards) {
      await this.findFlashcardsInNote(note, [], true);
      await this.savePluginData();
    }
    await this.app.vault.modify(note, fileText);
    new import_obsidian8.Notice(t("RESPONSE_RECEIVED"));
    setTimeout(async () => {
      await this.sync();
      if (this.data.settings.autoNextNote) {
        this.reviewNextNote(this.lastSelectedReviewDeck);
      }
    }, 500);
  }
  async reviewNextNoteModal() {
    const reviewDeckNames = Object.keys(this.reviewDecks);
    if (reviewDeckNames.length === 1) {
      this.reviewNextNote(reviewDeckNames[0]);
    } else {
      const deckSelectionModal = new ReviewDeckSelectionModal(this.app, reviewDeckNames);
      deckSelectionModal.submitCallback = (deckKey) => this.reviewNextNote(deckKey);
      deckSelectionModal.open();
    }
  }
  async reviewNextNote(deckKey) {
    if (!Object.prototype.hasOwnProperty.call(this.reviewDecks, deckKey)) {
      new import_obsidian8.Notice(t("NO_DECK_EXISTS").interpolate({ deckName: deckKey }));
      return;
    }
    this.lastSelectedReviewDeck = deckKey;
    const deck = this.reviewDecks[deckKey];
    if (deck.dueNotesCount > 0) {
      const index = this.data.settings.openRandomNote ? Math.floor(Math.random() * deck.dueNotesCount) : 0;
      this.app.workspace.activeLeaf.openFile(deck.scheduledNotes[index].note);
      return;
    }
    if (deck.newNotes.length > 0) {
      const index = this.data.settings.openRandomNote ? Math.floor(Math.random() * deck.newNotes.length) : 0;
      this.app.workspace.activeLeaf.openFile(deck.newNotes[index]);
      return;
    }
    new import_obsidian8.Notice(t("ALL_CAUGHT_UP"));
  }
  findDeckPath(note) {
    let deckPath = [];
    if (this.data.settings.convertFoldersToDecks) {
      deckPath = note.path.split("/");
      deckPath.pop();
      if (deckPath.length === 0) {
        deckPath = ["/"];
      }
    } else {
      const fileCachedData = this.app.metadataCache.getFileCache(note) || {};
      const tags = (0, import_obsidian8.getAllTags)(fileCachedData) || [];
      outer:
        for (const tagToReview of this.data.settings.flashcardTags) {
          for (const tag of tags) {
            if (tag === tagToReview || tag.startsWith(tagToReview + "/")) {
              deckPath = tag.substring(1).split("/");
              break outer;
            }
          }
        }
    }
    return deckPath;
  }
  async findFlashcardsInNote(note, deckPath, buryOnly = false) {
    let fileText = await this.app.vault.read(note);
    const fileCachedData = this.app.metadataCache.getFileCache(note) || {};
    const headings = fileCachedData.headings || [];
    let fileChanged = false, deckAdded = false, totalNoteEase = 0, scheduledCount = 0;
    const settings = this.data.settings;
    const now = Date.now();
    const parsedCards = parse(fileText, settings.singlelineCardSeparator, settings.singlelineReversedCardSeparator, settings.multilineCardSeparator, settings.multilineReversedCardSeparator, settings.convertHighlightsToClozes, settings.convertBoldTextToClozes);
    for (const parsedCard of parsedCards) {
      const cardType = parsedCard[0], cardText = parsedCard[1], lineNo = parsedCard[2];
      const cardTextHash = cyrb53(cardText);
      if (buryOnly) {
        this.data.buryList.push(cardTextHash);
        continue;
      }
      if (!deckAdded) {
        this.deckTree.createDeck([...deckPath]);
        deckAdded = true;
      }
      const siblingMatches = [];
      if (cardType === CardType.Cloze) {
        const siblings2 = [];
        if (settings.convertHighlightsToClozes) {
          siblings2.push(...cardText.matchAll(/==(.*?)==/gm));
        }
        if (settings.convertBoldTextToClozes) {
          siblings2.push(...cardText.matchAll(/\*\*(.*?)\*\*/gm));
        }
        siblings2.sort((a, b) => {
          if (a.index < b.index) {
            return -1;
          }
          if (a.index > b.index) {
            return 1;
          }
          return 0;
        });
        let front, back;
        for (const m of siblings2) {
          const deletionStart = m.index, deletionEnd = deletionStart + m[0].length;
          front = cardText.substring(0, deletionStart) + "<span style='color:#2196f3'>[...]</span>" + cardText.substring(deletionEnd);
          front = front.replace(/==/gm, "").replace(/\*\*/gm, "");
          back = cardText.substring(0, deletionStart) + "<span style='color:#2196f3'>" + cardText.substring(deletionStart, deletionEnd) + "</span>" + cardText.substring(deletionEnd);
          back = back.replace(/==/gm, "").replace(/\*\*/gm, "");
          siblingMatches.push([front, back]);
        }
      } else {
        let idx;
        if (cardType === CardType.SingleLineBasic) {
          idx = cardText.indexOf(settings.singlelineCardSeparator);
          siblingMatches.push([
            cardText.substring(0, idx),
            cardText.substring(idx + settings.singlelineCardSeparator.length)
          ]);
        } else if (cardType === CardType.SingleLineReversed) {
          idx = cardText.indexOf(settings.singlelineReversedCardSeparator);
          const side1 = cardText.substring(0, idx), side2 = cardText.substring(idx + settings.singlelineReversedCardSeparator.length);
          siblingMatches.push([side1, side2]);
          siblingMatches.push([side2, side1]);
        } else if (cardType === CardType.MultiLineBasic) {
          idx = cardText.indexOf("\n" + settings.multilineCardSeparator + "\n");
          siblingMatches.push([
            cardText.substring(0, idx),
            cardText.substring(idx + 2 + settings.multilineCardSeparator.length)
          ]);
        } else if (cardType === CardType.MultiLineReversed) {
          idx = cardText.indexOf("\n" + settings.multilineReversedCardSeparator + "\n");
          const side1 = cardText.substring(0, idx), side2 = cardText.substring(idx + 2 + settings.multilineReversedCardSeparator.length);
          siblingMatches.push([side1, side2]);
          siblingMatches.push([side2, side1]);
        }
      }
      let scheduling = [...cardText.matchAll(MULTI_SCHEDULING_EXTRACTOR)];
      if (scheduling.length === 0)
        scheduling = [...cardText.matchAll(LEGACY_SCHEDULING_EXTRACTOR)];
      if (scheduling.length > siblingMatches.length) {
        const idxSched = cardText.lastIndexOf("<!--SR:") + 7;
        let newCardText = cardText.substring(0, idxSched);
        for (let i = 0; i < siblingMatches.length; i++)
          newCardText += `!${scheduling[i][1]},${scheduling[i][2]},${scheduling[i][3]}`;
        newCardText += "-->";
        const replacementRegex = new RegExp(escapeRegexString(cardText), "gm");
        fileText = fileText.replace(replacementRegex, () => newCardText);
        fileChanged = true;
      }
      const context = settings.showContextInCards ? getCardContext(lineNo, headings) : "";
      const siblings = [];
      for (let i = 0; i < siblingMatches.length; i++) {
        const front = siblingMatches[i][0].trim(), back = siblingMatches[i][1].trim();
        const cardObj = {
          isDue: i < scheduling.length,
          note,
          lineNo,
          front,
          back,
          cardText,
          context,
          cardType,
          siblingIdx: i,
          siblings
        };
        if (i < scheduling.length) {
          const dueUnix = window.moment(scheduling[i][1], ["YYYY-MM-DD", "DD-MM-YYYY"]).valueOf();
          const nDays = Math.ceil((dueUnix - now) / (24 * 3600 * 1e3));
          if (!Object.prototype.hasOwnProperty.call(this.dueDatesFlashcards, nDays)) {
            this.dueDatesFlashcards[nDays] = 0;
          }
          this.dueDatesFlashcards[nDays]++;
          const interval = parseInt(scheduling[i][2]), ease = parseInt(scheduling[i][3]);
          if (!Object.prototype.hasOwnProperty.call(this.cardStats.intervals, interval)) {
            this.cardStats.intervals[interval] = 0;
          }
          this.cardStats.intervals[interval]++;
          if (!Object.prototype.hasOwnProperty.call(this.cardStats.eases, ease)) {
            this.cardStats.eases[ease] = 0;
          }
          this.cardStats.eases[ease]++;
          totalNoteEase += ease;
          scheduledCount++;
          if (interval >= 32) {
            this.cardStats.matureCount++;
          } else {
            this.cardStats.youngCount++;
          }
          if (this.data.buryList.includes(cardTextHash)) {
            this.deckTree.countFlashcard([...deckPath]);
            continue;
          }
          if (dueUnix <= now) {
            cardObj.interval = interval;
            cardObj.ease = ease;
            cardObj.delayBeforeReview = now - dueUnix;
            this.deckTree.insertFlashcard([...deckPath], cardObj);
          } else {
            this.deckTree.countFlashcard([...deckPath]);
            continue;
          }
        } else {
          this.cardStats.newCount++;
          if (this.data.buryList.includes(cyrb53(cardText))) {
            this.deckTree.countFlashcard([...deckPath]);
            continue;
          }
          this.deckTree.insertFlashcard([...deckPath], cardObj);
        }
        siblings.push(cardObj);
      }
    }
    if (fileChanged) {
      await this.app.vault.modify(note, fileText);
    }
    if (scheduledCount > 0) {
      const flashcardsInNoteAvgEase = totalNoteEase / scheduledCount;
      const flashcardContribution = Math.min(1, Math.log(scheduledCount + 0.5) / Math.log(64));
      return flashcardsInNoteAvgEase * flashcardContribution + settings.baseEase * (1 - flashcardContribution);
    }
    return 0;
  }
  async loadPluginData() {
    this.data = Object.assign({}, DEFAULT_DATA, await this.loadData());
    this.data = removeLegacyKeys(this.data, DEFAULT_DATA);
    this.data.settings = Object.assign({}, DEFAULT_SETTINGS, this.data.settings);
    this.data.settings = removeLegacyKeys(this.data.settings, DEFAULT_SETTINGS);
  }
  async savePluginData() {
    await this.saveData(this.data);
  }
  initView() {
    if (this.app.workspace.getLeavesOfType(REVIEW_QUEUE_VIEW_TYPE).length) {
      return;
    }
    this.app.workspace.getRightLeaf(false).setViewState({
      type: REVIEW_QUEUE_VIEW_TYPE,
      active: true
    });
  }
};
function getCardContext(cardLine, headings) {
  const stack = [];
  for (const heading of headings) {
    if (heading.position.start.line > cardLine) {
      break;
    }
    while (stack.length > 0 && stack[stack.length - 1].level >= heading.level) {
      stack.pop();
    }
    stack.push(heading);
  }
  let context = "";
  for (const headingObj of stack) {
    headingObj.heading = headingObj.heading.replace(/\[\^\d+\]/gm, "").trim();
    context += headingObj.heading + " > ";
  }
  return context.slice(0, -3);
}
