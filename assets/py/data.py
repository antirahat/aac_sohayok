import socket
import pyautogui

pyautogui.FAILSAFE = False


# Receive the data
while True :
    # ESP8266 IP and port
    esp8266_ip = "192.168.13.96"
    port = 80

    # Create a socket and connect to the ESP8266
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.connect((esp8266_ip, port))
    data = s.recv(1024).decode('utf-8')
    data = data.split(",")
    data = list(map(int, data))
    pyautogui.move(data[0],data[1], duration=0.1)
    print("Received data: ", data)

# Close the connection
# s.close()
