import { IGodObj, IImgObj, IQuoteObj } from 'stateInterfaces'
import artemis from '../../assets/gods/artemis.png'
import athena2 from '../../assets/gods/athena2.png'
import hera from '../../assets/gods/hera.png'
import dyonisus from '../../assets/gods/dyonisus.png'
import apollo from '../../assets/gods/apollo.png'
import ares from '../../assets/gods/ares.jpg'
import zeus from '../../assets/gods/zeus.png'
import poseidon from '../../assets/gods/poseidon.jpg'
import athena from '../../assets/gods/athena.jpg'
import hephaistos from '../../assets/gods/hephaistos.jpg'

export const gods_quotes: IQuoteObj = {
    'a-q-1': {
        god_id: 'artemis',
        author: 'Kathryn Budig',
        text: "My motto in life is 'aim true'. It came from my love of Artemis, the goddess of the hunt. She inspired me to sport a gold arrow around my neck because it reminded me of her strength and that I can always hit my mark when I set intention, follow what makes my heart beat, and aim true. The arrow was a reminder that I can cut through any obstacles, that I have power, beauty, and the ability to choose love over fear every moment of my life.",
        source: 'Make My Aim True: A Greek Goddess Shows Me the Way',
    },
    'ath-q-1': {
        god_id: 'athena',
        author: 'homer',
        text: 'The rose Dawn might have found them weeping still had not grey-eyed Athena slowed the night when night was most profound, and held the Dawn under the Ocean of the East.',
        source: 'Illiad book VI',
    },
    'ath-q-2': {
        god_id: 'athena',
        author: 'Aeschylus',
        text: 'You wish to be called righteous rather than act right. [...] I say, wrong must not win by technicalities.',
        source: 'The Oresteia',
    },
    'dem-q-1': {
        god_id: 'demeter',
        author: 'homer',
        text: 'The rose Dawn might have found them weeping still had not grey-eyed Athena slowed the night when night was most profound, and held the Dawn under the Ocean of the East.',
        source: 'Illiad book VI',
    },
    'dio-q-1': {
        god_id: 'dyonisus',
        author: 'Nietzsche',
        text: 'He is the mad ecstasy which hovers over every conception and birth and whose wildness is always ready to move on to destruction and death. He is life which, when it overflows, grows mad and in its profoundest passion is intimately associated with death. This unfathomable world of Dionysus is called mad with good reason.',
        source: 'Dionysus, Tragedy, and the Affirmation of Life',
    },
    'z-q-1': {
        god_id: 'zeus',
        author: 'Aeschylus',
        text: 'For know that no one is free, except Zeus.',
        source: 'The Persians',
    },
    'h-q-1': {
        god_id: 'hera',
        author: 'Nikita Gill',
        text: 'And Hera, grant me your fury, so I can remind my enemies I am not the weakness they perceive, I am the oncoming storm, I am war',
        source: "A Woman's Prayer to the Goddesses",
    },
    'apo-q-1': {
        god_id: 'apollo',
        author: 'Jose Marti',
        text: 'Every human being has within him an ideal man, just as every piece of marble contains in a rough state a statue as beautiful as the one that Praxiteles the Greek made of the god Apollo.',
        source: 'Selected Writings',
    },
    'heph-q-1': {
        god_id: 'hephaistos',
        author: 'Rick Riordan',
        text: 'It isn’t easy being a brilliant inventor, always alone. Always misunderstood. Easy to turn bitter, make horrible mistakes. People are more difficult to work with than machines. And when you break a person, he can’t be fixed.',
        source: 'The lost hero',
    },
    'pos-q-1': {
        god_id: 'poseidon',
        author: 'Stephen Cran',
        text: 'Tell her this And more, — That the king of the seas Weeps too, old, helpless man. The bustling fates Heap his hands with corpses Until he stands like a child With surplus of toys',
        source: 'Complete Poems of Stephen Crane',
    },
    'ares-q-1': {
        god_id: 'ares',
        author: 'C.S Lewis',
        text: 'With deep wonder he thought to himself, "My eyes have seen Mars and Venus. I have seen Ares and Aphrodite.',
        source: 'Perelandra',
    },
}

export const gods_list: string[] = [
    'dyonisus',
    'hera',
    'artemis',
    'poseidon',
    'apollo',
    'zeus',
    'hephaistos',
    'ares',
    'athena_wisdom',
    'athena_warfare',
]

export const god_images: IImgObj = {
    artemis_img_1: {
        id: 'artemis_img_1',
        url: artemis,
    },
    hephaistos_img_1: {
        id: 'hephaistos_img_1',
        url: hephaistos,
    },
    athena_img_1: {
        id: 'athena_img_1',
        url: athena,
    },
    demeter_img_1: {
        id: 'demeter_img_1',
        url: athena,
    },
    athena_img_2: {
        id: 'athena_img_2',
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
    apollo_img_1: {
        id: 'apollo_img_1',
        url: apollo,
    },
    ares_img_1: {
        id: 'ares_img_1',
        url: ares,
    },
    zeus_img_1: { id: 'zeus_img_1', url: zeus },
    poseidon_img_1: { id: 'poseidon_img_1', url: poseidon },
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
        image: 'athena_img_1',
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
        image: 'zeus_img_1',
    },

    apollo: {
        id: 'apollo',
        name: 'apollo',
        main_quote_id: 'apo-q-1',
        image: 'apollo_img_1',
    },
    hephaistos: {
        id: 'hephaistos',
        name: 'hephaistos',
        main_quote_id: 'heph-q-1',
        // image: 'athena_img_2',
        image: 'hephaistos_img_1',
    },
    athena_wisdom: {
        id: 'athena_wisdom',
        name: 'athena I',
        main_quote_id: 'ath-q-2',
        image: 'athena_img_2',
    },
    athena_warfare: {
        id: 'athena_warfare',
        name: 'athena II',
        main_quote_id: 'ath-q-1',
        image: 'athena_img_1',
    },
    poseidon: {
        id: 'poseidon',
        name: 'poseidon',
        main_quote_id: 'pos-q-1',
        image: 'poseidon_img_1',
    },
    ares: {
        id: 'ares',
        name: 'ares',
        main_quote_id: 'ares-q-1',
        image: 'ares_img_1',
    },
}
