from textstat.textstat import textstat
import fileinput

test_data = ""

for line in fileinput.input():
    test_data = test_data + line

print("words: {0}".format(textstat.lexicon_count(test_data)))
print("sentances: {0}".format(textstat.sentence_count(test_data)))
print("syllables: {0}".format(textstat.syllable_count(test_data)))

print("flesch: {0}".format(textstat.flesch_reading_ease(test_data)))

# print textstat.smog_index(test_data)
# print textstat.flesch_kincaid_grade(test_data)  print textstat.coleman_liau_index(test_data)
# print textstat.automated_readability_index(test_data)
# print textstat.dale_chall_readability_score(test_data)
# print textstat.difficult_words(test_data)
# print textstat.linsear_write_formula(test_data)
# print textstat.gunning_fog(test_data)
# print textstat.text_standard(test_data)