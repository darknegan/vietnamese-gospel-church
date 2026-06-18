import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

/**
 * Sacred Minimal preset — maps PrimeNG's primary ramp onto the church's
 * deep-crimson brand color so all PrimeNG components inherit the theme.
 */
export const VgcPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#fbf1f2',
      100: '#f4dade',
      200: '#e6b3bc',
      300: '#d68b98',
      400: '#c26375',
      500: '#a82e40',
      600: '#8a2433',
      700: '#71202c',
      800: '#5c1b25',
      900: '#4b1820',
      950: '#2a0d11',
    },
    colorScheme: {
      light: {
        primary: {
          color: '#8a2433',
          contrastColor: '#ffffff',
          hoverColor: '#71202c',
          activeColor: '#5c1b25',
        },
        highlight: {
          background: 'rgba(138, 36, 51, 0.1)',
          focusBackground: 'rgba(138, 36, 51, 0.16)',
          color: '#71202c',
          focusColor: '#5c1b25',
        },
      },
    },
  },
});
