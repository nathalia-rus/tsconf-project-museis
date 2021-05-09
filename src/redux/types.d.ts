declare module 'stateInterfaces' {
    interface IQuote {
        author: string
        god_id: string
        text: string
        source: string
    }

    interface IGod {
        id: string
        name: string
        main_quote_id: string
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
        isLoading: boolean
        error: any
    }
}
