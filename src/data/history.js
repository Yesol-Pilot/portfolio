import { manualHistory } from './history_manual';
import { autoHistory } from './history_auto';

// 최신 자동 생성 기록을 맨 위에, 그 다음 수동 기록을 배치
export const patchNotes = [
    ...autoHistory,
    ...manualHistory
];
