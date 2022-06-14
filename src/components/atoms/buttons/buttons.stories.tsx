import { storiesOf } from '@storybook/react'
import Button from '.'

storiesOf('Button', module).add('PRIMARY', () => (
    <Button onClick={() => {}} btn="PRIMARY">
        Hello Button
    </Button>
))

storiesOf('Button', module).add('CLOSE', () => (
    <Button onClick={() => {}} btn="CLOSE" />
))
