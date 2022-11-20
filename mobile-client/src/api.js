import { medicines } from './dummy-data';

const realApi = false;

function findMedicines(query: string) {
    if (realApi) {

    } else {
        return medicines;
    }
}

export { findMedicines };
