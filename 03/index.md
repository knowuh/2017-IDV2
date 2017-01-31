# Class 03 – 2017-01-17:

## Review people cards

## Historical text visualizations:


## Homework:
Present 3 Briefs each one a single page. (pdf / print / or web).

These briefs should present three different potential final project topics.

Your ideas do not need to be complete, But the briefs should convey your nascent ideas well.
We are still in an expansive phase, so present unorthodox ideas. Challenge us.

While you are working, think about these questions:

* What is the 'text' text in your proposal?
* here does it come from? (how will you get it?)
* What is the 'data'?
    * What aspect of the 'text' are we looking at?
    * Qualitative / Quantitative?
* What is your visual strategy?
* Who cares?  (c. Hiroshi Iishi)
    * Why is the text interesting?
    * Why is the analysis / visualization interesting?
    * Editorial ? Analytical ? exploratory?
* What similar projects have been attempted in the past?
* What are the big challenges?

You needn't have good answers to all the above questions, but give them some thought.
You may address these questions in the brief itself,


## Miscellanea:
* [Forgotten english letters](https://omgfacts.com/we-used-to-have-6-more-letters-in-our-alphabet-a7e1a165853d#.le6xty581)
* [English letter Frequency](https://en.wikipedia.org/wiki/Letter_frequency)
* [10000 most common english words](https://github.com/first20hours/google-10000-english/blob/master/google-10000-english.txt)


## Simple text metrics from the command line
These are old unix commands. They exist in many places:

* `curl` to pull down text, eg: `curl https://www.gutenberg.org/files/1342/1342-0.txt > ./pride-and-prejudice.txt`
* `wc` to count lines, words, and bytes. eg: `wc pride-and-prejudice.txt`
* `split` to split up text. eg:  `split -l 500 ./pride-and-prejudice.txt pride-`
* `cat` to print text from file. eg: `cat pride-and-prejudice.txt`
* `head` and `tail` to look at the first and last lines.  eg: `head pride-and-prejudice.txt | pbcopy`
* `grep` to filter or count words matching a pattern. eg:  `grep -i -rohe prejudice ./pride-and-prejudice.txt | wc -w`

## Examples using python:

* readability `stats.py`
* word frequency `stats2.py`
* TBD: stop words and term weights.

## Text metric web services:
* [readability score](https://readability-score.com/text/)
* [usingenglish.com](https://www.usingenglish.com/resources/text-statistics.php)


## Machine Learning APIs
* [google natural language service](https://cloud.google.com/natural-language/)
* [Monkey Learn](https://app.monkeylearn.com/main/classifiers/cl_qkjxv9Ly/tab/api-tab/)





