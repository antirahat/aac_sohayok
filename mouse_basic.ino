#include <Wire.h>
#include <MPU6050.h>
#include <Mouse.h>

MPU6050 mpu;
int16_t ax, ay, az, gx, gy, gz;
int vx, vy;
// Kalman filter variables
float X_est = 0.0;  // Estimated state
float P = 1.0;     // Initial estimate error covariance
float Q = 0.01;    // Process noise
float R = 0.1;     // Measurement noise
float K;           // Kalman gain
 
void setup() {
  Serial.begin(9600);
  pinMode(16, INPUT_PULLUP);  // LEFT CLICK
  pinMode(10, INPUT_PULLUP);  // Right click
  while (!Serial);  // Wait for Serial to open
  delay(4000);  // Additional delay
  Serial.println("Hello, code start");
  Wire.begin();
  Serial.println("I2C begin");
  mpu.initialize();
  Serial.println("MPU Sensor Initializing...");
  if (!mpu.testConnection()) {
    while (1);  // Wait infinitely until the sensor initializes.
  }
  Serial.println("Sensor initialized");
}



void loop() {
  mpu.getMotion6(&ax, &ay, &az, &gx, &gy, &gz);
  // Apply Kalman filter to smooth sensor data
  K = P / (P + R);
  X_est = X_est + K * (gy - X_est);
  P = (1 - K) * P + Q;

  // Convert the filtered gyro readings to cursor movement
  vx = -(int)(X_est + 260) / 150/2;  // Change 300 from 0 to 355
  vy = (int)(gz + 100) / 150/2;     // Same here about "-100" from -355 to 0

  Serial.print("gx = ");
  Serial.print(gx);
  Serial.print(" | gz = ");
  Serial.print(gz);
  Serial.print("        | X = ");
  Serial.print(vx);
  Serial.print(" | Y = ");
  Serial.println(vy);

  int buttonState1 = digitalRead(16); // Check left click
  int buttonState2 = digitalRead(10); // Check right click

  if (buttonState1 == LOW) {
    Mouse.press(MOUSE_LEFT);
    delay(100);
    Mouse.release(MOUSE_LEFT);
    delay(200);
  } else if (buttonState2 == LOW) {
    Mouse.press(MOUSE_RIGHT);
    delay(100);
    Mouse.release(MOUSE_RIGHT);
    delay(200);
  }

Mouse.move(-vy, -vx);
delay(20);

}
