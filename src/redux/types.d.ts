declare module 'stateInterfaces' {
    interface IQuote {
        author: string
        god_id: string
        text: string
        source: string
    }

    interface IImage {
        id: string
        url: string
        small_url?: string
        medium_url?: string
        big_url?: string
    }

    interface IImgObj {
        [key: string]: IImage
    }

    interface IGod {
        id: string
        name: string
        main_quote_id: string
        image: string
    }

    interface IGodObj {
        [key: string]: IGod
    }

    interface IQuoteObj {
        [key: string]: IQuote
    }

    export interface IGodsState {
        gods: IGodObj
        gods_list: string[]
        quotes: IQuoteObj
        images: IImgObj
        isLoading: boolean
        error: any
    }
}
