
import styles from './index.css';
import Hooks from './hooks';
import HooksTwo from './hooksTwo';
import Class from './class';

export default function() {
  return (
    <div>
      <h1>class Component VS function Component</h1>
      <Class />
      <Hooks />
      <HooksTwo />
    </div>
  );
}
