export interface Flashcard {
    subject: string; // required field 
    flashset: flashset[]; // user can have one or more flashsets
}

export interface flashset {
    term: string;  // required field
    definition: string;
}