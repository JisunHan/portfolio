/** Single source for project case-study section order, anchors, and labels (scan-friendly for recruiters). */
export const PROJECT_DETAIL_SECTIONS = [
  { id: 'overview', label: 'Overview', title: 'Overview', eyebrow: 'Context' },
  { id: 'problem', label: 'Problem', title: 'Problem', eyebrow: 'Challenge' },
  { id: 'role', label: 'My role', title: 'My role', eyebrow: 'Contribution' },
  { id: 'solution', label: 'Solution', title: 'Solution', eyebrow: 'Approach' },
  { id: 'result', label: 'Result', title: 'Result', eyebrow: 'Impact' },
  { id: 'technical', label: 'Technical decisions', title: 'Technical decisions', eyebrow: 'Engineering' },
  { id: 'retro', label: 'Retrospective', title: 'Retrospective', eyebrow: 'Learnings' },
] as const;

export type ProjectDetailSectionId = (typeof PROJECT_DETAIL_SECTIONS)[number]['id'];
