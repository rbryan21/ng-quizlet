export class FlashcardSet {
    name: string;
    author: {
        email: string;
        author_id: string;
    };
    flashcards: [{
        term: string;
        definition: string;
    }];
}