export function formatDate(utcDateString: string): string {
  const date = new Date(utcDateString);

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // getMonth() is zero-based
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const paddedMonth = month < 10 ? '0' + month : month;
  const paddedDay = day < 10 ? '0' + day : day;
  const paddedHours = hours < 10 ? '0' + hours : hours;
  const paddedMinutes = minutes < 10 ? '0' + minutes : minutes;
  const paddedSeconds = seconds < 10 ? '0' + seconds : seconds;

  const formattedDate = `${year}-${paddedMonth}-${paddedDay} ${paddedHours}:${paddedMinutes}:${paddedSeconds}`;

  return formattedDate;
}
