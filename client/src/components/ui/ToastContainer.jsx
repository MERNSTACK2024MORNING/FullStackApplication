import {createPortal} from 'react-dom';
import  Toast from './Toast'

const ToastContainer = ({toasts,removeToasts})=>{
      return createPortal(
            <div className='fixed bottom-4 right-4 z-50 space-y-4 min-w-[320px] max-w-[420px]'>
            {
                  toasts.map((toast)=>(
                        <Toast
                        key={toast.id}
                        message={toast.message}
                        type={toast.type}
                        onClose={()=>removeToasts(toast.id)}
                        />
                  ))
            }
            </div>,
            document.body
      )
}

export default ToastContainer;