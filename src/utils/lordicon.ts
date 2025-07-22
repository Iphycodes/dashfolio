import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

export const initLordIcon = () => {
  defineElement(lottie.loadAnimation);
};
