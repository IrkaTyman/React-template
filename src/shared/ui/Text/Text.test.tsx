import {Text} from './Text'
import { render, screen } from '@testing-library/react';

describe('Button', () => {
    test('test render', () => {
        render(<Text/>)
        expect(screen.getByTestId('Text')).toBeInTheDocument()
    })
})
