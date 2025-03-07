function formatTime([ms, s, m, h]) {
    const pad = (num, size) => String(num).padStart(size, '0');
    return `${pad(h, 2)}:${pad(m, 2)}:${pad(s, 2)}:${pad(ms, 3)}`;
  }

  export default formatTime;