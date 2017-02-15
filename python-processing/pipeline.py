from collections import OrderedDict
import csv
from processors.base import BaseProcessor
from processors.watson_tone import WatsonTone


class Pipeline(object):

    def __init__(self, filename, source_column_name):
        self.rows = []
        self.processors = []
        self.source_column_name = source_column_name
        (name, extension) = filename.split(".")
        self.out_name = name + "-out." + extension
        with open(filename) as f:
            reader = csv.DictReader(f)
            for row in reader:
                self.rows.append(OrderedDict(row))

    def add_processor(self, processor):
        self.processors.append(processor)

    def write(self):
        with open(self.out_name, "w") as f:
            headers = self.rows.pop(0)
            writer = csv.DictWriter(f,fieldnames=headers)
            writer.writeheader()
            for row in self.rows:
                writer.writerow(row)

    def process_row(self, row):
        for processor in self.processors:
            processor.process(row[self.source_column_name], row)

    def process(self):
        for row in self.rows:
            self.process_row(row)
        self.write()

if __name__ == "__main__":
    p = Pipeline('test.csv', 'text')
    p.add_processor(WatsonTone())
    p.process();


