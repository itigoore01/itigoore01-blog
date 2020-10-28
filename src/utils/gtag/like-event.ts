import { gtag } from './gtag';

export interface LikeEventParams {
  contentType: string;
  contentId: string;
}

export function sendLikeEvent({ contentType, contentId }: LikeEventParams) {
  gtag('event', 'like', {
    content_type: contentType,
    content_id: contentId,
  });
}
