export const toastOptions = {
  // Set default for all toasts
  duration: 2000,
  style: {
    color: 'white',
    boxShadow: '0px 4px 12px 4px rgba(0,0,0,0.5)',
  },

  // Set default for specific types
  success: {
    style: {
      background: `#007aff`,
    },
    iconTheme: {
      primary: 'green',
      secondary: 'white',
    },
  },

  error: {
    style: {
      background: '#007aff',
    },
    iconTheme: {
      primary: 'red',
      secondary: 'white',
    },
  },
};
