
import styles from './index.css';
import HooksDome from './hooks';
import HooksDomeTwo from './hooksTwo';
import ClassDome from './class';

export default function() {
  return (
    <div>
      <h1>Page index</h1>
      <ClassDome />
      <HooksDome />
      <HooksDomeTwo />
    </div>
  );
}
