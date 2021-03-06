import { FormItem, ValidationOptions } from 'types'

// GLOBAL STYLES TYPES
export const OColourPalette = {
    primary: 'var(--color-primary)',
    light: 'var(--color-light)',
} as const

export type ColourPalette = typeof OColourPalette[keyof typeof OColourPalette]

// CATEGORIES
export const OCategory = {
    Literature: 'literature',
    Paintings: 'paintings',
    ClassicalMusic: 'classicalmusic',
    Sculptures: 'sculptures',
} as const

export type Category = typeof OCategory[keyof typeof OCategory]

// NAVIGATION
export const ONavigationItem = {
    ...OCategory,
    Home: 'home',
    Questionnaire: 'questionnaire',
    Categories: 'categories',
    Favourites: 'favourites',
} as const

export type NavigationItem =
    typeof ONavigationItem[keyof typeof ONavigationItem]

// RATING TYPES
export const ORatingType = {
    heart: 'HEART',
    sentiment: 'SENTIMENT',
    grade: 'GRADE',
} as const

export type RatingType = typeof ORatingType[keyof typeof ORatingType]

// FORM TYPES
export const OFormType = {
    checkbox: 'CHECKBOX',
    radio: 'RADIO',
    rating: 'RATING',
} as const

export type FormType = typeof OFormType[keyof typeof OFormType]

export type Question = {
    title: string
    answer: string[]
    options: FormItem[]
    formType: FormType
    ratingType?: RatingType
    hasValidation?: ValidationOptions
    img_url?: string
}

// TYPOGRAPHY OPTIONS
export const OtypographyOptions = {
    Default: 'default',
    Narrow: 'narrow',
    Large: 'large',
    Center: 'center',
    Left: 'left',
    Right: 'right',
} as const

export type typographyOptions =
    typeof OtypographyOptions[keyof typeof OtypographyOptions]

// MY ICON TYPES
export const OIcon = {
    Logo: 'logo',
    DoubleArrows: 'double_arrows',
    Close: 'close',
    Favourite: 'favourite',
    SomethingElse: 'something_else',
} as const

export type MyIcon = typeof OIcon[keyof typeof OIcon]

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
    SetFavourite: 'SET_FAVOURITE',
} as const

export type Btn = typeof OBtn[keyof typeof OBtn]

// VIEWS
export const OView = {
    grid: 'GRID',
    list: 'LIST',
} as const

export type View = typeof OView[keyof typeof OView]
