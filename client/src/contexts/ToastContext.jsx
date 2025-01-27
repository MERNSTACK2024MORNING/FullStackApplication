import { createContext, useContext, useState, useCallback, Children } from 'react';
import { } from '../components/ToastContainer';

const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
      const [toasts, setToasts] = useState([])
      const addToast = useCallback((message, type = 'success') => {
            const id = Date.now();
            setToasts((prev) => [...prev, { id, message, type }]);
            setTimeout(() => {
                  setToasts((prev) => prev.filter((toast) => toast.id !== id))
            }, 5000)
      }, [])

      const removeToast = useCallback((id) => {
            setToasts((prev) => prev.filter((toast) => toast.id !== id))
      }, [])
      return (
            <ToastContext.Provider value={{ addToast }}>
                  {children}
                  <ToastContainer toasts={toasts} removeToast={removeToast} />
            </ToastContext.Provider>
      )
}

export const useToast = () => {
      const context = useContext(ToastContext)
      if (!context) {
            throw new Error('useToast must be within a toastProvider')
      }
      return context
}