class BaseProcessor(object):
    def __init__(self, _name):
        self.name = _name

    def do_processing(self, text):
        result = "No implememntation. Subclasses should do something"
        return result

    def process(self, text, row):
        result = self.do_processing(text)
        row[self.name]= result
