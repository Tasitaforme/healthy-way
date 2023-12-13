export const toastOptions = {
  // Set default for all toasts
  duration: 2000,
  style: {
    color: '#0f0f0f',
    boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.2)',
  },

  // Set default for specific types
  success: {
    style: {
      background: `#e3ffa8`,
    },
    iconTheme: {
      primary: '#3cbc81',
      secondary: 'white',
    },
  },

  error: {
    style: {
      background: '#e3ffa8',
    },
    iconTheme: {
      primary: '#e74a3b',
      secondary: 'white',
    },
  },
};
