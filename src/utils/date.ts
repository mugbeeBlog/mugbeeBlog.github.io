const WEEKDAYS_JA = ['日', '月', '火', '水', '木', '金', '土'] as const;

export function formatJPDate(date: Date): string {
  const weekday = WEEKDAYS_JA[date.getDay()];
  const formatted = date.toLocaleDateString('ja-JP', {
    timeZone: 'Asia/Tokyo',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return `${formatted}(${weekday})`;
}
