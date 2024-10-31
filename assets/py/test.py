import pyautogui

pyautogui.FAILSAFE = False
pyautogui.moveTo(100,100)

for i in range(5) :
    pyautogui.move(500, 0, duration=1)
    pyautogui.move(0, 500, duration=1)
    pyautogui.move(-500, 0, duration=1)
    pyautogui.move(0,- 500, duration=1)