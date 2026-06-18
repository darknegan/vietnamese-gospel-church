/**
 * Centralized asset paths. Files live in `public/assets/**` and are served
 * from the site root. Some source folders/filenames contain spaces, so paths
 * are passed through `encodeURI` for safe use in `src`/`href`.
 */
function asset(path: string): string {
  return encodeURI(`/assets/${path}`);
}

export const LOGO = asset('logo/vietnamese gospel logo.jpg');

export const SINGING = [
  asset('singing/1000013307.jpg'),
  asset('singing/1000013358.jpg'),
  asset('singing/1000013364.jpg'),
  asset('singing/1000015299.jpg'),
  asset('singing/1000015318.jpg'),
  asset('singing/1000015322.jpg'),
];

export const PEOPLE = [
  asset('people/1000015303.jpg'),
  asset('people/1000015304.jpg'),
  asset('people/1000015305.jpg'),
  asset('people/1000015306.jpg'),
  asset('people/1000015307.jpg'),
  asset('people/1000015308.jpg'),
  asset('people/1000015309.jpg'),
  asset('people/1000014613.jpg'),
  asset('people/1000014621.jpg'),
  asset('people/1000014625.jpg'),
];

export const KIDS = [
  asset('kids/1000015310.jpg'),
  asset('kids/1000015313.jpg'),
  asset('kids/1000015320.jpg'),
  asset('kids/1000014258.jpg'),
  asset('kids/1000014260.jpg'),
  asset('kids/1000014261.jpg'),
];

export const TEACHING = [
  asset('teaching/1000014257.jpg'),
  asset('teaching/1000014429.jpg'),
  asset('teaching/1000014629.jpg'),
  asset('teaching/1000015293.jpg'),
  asset('teaching/1000015294.jpg'),
  asset('teaching/1000015302.jpg'),
];

export const FOOD = [
  asset('food/1000014601.jpg'),
  asset('food/1000014617.jpg'),
  asset('food/1000015312.jpg'),
  asset('food/1000015316.jpg'),
];

export const TET = [
  asset('tet holiday/1000013303.jpg'),
  asset('tet holiday/1000013307.jpg'),
  asset('tet holiday/1000013319.jpg'),
  asset('tet holiday/1000013323.jpg'),
  asset('tet holiday/1000013331.jpg'),
  asset('tet holiday/1000013343.jpg'),
  asset('tet holiday/1000013358.jpg'),
  asset('tet holiday/1000015314.jpg'),
  asset('tet holiday/1000015315.jpg'),
];

export const COMMUNION = asset('communion/1000014633.jpg');
export const PASTOR = asset('pastors/1000014986.jpg');
export const HEADSHOT = asset('headshots/DSC_1270ret.jpg');

/** Curated, varied set for the home + gallery photo stories. */
export const GALLERY = [
  SINGING[0],
  TET[0],
  KIDS[0],
  FOOD[0],
  PEOPLE[0],
  TEACHING[0],
  TET[2],
  SINGING[2],
  KIDS[1],
  PEOPLE[2],
  TET[4],
  FOOD[2],
];

export const HERO_WORSHIP = SINGING[0];
