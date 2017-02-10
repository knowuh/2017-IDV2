# Class 05 – 2017-02-07


## Class 5 of 14
Two more classes until midterm proposals due.
 

### Comments about process.
Think of me as your client. Your job is to inspire confidence and get me to continue to engage with your  services. As part of this process, you should be trying to constrain, focus, and refine your design through a series of briefs, proposals, and mock-ups. 


## Second briefs:
This week we looking at your proposals and asking:

  * How well you have defined and constrained the project goals?
  * Have you identified the text source?
  * Do you have access to the data?
  * Is your idea feasible, something that can be achieved in 8 weeks?
  * Have you identified an audience and medium?
  
      
## Homework: single-page visual mock-up
Given the design constraints from this weeks homework and feedback, you will be producing 3 mock-ups for your final project. Your final project may include several ways to look a the same information. For this homework assignment complete three separate pages. They might be three different proposals for visualizing the same information, or perhaps examples of three kind of data to look at.   


## Simple text metrics from the command line
These are old unix commands. They exist in many places:

* `curl` to pull down text, eg: `curl https://www.gutenberg.org/files/1342/1342-0.txt > ./pride-and-prejudice.txt`
* `wc` to count lines, words, and bytes. eg: `wc pride-and-prejudice.txt`
* `split` to split up text. eg:  `split -l 500 ./pride-and-prejudice.txt pride-`
* `cat` to print text from file. eg: `cat pride-and-prejudice.txt`
* `head` and `tail` to look at the first and last lines.  eg: `head pride-and-prejudice.txt | pbcopy`
* `grep` to filter or count words matching a pattern. eg:  `grep -i -rohe prejudice ./pride-and-prejudice.txt | wc -w`



## Links from class ## 
* [voyant tools](http://voyant-tools.org/)
* [google natural language](https://cloud.google.com/natural-language/)
* [Monkey Learn](http://monkeylearn.com/)