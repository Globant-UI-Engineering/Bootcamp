export const FILTER_FUNCTIONS = Object.freeze({
  all: v => true,
  done: v => v.checked,
  pending: v => !v.checked,
});
