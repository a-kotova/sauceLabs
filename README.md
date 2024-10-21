# Setup and Execution


## Prerequisites

Before running the project, make sure you have the following installed on your machine:

1. **Node.js**
    - Install from the official [Node.js website](https://nodejs.org/).
    - Verify installation by running:
      ```bash
      node -v
      npm -v
      ```

2. **Java Development Kit (JDK)**
    - Download and install the latest version of JDK (version 8 or higher) from [Oracle's official website](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html).
    - Or use Homebrew (on macOS) to install:
      ```bash
      brew install openjdk
      ```
    - Verify installation by running:
      ```bash
      java -version
      ```

3. **Android Studio**
    - Download and install [Android Studio](https://developer.android.com/studio).
    - Make sure the Android SDK is properly configured in **Preferences > Appearance & Behavior > System Settings > Android SDK**.
    - Add Android SDK tools to your PATH by adding these lines to your shell configuration (`.bashrc`, `.zshrc`, etc.):
      ```bash
      export ANDROID_HOME=$HOME/Library/Android/sdk
      export PATH=$PATH:$ANDROID_HOME/emulator
      export PATH=$PATH:$ANDROID_HOME/tools
      export PATH=$PATH:$ANDROID_HOME/tools/bin
      export PATH=$PATH:$ANDROID_HOME/platform-tools
      ```

4. **Android Emulator**
    - Set up an emulator via **AVD Manager** in Android Studio. Ensure the emulator is running before running tests.


5. **Xcode (for iOS)**
    - Install Xcode from the Mac App Store.
    - Open Xcode, agree to the license agreements, and make sure all required components are installed.


6. **Xcode Command Line Tools**
    - Install Xcode Command Line Tools by running:
      ```bash
      xcode-select --install
      ```

7. **Carthage**
    - Carthage is required for managing iOS dependencies.
    - Install Carthage using Homebrew:
      ```bash
      brew install carthage
      ```

8. **iOS Simulator**
    - The iOS Simulator is included with Xcode. Ensure the appropriate simulators are installed by going to **Xcode > Preferences > Components**.


9. **Appium**
    - Install Appium globally using npm:
      ```bash
      npm install -g appium
      ```
    - Verify Appium installation by running:
      ```bash
      appium -v
      ```
      
## Installation
To install the framework, clone the repository, `cd` into the folder and run` npm i`

## .env file
You will need a .env file containing the following keys:

| Key                  | Description             
|:---------------------| :-------------------------
| **PASSWORD**         | Valid user password
| **PLATFORM_VERSION** | OS version of the emulator
| **DEVICE_NAME**      | Name of the emulator


## Running tests 
To run the tests use the following commands:

`npm run test:ios`  
`npm run test:android`

## Comments
The framework includes the following scenarios:

- Placing the order.
- Removing the product from the cart.
- Validating error messages when required fields are left empty on the login screen.

While the framework is functional, it has a significant limitation: the lack of a general method for performing page scrolling that is compatible with both Android and iOS. The current scrolling solution works, but it is more of a workaround (crutch). As the framework will grow, this approach will be difficult to maintain, introducing complexity and "dirty" code.
