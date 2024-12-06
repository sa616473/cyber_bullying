# Cyber Bullying Detection

This project implements a machine learning-based approach to detect and classify instances of cyberbullying from social media text data. It leverages natural language processing (NLP) techniques and various classification models to identify harmful or abusive language, providing a step towards creating safer online spaces.

## Prerequisites
- Python 3.10.15 (Recommended)
- pip3
- Chrome Browser
- Git (optional, but recommended)

## Setup Instructions

### Step 1: Environment Setup
```bash
# Navigate to the model directory
cd model

# Create a virtual environment
python3.10 -m venv model-env

# Activate the virtual environment
source model-env/bin/activate  # On Unix/macOS
# Or
model-env\Scripts\activate     # On Windows

# Install required dependencies
pip3 install -r requirements.txt
```

### Step 2: Chrome Extension Installation
1. Open Google Chrome
2. Navigate to `chrome://extensions/`
3. Enable "Developer mode" (toggle switch in the top right corner)
4. Click "Load unpacked"
5. Select the `chrome_ext` folder from your project directory

### Step 3: Running the Model
```bash
# Ensure you're in the model directory and virtual environment is activated
python3.10 model.py
```

### Step 4: Testing
Open `test.html` in your Chrome browser to verify the extension's functionality.

## Project Components
- `model/`: Contains the machine learning model and preprocessing scripts
- `chrome_ext/`: Chrome browser extension files
- `test.html`: Sample HTML page for testing cyberbullying detection

## Troubleshooting
- Ensure Python version compatibility (3.10 or lower)
- Verify all dependencies are installed correctly
- Check Chrome extension permissions if detection doesn't work

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
