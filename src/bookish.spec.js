import axios from "axios";

describe('Bookish', () => {

    beforeAll(() => {
        return axios.delete('http://locahost:8080/book?_cleanup=true')
            .catch((err) => err);
    });

    afterEach(() => {
        return axios.delete('http://localhost:8080/books?_cleanup=true');
    });

    beforeEach(() => {
        const books = [
            { 'name': 'Refactoring', 'id': 1 },
            { 'name': 'Domain-driven design', 'id': 2 },
            { 'name': 'Building Microservices', 'id': 3 }
        ];
        return books.map(item => axios.post('http://locahost:8080/books/', item, {
            headers: { 'Content-type': 'application/json' },
        }));
    });

}
);