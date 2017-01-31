# Class 04 – 2017-01-31:

## Review people cards

## Class 4 of 14
Three more classes until midterm proposals due.s
 

## First draft of briefs:
As your work is being reviewed, take notes for revision, new directions, or challenges.

As you are looking at work, consider these questions:
 * What is the 'text' of the brief?
     * What aspect of the 'text' are we looking at?
 * Is it qualitative / quantitative / subjective?
 * Is it an editorial / narrative / analysis / index?
 * How does the visual strategy align with subject?
 * Who cares?  (c. Hiroshi Iishi)
     * Why is the text interesting?
     * Why is the analysis / visualization interesting?
 * What similar projects have been attempted in the past?
 * What are the design challenges?
 * What are the data / technology challenges?
    
## Homework:
Revision. Pick one of your previous briefs, and find out as much as you can about it. What data exists, what similar work has been done in the past. What are the technical challenges? Incorporate this research and produce 3 new briefs.

## Simple text metrics from the command line
These are old unix commands. They exist in many places:

* `curl` to pull down text, eg: `curl https://www.gutenberg.org/files/1342/1342-0.txt > ./pride-and-prejudice.txt`
* `wc` to count lines, words, and bytes. eg: `wc pride-and-prejudice.txt`
* `split` to split up text. eg:  `split -l 500 ./pride-and-prejudice.txt pride-`
* `cat` to print text from file. eg: `cat pride-and-prejudice.txt`
* `head` and `tail` to look at the first and last lines.  eg: `head pride-and-prejudice.txt | pbcopy`
* `grep` to filter or count words matching a pattern. eg:  `grep -i -rohe prejudice ./pride-and-prejudice.txt | wc -w`


## Python:
* readability `stats.py`
* word frequency `stats2.py`
* word frequency compared to a corpus `stats3.py`



