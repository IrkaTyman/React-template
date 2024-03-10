import { createRoot } from 'react-dom/client';
import Text from "./shared/Text/Text";

const root = createRoot(document.getElementById('root')!);
root.render(<div>
    <Text/>
</div>);