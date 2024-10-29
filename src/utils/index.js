export const formatString = (input) => {
  if (typeof input !== 'string') {
    throw new TypeError('formatString expects a string');
  }

  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '-');
};

export const navigateUrl = (url) => {
  window.location.href = url;
};

export const outputString = (text) => {
  return text.replace(/(\d+\.\s)/g, '\n$1');
};
