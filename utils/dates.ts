function getOrdinal(n: number): string {
  let s = ['th', 'st', 'nd', 'rd'],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export function formatDate(dateString: string): string {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let date = new Date(dateString);

  let hours = date.getUTCHours().toString().padStart(2, '0');
  let minutes = date.getUTCMinutes().toString().padStart(2, '0');
  let seconds = date.getUTCSeconds().toString().padStart(2, '0');

  let day = getOrdinal(date.getUTCDate());
  let month = months[date.getUTCMonth()];
  let year = date.getUTCFullYear();

  return `${day} ${month} ${year} ${hours}:${minutes}:${seconds}`;
}
