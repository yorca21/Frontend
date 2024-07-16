import { forwardRef } from 'react';
import { Input } from 'rsuite';

const Textarea = forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);
Textarea.displayName = 'Textarea';
export default Textarea;
