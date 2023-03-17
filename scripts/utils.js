export function toggleFormSubmit(elementSubmit, { disable }) {
  if (disable) {
    elementSubmit.removeAttribute('disabled');
  } else {
    elementSubmit.setAttribute('disabled', 'disabled');
  }
};

export function focusHandler(target) {
  target.select()
};
