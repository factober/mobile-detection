# Mobile Detection NPM Package

A lightweight JavaScript library for detecting mobile devices.

## Installation

```bash
npm install mobile-detection

## Usage
    
```javascript
import { isMobile } from 'mobile-detection';

if (isMobile()) {
  // Mobile device detected
  // Add your mobile-specific code here
} else {
  // Desktop device detected
  // Add your desktop-specific code here
}

## Sample Vue 3 Setup API Component

```vue
<template>
  <div>
    <div v-if="isMobileValue">Mobile content</div>
    <div v-else>Desktop content</div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { isMobile } from 'mobile-detection';

export default {
  setup() {
    const isMobileValue = ref(false);

    const detectMobile = () => {
      isMobileValue.value = isMobile();
    };

    onMounted(() => {
      detectMobile();
      window.addEventListener('resize', detectMobile);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', detectMobile);
    });

    return {
      isMobile: isMobileValue
    };
  }
};
</script>


## API Reference
### isMobile()
Check if the current device is a mobile device.

Returns: boolean - true if the device is mobile, false otherwise.

## Contributing
Contributions are welcome! Please follow these guidelines when contributing to this project:

Fork the repository and clone it locally.
Create a new branch for your feature or bug fix.
Implement your changes and write tests if applicable.
Ensure all tests pass by running npm run test.
Commit your changes and push to your forked repository.
Submit a pull request to the main branch of the original repository.

## License
This project is licensed under the MIT License.