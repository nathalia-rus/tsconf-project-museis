// GLOBAL STYLES TYPES
export const OColourPalette = {
    primary: 'var(--color-primary)',
     light: 'var(--color-light)',

} as const

export type ColourPalette = typeof OColourPalette[keyof typeof OColourPalette]

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
    // rating_heart: 'RATING_HEART',
    //  rating_sentiment: 'RATING_SENTIMENT',
    //  rating_grade: 'RATING_GRADE',
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
    Default: 'default',
    Narrow: 'narrow',
    Large: 'large',
    Center: 'center',
    Left: 'left',
    Right: 'right',
} as const

export type TypographyStyle =
    typeof OTypographyStyle[keyof typeof OTypographyStyle]

// MY ICON TYPES
export const OMyIcon = {
    Logo: 'LOGO',
    DoubleArrows: 'DOUBLEARROWS',
    Close: 'CLOSE',
    SomethingElse: 'SOMETHINGELSE',
} as const

export type MyIcon = typeof OMyIcon[keyof typeof OMyIcon]

// ORIENTATION TYPES
export const OOrientation = {
    Up: 'UP',
    Down: 'DOWM',
} as const

export type Orientation = typeof OOrientation[keyof typeof OOrientation]

// BUTTON TYPES
export const OBtn = {
    Primary: 'PRIMARY',
    Naked: 'NAKED',
    Close: 'CLOSE',
} as const

export type Btn = typeof OBtn[keyof typeof OBtn]


// VIEWS 
export const OView = {
    grid: 'GRID',
    list: 'LIST',
} as const

export type View = typeof OView[keyof typeof OView]