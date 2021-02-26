import pyautogui
from time import sleep

sleep(2)
for i in range(20):
    pyautogui.hotkey('ctrl','v')
    sleep(0.3)
    pyautogui.press('enter')
    sleep(0.3)
