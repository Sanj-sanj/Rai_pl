export default function checkIsCurrentPage(e, style) {
  if (e.target.className.includes("currentPage--")) {
    addStretch(e, style)
  }
  return
}

function addStretch(e, style) {
  setTimeout(() => {
    e.target.classList.add(style)
  }, 400)
}
