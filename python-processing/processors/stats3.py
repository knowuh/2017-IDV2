from collections import Counter
import fileinput
from pprint import pprint
import re

nonwords = re.compile(r"[^a-z]+")

def clean(line):
    return re.sub(nonwords, " ", line.lower())

def scores_from_file(filename):
    test_data = ""
    for line in file(filename):
        test_data = test_data + clean(line)

    return Counter(test_data.split())

corpus_file_name = "pride-and-prejudice.txt"
corp = scores_from_file(corpus_file_name)

for section in("aa ab ac ad ae af ag ah ai aj ak al am an ao ap".split()):
    page_name = "pride-" + section
    page_scores = scores_from_file(page_name)
    page_scores.subtract(corp)
    pprint(page_scores.most_common(2))

