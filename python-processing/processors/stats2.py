from collections import Counter
import fileinput
from pprint import pprint

test_data = ""

for line in fileinput.input():
    test_data = test_data + line

test_data = test_data.lower()

word_freq = Counter(test_data.split()).most_common(10)
let_freq = Counter(test_data).most_common(10)

pprint(word_freq)
pprint(let_freq)