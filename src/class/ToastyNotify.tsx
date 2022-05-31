import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class ToastyNotify {
  static errorMessage = (message: string) => {
    toast.error(message, {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 3000,
    });
  };
  static successMessage = (message: string) => {
    toast.success(message, {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 3000,
    });
  };
}
