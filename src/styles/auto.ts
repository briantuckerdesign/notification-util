import { darkStyles } from './dark';
import { lightStyles } from './light';

export const autoStyles = `
${lightStyles}
@media (prefers-color-scheme: dark) {
    ${darkStyles}
}
`;
