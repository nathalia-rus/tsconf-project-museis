// CATEGORIES
export const OCategory = {
    Literature: 'LITERATURE',
    Paintings: 'PAINTINGS',
    ClassicalMusic: 'CLASSICALMUSIC',
    Sculptures: 'SCULPTURES',
} as const

export type Category = typeof OCategory[keyof typeof OCategory]

// NAVIGATION
export const ONavigationItem = {
    ...OCategory,
    Home: 'HOME',
    Questionnaire: 'QUESTIONNAIRE',
    Categories: 'CATEGORIES',
} as const

export type NavigationItem =
    typeof ONavigationItem[keyof typeof ONavigationItem]

// FORM TYPES
export const OFormType = {
    checkbox: 'CHECKBOX',
    radio: 'RADIO',
    rating: 'RATING',
} as const

export type FormType = typeof OFormType[keyof typeof OFormType]

// RATING TYPES
export const ORatingType = {
    heart: 'HEART',
    sentiment: 'SENTIMENT',
    grade: 'GRADE',
} as const

export type RatingType = typeof ORatingType[keyof typeof ORatingType]

// TYPOGRAPHY TYPES
export const OTypographyStyle = {
    Default: 'DEFAULT',
    Narrow: 'NARROW',
    Large: 'LARGE',
    Center: 'center',
    Left: 'left',
    Right: 'right',
} as const

export type TypographyStyle =
    typeof OTypographyStyle[keyof typeof OTypographyStyle]

// TYPOGRAPHY TYPES
export const OMyIcon = {
    Logo: 'LOGO',
    DoubleArrows: 'DOUBLEARROWS',
    SomethingElse: 'SOMETHINGELSE',
    Close: 'CLOSE',
} as const

export type MyIcon = typeof OMyIcon[keyof typeof OMyIcon]

// ORIENTATION TYPES
export const OOrientation = {
    Up: 'UP',
    Down: 'DOWM',
} as const

export type Orientation = typeof OOrientation[keyof typeof OOrientation]

// ORIENTATION TYPES
export const OBtn = {
    Primary: 'PRIMARY',
    Naked: 'NAKED',
    Close: 'CLOSE',
} as const

export type Btn = typeof OBtn[keyof typeof OBtn]

// ORIENTATION TYPES
export const OColourPalette = {
    primary: 'var(--color-primary)',
} as const

export type ColourPalette = typeof OColourPalette[keyof typeof OColourPalette]

// declare module 'o' {}
