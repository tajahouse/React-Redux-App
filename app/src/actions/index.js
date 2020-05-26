export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';

export function getCharacters() {
    console.log('action')
    return {
        type:FETCH_CHARACTERS
    };
}