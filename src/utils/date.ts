export function formatJPDate(date: Date): string {
  const formatter = new Intl.DateTimeFormat('ja-JP', {
    timeZone: 'Asia/Tokyo',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const weekdayFormatter = new Intl.DateTimeFormat('ja-JP', {
    timeZone: 'Asia/Tokyo',
    weekday: 'short',
  });

  const formatted = formatter.format(date);
  const weekday = weekdayFormatter.format(date).replace('曜日', '');

  return `${formatted}(${weekday})`;
}
