from credentials import username, password
from watson_developer_cloud import ToneAnalyzerV3
from dotmap import DotMap


class WatsonTone(object):
    def __init__(self):
        self.tone_analyzer = ToneAnalyzerV3(
            username=username,
            password=password,
            version='2016-05-19')

    def get_tone(self, text):
        results = DotMap(self.tone_analyzer.tone(text=text))
        tones = results.document_tone.tone_categories[0].tones
        return self.dominant_tone(tones)

    @staticmethod
    def dominant_tone(tone_list):
        dominant = None
        for tone in tone_list:
            if dominant is None:
                dominant = tone
            if tone.score > dominant.score:
                dominant = tone
        return dominant


if __name__ == "__main__":
    text = 'A word is dead when it is said, some say. Emily Dickinson'
    wt = WatsonTone()
    print(wt.get_tone(text))