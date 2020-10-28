import { gtag } from './gtag';

export interface ShareEventParams {
  method: string;
  contentType: string;
  contentId: string;
}

export function sendShareEvent({
  method,
  contentType,
  contentId,
}: ShareEventParams) {
  gtag('event', 'share', {
    method,
    content_type: contentType,
    content_id: contentId,
  });
}
