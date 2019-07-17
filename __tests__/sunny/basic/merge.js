import { assert } from '../../helper';
import { ST } from '../../../st';

export class MergeTest {
    async execute() {
        const st = new ST();

        const data = {
            name: 'Jakub',
            surname: 'Mifek',
            age: 24,
        }

        const template = {
            "{{ #merge }}": [
                {
                    name: '{{ name }}',
                    surname: '{{ surname }}',
                },
                {
                    surname: '{{ surname }}',
                    age: '{{ age }}',
                }
            ]
        }

        const expected = {
            name: 'Jakub',
            surname: 'Mifek',
            age: 24,
        }

        const result = await st.transform(template, data);

        assert(result.isSame(expected), `${
            JSON.stringify(result, null, 2)
            } expected to equal ${JSON.stringify(expected, null, 2)}`);
    }
}