import pyttsx3

# Initialize the TTS engine
engine = pyttsx3.init()

# Set properties (optional)
engine.setProperty('rate', 150)    # Speed of speech
engine.setProperty('volume', 1.0)  # Volume level (0.0 to 1.0)

# Get available voices
voices = engine.getProperty('voices')

# Set voice (optional)
engine.setProperty('voice', voices[1].id)  # Choose voice (0: Male, 1: Female)

# Input text to be spoken
text = "khankirpola"

# Convert text to speech
engine.say(text)

# Wait and finish
engine.runAndWait()
