import { IGodObj, IImgObj, IQuoteObj } from 'stateInterfaces'
import artemis from '../../assets/gods/artemis.png'
import athena from '../../assets/gods/athena.png'
import athena2 from '../../assets/gods/athena2.png'
import hera from '../../assets/gods/hera.png'
import dyonisus from '../../assets/gods/dyonisus.png'

export const gods_quotes: IQuoteObj = {
    'a-q-1': {
        god_id: 'artemis',
        author: 'homer',
        text:
            'The rose Dawn might have found them weeping still had not grey-eyed Athena slowed the night when night was most profound, and held the Dawn under the Ocean of the East.',
        source: 'Illiad book VI',
    },
    'ath-q-1': {
        god_id: 'athena',
        author: 'homer',
        text:
            'The rose Dawn might have found them weeping still had not grey-eyed Athena slowed the night when night was most profound, and held the Dawn under the Ocean of the East.',
        source: 'Illiad book VI',
    },
    'dem-q-1': {
        god_id: 'demeter',
        author: 'homer',
        text:
            'The rose Dawn might have found them weeping still had not grey-eyed Athena slowed the night when night was most profound, and held the Dawn under the Ocean of the East.',
        source: 'Illiad book VI',
    },
    'dio-q-1': {
        god_id: 'dyonisus',
        author: 'homer',
        text:
            'The rose Dawn might have found them weeping still had not grey-eyed Athena slowed the night when night was most profound, and held the Dawn under the Ocean of the East.',
        source: 'Illiad book VI',
    },
    'z-q-1': {
        god_id: 'zeus',
        author: 'homer',
        text:
            'The rose Dawn might have found them weeping still had not grey-eyed Athena slowed the night when night was most profound, and held the Dawn under the Ocean of the East.',
        source: 'Illiad book VI',
    },
    'h-q-1': {
        god_id: 'hera',
        author: 'homer',
        text:
            'The rose Dawn might have found them weeping still had not grey-eyed Athena slowed the night when night was most profound, and held the Dawn under the Ocean of the East.',
        source: 'Illiad book VI',
    },
    'apo-q-1': {
        god_id: 'apollo',
        author: 'homer',
        text:
            'The rose Dawn might have found them weeping still had not grey-eyed Athena slowed the night when night was most profound, and held the Dawn under the Ocean of the East.',
        source: 'Illiad book VI',
    },
    'heph-q-1': {
        god_id: 'hephaistos',
        author: 'homer',
        text:
            'The rose Dawn might have found them weeping still had not grey-eyed Athena slowed the night when night was most profound, and held the Dawn under the Ocean of the East.',
        source: 'Illiad book VI',
    },
    'pos-q-1': {
        god_id: 'poseidon',
        author: 'homer',
        text:
            'The rose Dawn might have found them weeping still had not grey-eyed Athena slowed the night when night was most profound, and held the Dawn under the Ocean of the East.',
        source: 'Illiad book VI',
    },
    'ares-q-1': {
        god_id: 'ares',
        author: 'homer',
        text:
            'The rose Dawn might have found them weeping still had not grey-eyed Athena slowed the night when night was most profound, and held the Dawn under the Ocean of the East.',
        source: 'Illiad book VI',
    },
}

export const gods_list: string[] = [
    'athena',
    'artemis',
    'hera',
    'dyonisus',
    'zeus',
    'apollo',
    'hephaistos',
    'poseidon',
    'ares',
]

export const god_images: IImgObj = {
    artemis_img_1: {
        id: 'artemis_img_1',
        url: artemis,
    },
    athena_img_1: {
        id: 'athena_img_1',
        url: athena,
    },
    demeter_img_1: {
        id: 'demeter_img_1',
        url: athena2,
    },
    hera_img_1: {
        id: 'hera_img_1',
        url: hera,
    },
    dyonisus_img_1: {
        id: 'dyonisus_img_1',
        url: dyonisus,
    },
}

export const godsData: IGodObj = {
    demeter: {
        id: 'demeter',
        name: 'demeter',
        main_quote_id: 'dem-q-1',
        image: 'demeter_img_1',
    },
    hera: {
        id: 'hera',
        name: 'hera',
        main_quote_id: 'h-q-1',
        image: 'hera_img_1',
    },
    artemis: {
        id: 'artemis',
        name: 'artemis',
        main_quote_id: 'a-q-1',
        image: 'artemis_img_1',
    },
    athena: {
        id: 'athena',
        name: 'athena',
        main_quote_id: 'ath-q-1',
        image: 'hera_img_1',
    },
    dyonisus: {
        id: 'dyonisus',
        name: 'dyonisus',
        main_quote_id: 'dio-q-1',
        image: 'dyonisus_img_1',
    },

    zeus: {
        id: 'zeus',
        name: 'zeus',
        main_quote_id: 'z-q-1',
        image: 'demeter_img_1',
    },

    apollo: {
        id: 'apollo',
        name: 'apollo',
        main_quote_id: 'apo-q-1',
        image: 'hera_img_1',
    },
    hephaistos: {
        id: 'hephaistos',
        name: 'hephaistos',
        main_quote_id: 'heph-q-1',
        image: 'hera_img_1',
    },
    poseidon: {
        id: 'poseidon',
        name: 'poseidon',
        main_quote_id: 'pos-q-1',
        image: 'demeter_img_1',
    },
    ares: {
        id: 'ares',
        name: 'ares',
        main_quote_id: 'ares-q-1',
        image: 'hera_img_1',
    },
}
